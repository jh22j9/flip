import React from "react";
import MakeBoard from "../components/MakeBoard";
import Cards from "../components/Cards";

import { FaLink } from "react-icons/fa";
import { BsStar } from "react-icons/bs";
// import { BsStarFill } from "react-icons/bs";

function PlayBoard({ cards }) {
  const img = <img></img>;

  console.log("cards", cards);
  const content = (
    <div className="play-board-wrapper">
      <Cards cards={cards} content={img} />
      <div className="score">2 / 8</div>
      <div className="info">
        <h1>Ipsum Lorem 작가의 일러스트레이션</h1>
        <p>더 많은 일러스트를 볼 수 있어요.</p>
        <div className="tags">
          <span>태그1</span>
          <span>태그2</span>
        </div>
        <div className="username">flipper01</div>
        <FaLink className="icon-link" fontSize="2.2rem" />
        <BsStar className="icon-star" fontSize="2.3rem" />
        {/* <BsStarFill fontSize="1.8rem" /> */}
      </div>
    </div>
  );
  return <MakeBoard content={content} />;
}

export default PlayBoard;
