import React from "react";
import "./Room.css";
import room from "../../../images/room.jpg";
import room1 from "../../../images/room1.jpg";
import room2 from "../../../images/room2.jpg";
import air from "../../../images/air3.avif";
import air1 from "../../../images/air1.avif";
import air2 from "../../../images/air2.avif";
import ski from "../../../images/ski.avif";
import ski1 from "../../../images/ski1.avif";
import ski2 from "../../../images/ski2.avif";
import flatHouse from "../../../images/roomhouse.avif";
import flatHouse1 from "../../../images/roomnew.avif";
import flatHouse2 from "../../../images/roomnew1.avif";
import Cards from "../Cards/Cards";

const Room = () => {
  return (
    <div id="rooms">
      <Cards
        image1={room}
        image2={room1}
        image3={room2}
        title={"Luxury Rooms For one Person In Pindi"}
        price={"50,000"}
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
        image1={flatHouse}
        image2={flatHouse1}
        image3={flatHouse2}
        title={"1BHK Flat in Murre"}
        price={"16,00,00"}
      />
    </div>
  );
};

export default Room;
