import React from "react";
import "./Presentation.css";
import photo from "./img/photo.png";

export const Presentation = () => {
  return (
    <div className="presentation">
      <img src={photo} alt="" className="presentation__photo" />

      <div className="presentation__text">
        <p className="presentation__heading">The Desk Shelf System</p>

        <p className="presentation__middle">Available in Walnut or Maple</p>
        <a href="ь" className="presentation__bottom">
          LEARN MORE
        </a>
      </div>
    </div>
  );
};
