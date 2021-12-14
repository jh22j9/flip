import React from "react";
import { useNavigate } from "react-router";

import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

function MakeBoard({ content, nextRoute }) {
  const navigate = useNavigate();

  const onBackArrow = () => navigate(-1);
  const onForwardArrow = () => navigate(`/${nextRoute}`);

  return (
    <div className="wrapper">
      <div className="prev">
        <IoMdArrowDropleft
          fontSize="2.5rem"
          cursor="pointer"
          onClick={onBackArrow}
        />
      </div>
      <div className="content">{content}</div>
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

export default MakeBoard;
