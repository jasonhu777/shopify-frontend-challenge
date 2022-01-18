import React from "react";
import List from "./components/List.js";
import Navigation from "./components/Navigation.js";

function App() {
  return (
    <div className="App row bg-dark text-dark bg-opacity-10">
      <Navigation />
      <List />
    </div>
  );
}

export default App;
