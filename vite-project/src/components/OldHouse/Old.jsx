import React from "react";
import "./Old.css";
import old from "../../../images/old.avif";
import old1 from "../../../images/old1.avif";
import old2 from "../../../images/old2.avif";
import farmhouse from "../../../images/farmhouse2.jpg";
import farmhouse1 from "../../../images/farmhouse1.jpg";
import farmhouse2 from "../../../images/farmhouse.jpg";
import huthHouse from "../../../images/huthouse.jpg";
import huthHouse1 from "../../../images/huthouse1.jpg";
import huthHouse2 from "../../../images/huthouse2.jpg";
import villa from "../../../images/villa.jpg";
import villa1 from "../../../images/villa1.jpg";
import villa2 from "../../../images/villa3.jpg";

import Cards from "../Cards/Cards";

const Old = () => {
  return (
    <div id="old">
      <Cards
        image1={old}
        image2={old1}
        image3={old2}
        title={"2BHK Old House in Karachi"}
        price={"1,00,00,000."}
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
        image1={villa}
        image2={villa1}
        image3={villa2}
        title={"2BHK Villa in Lahore"}
        price={"2,00,00,000."}
      />
    </div>
  );
};

export default Old;
