import React from "react";
import "./PoolHouse.css";
import poolHouse from "../../../images/poolhouse.jpg";
import poolHouse2 from "../../../images/poolhouse2.jpg";
import village from "../../../images/village.avif";
import village1 from "../../../images/village1.avif";
import village2 from "../../../images/village2.avif";
import house from "../../../images/house.jpg";
import house1 from "../../../images/housekichen.jpg";
import house2 from "../../../images/houseliving.jpg";
import farmhouse from "../../../images/farmhouse2.jpg";
import farmhouse1 from "../../../images/farmhouse1.jpg";
import farmhouse2 from "../../../images/farmhouse.jpg";

import Cards from "../Cards/Cards";

const PoolHouse = () => {
  return (
    <div id="PoolHouse">
      <Cards
        image1={poolHouse}
        image2={poolHouse2}
        image3={poolHouse}
        title={"2BHK Pool House in Islamabad"}
        price={"2,00,00,000."}
      />
      <Cards
        image1={village}
        image2={village1}
        image3={village2}
        title={"3BK Village Houses"}
        price={"10,00,00,000."}
      />
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
    </div>
  );
};

export default PoolHouse;
