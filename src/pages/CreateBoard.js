import React, { useState } from "react";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

function CreateBoard({ navigate }) {
  const [clickedBtnId, setClickedBtnId] = useState(1);

  const onButtonClick = (id) => {
    setClickedBtnId(id);
  };

  const onBackArrow = () => navigate(-1);

  const onForwardArrow = () => navigate("/save");

  const boards = ["3 X 3", "3 X 4", "4 X 4"];

  return (
    <div className="wrapper">
      <div className="prev">
        <IoMdArrowDropleft
          fontSize="2.5rem"
          cursor="pointer"
          onClick={onBackArrow}
        />
      </div>
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
      <div className="next">
        <IoMdArrowDropright
          fontSize="2.5rem"
          cursor="pointer"
          onClick={onForwardArrow}
        />
      </div>
    </div>
  );
}

export default CreateBoard;
