import React, { useState } from "react";

const Rating = ({ setRating }) => {
  const [selectedRating, setSelectedRating] = useState(null);

  console.log("The Number: ", selectedRating);
  const handleSubmit = () => {
    if (selectedRating) {
      setRating(selectedRating);
    }
  };

  return (
    <div className="rating">
      <img
        src="/assets/icon-star.svg"
        alt="Star rating"
        className="rating-image"
      />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className="rating-buttons">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            className={selectedRating === rating ? "selected" : ""}
            onClick={() => setSelectedRating(rating)}
          >
            {rating}
          </button>
        ))}
      </div>
      <button type="submit" onClick={handleSubmit}>
        SUBMIT
      </button>
    </div>
  );
};

export default Rating;
