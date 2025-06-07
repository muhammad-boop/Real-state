import React from "react";
import "./Houses.css";
import house from "../../../images/house.jpg";
import house1 from "../../../images/housekichen.jpg";
import house2 from "../../../images/houseliving.jpg";
import Cards from "../Cards/Cards";
import farmhouse from "../../../images/farmhouse2.jpg";
import farmhouse1 from "../../../images/farmhouse1.jpg";
import farmhouse2 from "../../../images/farmhouse.jpg";
import huthHouse from "../../../images/huthouse.jpg";
import huthHouse1 from "../../../images/huthouse1.jpg";
import huthHouse2 from "../../../images/huthouse2.jpg";
import old from "../../../images/old.avif";
import old1 from "../../../images/old1.avif";
import old2 from "../../../images/old2.avif";

const House = () => {
  return (
    <div id="houses">
      <Cards
        image1={house}
        image2={house1}
        image3={house2}
        title={"2BHK Villa in Lahore"}
        price={"2,00,00,000."}
      />
      <Cards
        image1={farmhouse}
        image2={farmhouse1}
        image3={farmhouse2}
        title={"1BHK Farm House in Karachi"}
        price={"4,00,00,000"}
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

export default House;
