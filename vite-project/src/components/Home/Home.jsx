import React from "react";
import "./Home.css";
import Cards from "../Cards/Cards";
import house from "../../../images/house.jpg";
import house1 from "../../../images/housekichen.jpg";
import house2 from "../../../images/houseliving.jpg";
import farmhouse from "../../../images/farmhouse2.jpg";
import farmhouse1 from "../../../images/farmhouse1.jpg";
import farmhouse2 from "../../../images/farmhouse.jpg";
import huthHouse from "../../../images/huthouse.jpg";
import huthHouse1 from "../../../images/huthouse1.jpg";
import huthHouse2 from "../../../images/huthouse2.jpg";
import flatHouse from "../../../images/roomhouse.avif";
import flatHouse1 from "../../../images/roomnew.avif";
import flatHouse2 from "../../../images/roomnew1.avif";
import villa from "../../../images/villa.jpg";
import villa1 from "../../../images/villa1.jpg";
import villa2 from "../../../images/villa3.jpg";
import village from "../../../images/village.avif";
import village1 from "../../../images/village1.avif";
import village2 from "../../../images/village2.avif";
import mountains from "../../../images/mountain.avif";
import mountains1 from "../../../images/mountain1.avif";
import mountain2 from "../../../images/mountain2.avif";
import room from "../../../images/room.jpg";
import room1 from "../../../images/room1.jpg";
import room2 from "../../../images/room2.jpg";
import old from "../../../images/old.avif";
import old1 from "../../../images/old1.avif";
import old2 from "../../../images/old2.avif";
import ski from "../../../images/ski.avif";
import ski1 from "../../../images/ski1.avif";
import ski2 from "../../../images/ski2.avif";
import air from "../../../images/air3.avif";
import air1 from "../../../images/air1.avif";
import air2 from "../../../images/air2.avif";
import poolHouse from "../../../images/poolhouse.jpg";
import poolHouse2 from "../../../images/poolhouse2.jpg";

const Home = () => {
  return (
    <div id="home">
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
        image1={flatHouse}
        image2={flatHouse1}
        image3={flatHouse2}
        title={"1BHK Flat in Murre"}
        price={"16,00,00"}
      />
      <Cards
        image1={villa}
        image2={villa1}
        image3={villa2}
        title={"2BHK Villa in Lahore"}
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
        image1={mountains}
        image2={mountains1}
        image3={mountain2}
        title={"1BHK Mountain House"}
        price={"3,00,00,000."}
      />
      <Cards
        image1={room}
        image2={room1}
        image3={room2}
        title={"Luxury Rooms For one Person In Pindi"}
        price={"50,000"}
      />
      <Cards
        image1={old}
        image2={old1}
        image3={old2}
        title={"2BHK Old House in Karachi"}
        price={"1,00,00,000."}
      />
      <Cards
        image1={ski}
        image2={ski1}
        image3={ski2}
        title={"4BHK Building In Lahore."}
        price={"22,00,00,000."}
      />
      <Cards
        image1={air}
        image2={air1}
        image3={air2}
        title={"3BHK Houses in Murre"}
        price={"12,00,00,000."}
      />
      <Cards
        image1={poolHouse}
        image2={poolHouse2}
        image3={poolHouse}
        title={"2BHK Pool House in Islamabad"}
        price={"2,00,00,000."}
      />
    </div>
  );
};

export default Home;
