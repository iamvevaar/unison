import React from "react";
import LOGO from "../Assest/logo.png"

const Header = () => {
  return (
    <div className="nav">
      <div className="logo">
        <div className="icon">
          <img src={LOGO} alt="" />
        </div>
        <div className="text">UNISON</div>
      </div>

      <button className="app">App</button>
    </div>
  );
};

export default Header;
