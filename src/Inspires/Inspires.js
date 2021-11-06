import React from "react";
import "./Inspires.css";
import sheet from "./img/sheet.png";

export const Inspires = () => {
  return (
    <div className="inspires-block">
      <div className="inspires-text">
        <p className="inspires-text">We Hope You'll Join Us</p>
        <p className="inspires-mini">READ MORE ABOUT OUR STORY</p>
      </div>

      <div className="inspires-container">
        <img src={sheet} alt="" className="sheet" />
        <p className="inspires-text__bootom">Design Inspiress</p>
        <p className="inspires-mini__bootom">
          Build your dream workspace, so you can get your best work done.
        </p>
      </div>
    </div>
  );
};
