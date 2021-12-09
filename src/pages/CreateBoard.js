import React, { useState } from "react";

function CreateBoard() {
  const [clickedBtnId, setClickedBtnId] = useState(1);

  const onButtonClick = (id) => {
    setClickedBtnId(id);
  };

  const boards = [
    { id: 1, size: "3 X 3" },
    { id: 2, size: "3 X 4" },
    { id: 3, size: "4 X 4" },
  ];

  return (
    <div className="wrapper">
      <div className="btns-wrapper">
        {boards.map((board) => (
          <button
            key={board.id}
            className={board.id === clickedBtnId ? "clicked-btn" : ""}
            onClick={() => onButtonClick(board.id)}
          >
            {board.size}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CreateBoard;
