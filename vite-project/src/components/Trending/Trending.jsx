import React from "react";
import "./Trending.css";
import villa from "../../../images/villa.jpg";
import villa1 from "../../../images/villa1.jpg";
import villa2 from "../../../images/villa3.jpg";
import farmhouse from "../../../images/farmhouse2.jpg";
import farmhouse1 from "../../../images/farmhouse1.jpg";
import farmhouse2 from "../../../images/farmhouse.jpg";
import house from "../../../images/house.jpg";
import house1 from "../../../images/housekichen.jpg";
import house2 from "../../../images/houseliving.jpg";
import mountains from "../../../images/mountain.avif";
import mountains1 from "../../../images/mountain1.avif";
import mountain2 from "../../../images/mountain2.avif";
import poolHouse from "../../../images/poolhouse.jpg";
import poolHouse2 from "../../../images/poolhouse2.jpg";
import room from "../../../images/room.jpg";
import room1 from "../../../images/room1.jpg";
import room2 from "../../../images/room2.jpg";
import flatHouse from "../../../images/roomhouse.avif";
import flatHouse1 from "../../../images/roomnew.avif";
import flatHouse2 from "../../../images/roomnew1.avif";
import huthHouse from "../../../images/huthouse.jpg";
import huthHouse1 from "../../../images/huthouse1.jpg";
import huthHouse2 from "../../../images/huthouse2.jpg";
import Cards from "../Cards/Cards";

const Trending = () => {
  return (
    <div id="trending">
      <Cards
        image1={villa}
        image2={villa1}
        image3={villa2}
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
        image1={house}
        image2={house1}
        image3={house2}
        title={"2BHK Villa in Lahore"}
        price={"2,00,00,000."}
      />
      <Cards
        image1={mountains}
        image2={mountains1}
        image3={mountain2}
        title={"1BHK Mountain House"}
        price={"3,00,00,000."}
      />
      <Cards
        image1={poolHouse}
        image2={poolHouse2}
        image3={poolHouse}
        title={"2BHK Pool House in Islamabad"}
        price={"2,00,00,000."}
      />
      <Cards
        image1={room}
        image2={room1}
        image3={room2}
        title={"Luxury Rooms For one Person In Pindi"}
        price={"50,000"}
      />
      <Cards
        image1={flatHouse}
        image2={flatHouse1}
        image3={flatHouse2}
        title={"1BHK Flat in Murre"}
        price={"16,00,00"}
      />
      <Cards
        image1={huthHouse}
        image2={huthHouse1}
        image3={huthHouse2}
        title={"4BHk Hut House in Islamabad"}
        price={"16,000,000"}
      />
    </div>
  );
};

export default Trending;
