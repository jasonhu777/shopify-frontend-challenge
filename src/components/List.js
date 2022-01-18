import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card.js";
import InfiniteScroll from "react-infinite-scroll-component";

const url = "https://api.nasa.gov/planetary/apod?api_key=";
const apiKey = "yLsDKAGWqoplV1HG6FjQXXsXmWrMNKdXZMgRYUoz";
let chosenDate = new Date();
let isFetching = false;

export default function List() {
  const [imageDataArray, setImageDataArray] = useState([]);
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    if (!isFetching) {
      isFetching = true;
      const [startDate, endDate] = getDateRange(chosenDate);
      axios.get(url.concat(apiKey).concat(startDate).concat(endDate)).then((response) => {
        setImageDataArray(response.data.reverse());
      }).catch(error => console.log(error));
    }
  };

  // Initial Data fetch
  useEffect(() => {
    fetchData();
  }, []);

  const getDateRange = () => {
    const endDate = "&end_date=".concat(chosenDate.toISOString().split("T")[0]);
    chosenDate.setDate(chosenDate.getDate() - 6);
    const startDate = "&start_date=".concat(chosenDate.toISOString().split("T")[0]);
    chosenDate.setDate(chosenDate.getDate() - 1);
    return [startDate, endDate];
  };
  const generateCards = () => {
    if (imageDataArray.length > 0) {
      const addedCards = [];
      for (let i = 0; i < imageDataArray.length; i++) {
        addedCards.push(<Card imageData={imageDataArray[i]} key={imageDataArray[i].date} />);
      }
      setCards([...cards, ...addedCards]);
    }
  };

  useEffect(() => {
    if(imageDataArray.length > 0) {
      generateCards(imageDataArray);
      isFetching = false;
    }
  }, [imageDataArray]);

  return (
    <main className="container-fluid align-items-center col-10 col-lg-8 col-xl-6 col-xxl-5" style={{ textAlign: 'center' }}>
      <InfiniteScroll
        dataLength={cards.length}
        className=""
        next={fetchData}
        hasMore={true}
        loader={
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        }
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {cards}
      </InfiniteScroll>
    </main>
  );
}
