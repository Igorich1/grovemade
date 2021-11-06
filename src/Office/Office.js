import React from "react";
import "./Office.css";
import Phoffice from "./img/Office.png";

export const Office = () => {
  return (
    <div className="office-block">
      <img src={Phoffice} alt="" className="office__photo" />

      <div className="office__text">
        <p className="office__heading">Home Office Inspiration</p>

        <p className="office__middle">
          Working from home can be a challenge—see some creative solutions to
          get it just right.
        </p>
        <a href="s" className="office__bottom">
          LEARN MORE
        </a>
      </div>
    </div>
  );
};
