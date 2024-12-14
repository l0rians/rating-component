import React, { useState } from "react";
import Rating from "./components/Rating";
import ThankYou from "./components/ThankYou";
import "./App.css";

const App = () => {
  const [rating, setRating] = useState(null);

  console.log(rating);
  return (
    <div className="app">
      {rating ? <ThankYou rating={rating} /> : <Rating setRating={setRating} />}
    </div>
  );
};

export default App;
