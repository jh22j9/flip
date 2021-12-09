import React from "react";
import { useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();

  const onCreate = () => {
    navigate("/create");
  };

  return (
    <header>
      <div className="top-line"></div>
      <div className="header-main">
        <div className="header-main__content">
          <a href="/">🃏 Fl!p</a>
          <div>
            <button className="create-btn" onClick={onCreate}>
              ➕ Create a board
            </button>
            <button className="signIn-btn">Sign in</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
