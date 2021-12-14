import React from "react";
import MakeBoard from "../components/MakeBoard";
import Cards from "../components/Cards";

function SaveBoard() {
  const cards = Array(9).fill(0); // TODO: state 불러오기

  const img = <img></img>;
  const content = (
    <div className="content-wrapper">
      <Cards cards={cards} content={img} />
      <div className="input-fields">
        <input type="text" placeholder="보드 제목을 입력하세요."></input>
        <input type="text" placeholder="설명을 덧붙여보세요."></input>
        <input type="text" placeholder="태그를 추가해보세요."></input>
      </div>
    </div>
  );
  return <MakeBoard content={content} nextRoute="play" />;
}

export default SaveBoard;
