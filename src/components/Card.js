import React from "react";

function Card({ content, flipCard, isFlipped }) {
  return (
    <div className="card" onClick={flipCard}>
      <img className="front-face" ssrc={content.imgUrl} alt={content.id}></img>
      <h3 className="back-face">Click!</h3>
    </div>
  );
}

export default Card;
