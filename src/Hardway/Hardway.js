import React from "react";
import "./Hardway.css";
import Dom from "./img/Dom.png";
console.log(Dom);
export const Hardway = () => {
  return (
    <div className="hardway-block">
      <div className="hardway-text">
        <p className="zagolovok-text">Made The Hard Way</p>
        <p className="text-mini">
          Our signature craftsmanship has been honed over a decade of
          manufacturing innovation here in Portland, Oregon. We combine the
          skills of our small in-house team with the collective strength of
          collaborators throughout the US to deliver quality products worth
          investing in.
        </p>
      </div>

      <img src={Dom} alt="" className="hardway-photo" />
    </div>
  );
};
