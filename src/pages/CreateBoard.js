import React, { useState } from "react";
import MakeBoard from "../components/MakeBoard";

function CreateBoard() {
  const [clickedBtnId, setClickedBtnId] = useState(1);

  const onButtonClick = (id) => {
    setClickedBtnId(id);
  };

  const boards = ["3 X 3", "3 X 4", "4 X 4"];

  const content = (
    <div className="btns-wrapper">
      {boards.map((board, index) => {
        const buttonId = index + 1;
        return (
          <button
            key={index}
            className={buttonId === clickedBtnId ? "clicked-btn" : ""}
            onClick={() => onButtonClick(buttonId)}
          >
            {board}
          </button>
        );
      })}
    </div>
  );

  return <MakeBoard content={content} nextRoute={"update"} />;
}

export default CreateBoard;
