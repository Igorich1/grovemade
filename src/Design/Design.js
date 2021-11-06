import React from "react";
import "./Design.css";
import Windows from "./img/Windows.png";
import Mac from "./img/Mac.png";

export const Design = () => {
  return (
    <div className="Design-blok">
      <div className="Desing__text">
        <p className="Desing__heading">Design Inspires</p>

        <p className="Desing__middle">
          Build your dream workspace, so you can get your best work done.
        </p>
        <a href="s" className="Desing__bottom">
          GET STARTED
        </a>
      </div>

      <div className="block">
        <div className="Drobot-style">
          <img src={Windows} alt="" className="Windows" />
          <p className="name-model">Desk Pads</p>
          <a href="s" className="Silka-model">
            LEARN MORE
          </a>
        </div>

        <div className="Drobot-style__photo">
          <img src={Mac} alt="" className="Mac" />

          <p className="name-model">Laptop Stands</p>
          <a href="s" className="Silka-model">
            LEARN MORE
          </a>
        </div>
      </div>
    </div>
  );
};
