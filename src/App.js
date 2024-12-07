import React, { useState } from "react";
import Rating from "./components/Rating";
import ThankYou from "./components/ThankYou";
import "./App.css";

const App = () => {
  const [rating, setRating] = useState(null);

  const handleRatingSubmit = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <div className="app">
      {rating ? (
        <ThankYou rating={rating} />
      ) : (
        <Rating onSubmit={handleRatingSubmit} />
      )}
    </div>
  );
};

export default App;
