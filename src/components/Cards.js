import React from "react";
import Card from "./Card";

function Cards({ cards, content }) {
  return (
    <div className="cards">
      {cards.map((_, i) => (
        <Card content={content} />
      ))}
    </div>
  );
}

export default Cards;
