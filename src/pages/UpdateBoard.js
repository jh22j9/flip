import React, { useRef } from "react";
import MakeBoard from "../components/MakeBoard";
import Cards from "../components/Cards";
import { RiUploadCloudFill } from "react-icons/ri";

function UpdateBoard() {
  const cards = Array(9).fill(0); // TODO: state 불러오기
  const uploadImage = useRef();

  const onUploadIcon = () => {
    uploadImage.current.click();
  };

  const uploadIcon = (
    <>
      <RiUploadCloudFill
        fontSize="1.5rem"
        onClick={onUploadIcon}
        cursor="pointer"
      />
      <input ref={uploadImage} type="file" accept="image/*" />
    </>
  );

  const content = <Cards cards={cards} content={uploadIcon} />;

  return (
    <>
      <MakeBoard content={content} nextRoute="save" />
    </>
  );
}

export default UpdateBoard;
