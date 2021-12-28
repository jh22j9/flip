import React from "react";
import Cards from "../components/Cards";
import { FaLink } from "react-icons/fa";
import { BsStar } from "react-icons/bs";

function PlayBoard() {
  const urls = [
    "https://doodleipsum.com/700x700?i=9c8765a80fc8a28621b7178c9aec581d",
    "https://doodleipsum.com/700x700?i=5d1d0459018cb18996f192488490c344",
    "https://doodleipsum.com/700x700?i=008c40ecc01a1085a88f20c2fa995ec4",
    "https://doodleipsum.com/700x700?i=7d79895540161ca8c31dff95199e7151",
  ];

  const images = urls.map((url, index) => ({ id: index + 1, imgUrl: url }));
  const lastOne = {
    id: 9,
    imgUrl:
      "https://doodleipsum.com/700x700?i=a79e5ddf189bb318050963124f848335",
  };
  const pairOfCards = [...images, ...images, lastOne];

  // TODO: 스크롤 다운 시 bottom-line 사라지도록 구현하기

  return (
    <div className="play-board-wrapper">
      <div className="top-line"></div>
      <div className="board-wrapper">
        <div className="cards-section">
          <Cards cards={pairOfCards} />
        </div>
        <div className="side-bar-section">
          <div className="side-bar-content">
            <div className="icons">
              <FaLink className="icon-link" fontSize="2.2rem" />
              <BsStar className="icon-star" fontSize="2.3rem" />
            </div>
            <div className="score">2 / 8</div>
          </div>
        </div>
      </div>
      <div className="bottom-line"></div>
      <div className="info-wrapper">
        <div className="info">
          <div className="info-text">
            <h1>Ipsum Lorem 작가의 일러스트레이션</h1>
            <p>더 많은 일러스트를 볼 수 있어요.</p>
            <div className="username">flipper01</div>
          </div>
          <div className="info-icons">
            <div className="tags">
              <span>태그1</span>
              <span>태그2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayBoard;
