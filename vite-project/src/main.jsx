import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Sign from "./components/SignUp/Sign";
import House from "./components/Houses/House";
import Trending from "./components/Trending/Trending";
import Room from "./components/Rooms/Room";
import FarmHouse from "./components/FarmHouse/FarmHouse";
import PoolHouse from "./components/PoolHouse/PoolHouse";
import VillageHouse from "./components/VillageHouse/VillageHouse";
import Villa from "./components/Villas/Villa";
import Old from "./components/OldHouse/Old";
import Mountain from "./components/MountainHouse/Mountain";
import Listing from "./components/Listing/Listing";
import HelpCenter from "./components/HelpCenter/Help";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Sign />} />
      <Route path="house" element={<House />} />
      <Route path="trending" element={<Trending />} />
      <Route path="room" element={<Room />} />
      <Route path="farmhouse" element={<FarmHouse />} />
      <Route path="pollhouse" element={<PoolHouse />} />
      <Route path="villageHouse" element={<VillageHouse />} />
      <Route path="villas" element={<Villa />} />
      <Route path="old" element={<Old />} />
      <Route path="mountains" element={<Mountain />} />
      <Route path="listing" element={<Listing />} />
      <Route path="helpCenter" element={<HelpCenter />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
