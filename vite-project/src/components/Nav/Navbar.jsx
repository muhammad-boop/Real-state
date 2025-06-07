import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../images/p.jpg";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWhatshot } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { FaHouseCrack } from "react-icons/fa6";
import { FaLaptopHouse } from "react-icons/fa";
import { PiBarnFill } from "react-icons/pi";
import { GiDogHouse } from "react-icons/gi";

import { MdBedroomChild, MdOutlinePool, MdForest } from "react-icons/md";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div id="nav">
      {visible && (
        <div className="hambuger">
          <Link to="/login" className="ham1">
            Login
          </Link>
          <Link to="/signup" className="ham1">
            SignUp
          </Link>
          <Link to="/listing">
            <div className="ham1">List Your Home</div>
          </Link>
          <Link to="/helpCenter">
            <div className="ham1">Help Center</div>
          </Link>
        </div>
      )}

      <div className="nav1">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" width="50px" />
          <h1>Private Property Rental</h1>
        </Link>

        <div className="search">
          <input type="text" placeholder="Search Destination" />
          <button>
            <span>Search</span> <IoSearch />
          </button>
        </div>
        <div className="ham">
          <Link to="/listing">
            <button id="list-btn">List Your Home</button>
          </Link>
          <button id="list-btn-2" onClick={() => setVisible(!visible)}>
            <GiHamburgerMenu id="ham-menu" />
            <CgProfile id="profile" />
          </button>
        </div>
      </div>

      <div className="nav2">
        <div className="svg11">
          <Link to="/trending">
            <MdOutlineWhatshot />
            <h3>Trending</h3>
          </Link>
        </div>

        <div className="svg11">
          <Link to="/house">
            <FaHouse />
            <h3>Houses</h3>
          </Link>
        </div>
        <div className="svg11">
          <Link to="/room">
            <MdBedroomChild />
            <h3>Rooms</h3>
          </Link>
        </div>
        <div className="svg11">
          <Link to="/farmhouse">
            <PiBarnFill />
            <h3>Farm House</h3>
          </Link>
        </div>
        <div className="svg11">
          <Link to="/pollhouse">
            <MdOutlinePool />
            <h3>Pool Houses</h3>
          </Link>
        </div>
        <div className="svg11">
          <Link to="/villas">
            <FaLaptopHouse />
            <h3>Villas</h3>
          </Link>
        </div>
        <div className="svg11">
          <Link to="/villageHouse">
            <FaHouseCrack />
            <h3>Village Houses</h3>
          </Link>
        </div>
        <div className="svg11">
          <Link to="/old">
            <GiDogHouse />
            <h3>Old Houses</h3>
          </Link>
        </div>
        <div className="svg11">
          <Link to="/mountains">
            <MdForest />
            <h3>Mountain Houses</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
