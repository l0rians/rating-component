import React from "react";

const ThankYou = ({ rating }) => (
  <div className="thank-you">
    <img src="/assets/illustration-thank-you.svg" alt="Thank you" />
    <h1>Thank you!</h1>
    <p className="rating-text">You selected {rating} out of 5</p>
    <p>
      We appreciate you taking the time to give a rating. If you ever need more
      support, don't hesitate to get in touch!
    </p>
  </div>
);

export default ThankYou;
