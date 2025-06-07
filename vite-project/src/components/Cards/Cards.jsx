import React from "react";
import "./Cards.css";

const Cards = ({ image1, image2, image3, title, price }) => {
  return (
    <div className="card">
      <div className="images">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
      </div>
      <span className="span1">{title}</span>
      <span className="span2">PKR {price}</span>
    </div>
  );
};

export default Cards;
