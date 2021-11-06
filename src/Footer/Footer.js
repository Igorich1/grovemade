import React from "react";
import "./Footer.css";
import GoUp from "./img/Goup.png";
export const Footer = () => {
  return (
    <footer className="footer-block">
      <div className="info">
        <div className="info__container-top">
          <a href="1" className="text">
            About
          </a>
          <a href="1" className="text">
            Shop
          </a>
          <a href="1" className="text">
            Journal
          </a>
          <a href="1" className="text">
            Support
          </a>
          <a href="1" className="text">
            COVID-19 Info
          </a>
          <a href="1" className="text">
            Order Status
          </a>
          <a href="1" className="text">
            Corporate Sales
          </a>
        </div>
        <div className="info__container-bottom">
          <p className="text"> Newsletter Signup</p>
          <p className="text-info__mini">
            Sign up to our Newsletter to hear about new product releases, learn
            about our design process, and everything else going on behind the
            scenes at Grovemade.
          </p>
        </div>
        <img src={GoUp} alt="" className="go-up" />
      </div>

      <div className="info-bottom">
        <p className="text-info__mini">©2020 Grovemade</p>
        <p className="text-info__mini">Terms & Conditions</p>
        <p className="text-info__mini">Privacy Policy</p>
        <p className="text-info__mini">Site by Department</p>
      </div>
    </footer>
  );
};
