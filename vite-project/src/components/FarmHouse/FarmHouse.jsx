import React from "react";
import "./FarmHouse.css";
import Cards from "../Cards/Cards";
import farmhouse from "../../../images/farmhouse2.jpg";
import farmhouse1 from "../../../images/farmhouse1.jpg";
import farmhouse2 from "../../../images/farmhouse.jpg";
import village from "../../../images/village.avif";
import village1 from "../../../images/village1.avif";
import village2 from "../../../images/village2.avif";
import huthHouse from "../../../images/huthouse.jpg";
import huthHouse1 from "../../../images/huthouse1.jpg";
import huthHouse2 from "../../../images/huthouse2.jpg";
import old from "../../../images/old.avif";
import old1 from "../../../images/old1.avif";
import old2 from "../../../images/old2.avif";

const FarmHouse = () => {
  return (
    <div id="farmHouse">
      <Cards
        image1={farmhouse}
        image2={farmhouse1}
        image3={farmhouse2}
        title={"1BHK Farm House in Karachi"}
        price={"4,00,00,000"}
      />
      <Cards
        image1={village}
        image2={village1}
        image3={village2}
        title={"3BK Village Houses"}
        price={"10,00,00,000."}
      />
      <Cards
        image1={huthHouse}
        image2={huthHouse1}
        image3={huthHouse2}
        title={"4BHk Hut House in Islamabad"}
        price={"16,000,000"}
      />
      <Cards
        image1={old}
        image2={old1}
        image3={old2}
        title={"2BHK Old House in Karachi"}
        price={"1,00,00,000."}
      />
    </div>
  );
};

export default FarmHouse;
