import React, { useState, useEffect } from "react";
// import Card from "./Card";

function Cards({ cards }) {
  const [flippedCard, setFlippedCard] = useState([]);
  const [matched, setMatched] = useState([]);

  const flipCard = (index) => {
    setFlippedCard((flipped) => [...flipped, index]);
  };

  useEffect(() => {
    const first = cards[flippedCard[0]];
    const second = cards[flippedCard[1]];

    if (second && first.id === second.id) {
      setMatched([...matched, first.id]);
      // setMatchedId(first.id);
    }

    if (flippedCard.length === 2) {
      setTimeout(() => setFlippedCard([]), 1000);
    }
  }, [flippedCard]);

  return (
    <div className="cards">
      {cards.map((image, index) => {
        let isFlipped = false;

        if (flippedCard.includes(index)) isFlipped = true;
        if (matched.includes(image.id)) isFlipped = true;

        return (
          <div
            className={`card ${isFlipped ? "flipped" : ""}`}
            key={index}
            onClick={() => flipCard(index)}
          >
            <img className="front-face" src={image.imgUrl} alt={image.id} />
            <h3 className="back-face">Click!</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
