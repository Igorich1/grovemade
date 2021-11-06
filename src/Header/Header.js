import React from "react";
import "./Header.css";
import logoGrov from "./img/LogoGrov.png";

export const Header = () => {
  return (
    <div className="header">
      <div className="name-left">
        <a href="s" className="name">
          Shop
        </a>
        <a href="s" className="name">
          Explore
        </a>
      </div>
      <div className="img">
        <img src={logoGrov} alt="" className="logoGrov" />
      </div>
      <div className="name-right">
        <a href="s" className="name">
          My Cart
        </a>
      </div>
    </div>
  );
};
