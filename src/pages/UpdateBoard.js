import React, { useRef } from "react";
import MakeBoard from "../components/MakeBoard";
import { RiUploadCloudFill } from "react-icons/ri";

function UpdateBoard() {
  const cards = Array(9).fill(0); // TODO: state 불러오기
  const uploadImage = useRef();

  const onUploadIcon = () => {
    uploadImage.current.click();
  };
  const content = (
    <div className="cards-wrapper">
      {cards.map((card, index) => (
        <div className="card">
          <RiUploadCloudFill
            fontSize="1.5rem"
            onClick={onUploadIcon}
            cursor="pointer"
          />
          <input ref={uploadImage} type="file" accept="image/*" />
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <MakeBoard content={content} nextRoute="save" />
    </div>
  );
}

export default UpdateBoard;
