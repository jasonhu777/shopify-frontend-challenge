import React, { useState, useEffect } from "react";
import CardHeader from "./CardHeader";

export default function Card({ imageData }) {
  const [liked, setLiked] = new useState(
    localStorage.getItem(imageData.date) === "liked" ? true : false
  );

  useEffect(() => {
    localStorage.setItem(imageData.date, liked ? "liked" : "disliked");
  }, [liked, setLiked]);

  useEffect(() => {
    const storeLike = localStorage.getItem(imageData.date);
    setLiked(storeLike === "liked" ? true : false);
  }, [imageData, setLiked]);

  const handleLikeClick = (e) => {
    setLiked(!liked);
  };

  return (
    <section className="card mt-4 text-dark bg-light shadow bg-body rounded-3">
      {imageData.media_type === "image" && (
        <img
          src={imageData.url}
          className="card-img-top img-responsive"
          alt={`Title:${imageData.title}, Description:${imageData.explanation}`}
        />
      )}

      {imageData.media_type === "video" && (
        <div className="card-img-top ratio ratio-16x9">
          <iframe
            src={imageData.url}
            title={imageData.title}
            allowFullScreen
          ></iframe>
        </div>
      )}
      <CardHeader
        liked={liked}
        handleLikeClick={handleLikeClick}
        date={imageData.date}
        title={imageData.title}
        url={imageData.url}
      />
      <div className="card-body m-0">
        <p
          className="text-justify fs-6 text-justify m-1"
          style={{ textAlign: "justify", textJustify: "inter-word" }}
        >
          {imageData.explanation}
        </p>
      </div>
    </section>
  );
}
