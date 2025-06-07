import React from "react";
import Navbar from "./components/Nav/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "100vh", overflowY: "auto" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;
