import React from "react";
import villa from "../../../images/villa.jpg";
import villa1 from "../../../images/villa1.jpg";
import villa2 from "../../../images/villa3.jpg";
import Cards from "../Cards/Cards";
import house from "../../../images/house.jpg";
import house1 from "../../../images/housekichen.jpg";
import house2 from "../../../images/houseliving.jpg";
import ski from "../../../images/ski.avif";
import ski1 from "../../../images/ski1.avif";
import ski2 from "../../../images/ski2.avif";
import farmhouse from "../../../images/farmhouse2.jpg";
import farmhouse1 from "../../../images/farmhouse1.jpg";
import farmhouse2 from "../../../images/farmhouse.jpg";

import "./Villa.css";

const Villa = () => {
  return (
    <div id="villa">
      <Cards
        image1={villa}
        image2={villa1}
        image3={villa2}
        title={"2BHK Villa in Lahore"}
        price={"2,00,00,000."}
      />
      <Cards
        image1={house}
        image2={house1}
        image3={house2}
        title={"2BHK Villa in Lahore"}
        price={"2,00,00,000."}
      />
      <Cards
        image1={ski}
        image2={ski1}
        image3={ski2}
        title={"4BHK Building In Lahore."}
        price={"22,00,00,000."}
      />
      <Cards
        image1={farmhouse}
        image2={farmhouse1}
        image3={farmhouse2}
        title={"1BHK Farm House in Karachi"}
        price={"4,00,00,000"}
      />
    </div>
  );
};

export default Villa;
