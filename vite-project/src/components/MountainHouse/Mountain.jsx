import React from "react";
import "./Mountain.css";
import mountains from "../../../images/mountain.avif";
import mountains1 from "../../../images/mountain1.avif";
import mountain2 from "../../../images/mountain2.avif";
import Cards from "../Cards/Cards";
import air from "../../../images/air3.avif";
import air1 from "../../../images/air1.avif";
import air2 from "../../../images/air2.avif";
import ski from "../../../images/ski.avif";
import ski1 from "../../../images/ski1.avif";
import ski2 from "../../../images/ski2.avif";
import farmhouse from "../../../images/farmhouse2.jpg";
import farmhouse1 from "../../../images/farmhouse1.jpg";
import farmhouse2 from "../../../images/farmhouse.jpg";

const Mountain = () => {
  return (
    <div id="mountain">
      <Cards
        image1={mountains}
        image2={mountains1}
        image3={mountain2}
        title={"1BHK Mountain House"}
        price={"3,00,00,000."}
      />
      <Cards
        image1={air}
        image2={air1}
        image3={air2}
        title={"3BHK Houses in Murre"}
        price={"12,00,00,000."}
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

export default Mountain;
