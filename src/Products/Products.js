import React from "react";
import "./Products.css";
import Mobail from "./img/Mobail.png";
import Notebook from "./img/Notebook.png";
import Tablet from "./img/Tablet.png";
import Monitor from "./img/Monitor.png";
import squares from "./img/squares.png";

export const Products = () => {
  return (
    <div className="products-block">
      <div className="featured">
        <p className="heading">Featured Products</p>
        <p className="heading-mini">See What’s Trending Right Now</p>
        <img src={squares} alt="" className="squares" />
      </div>

      <div className="product-block">
        <div className="product-style">
          <img src={Mobail} alt="" className="technology" />
          <p className="model-name">Walnut MagSafe Stand</p>
          <p href="" className="price">
            $120
          </p>
        </div>

        <div className="product-style">
          <img src={Notebook} alt="" className="technology" />
          <p className="model-name">Walnut Laptop Riser</p>
          <p href="" className="price">
            $150
          </p>
        </div>

        <div className="product-style">
          <img src={Tablet} alt="" className="technology" />
          <p className="model-name">Walnut iPad Stand</p>
          <p href="" className="price">
            $80
          </p>
        </div>

        <div className="product-style">
          <img src={Monitor} alt="" className="technology" />
          <p className="model-name">Walnut Monitor Stand</p>
          <p href="" className="price">
            $100
          </p>
        </div>
      </div>
    </div>
  );
};
