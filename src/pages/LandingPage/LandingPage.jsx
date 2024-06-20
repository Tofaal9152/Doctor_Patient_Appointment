import React from "react";
// Adding Style.js and assets
import backgroundImage from "../../assets/bgImage.jpg";
import style from "../../style";
// Importing Components
import Navbar from "./Navbar/Navbar";
import Left_Sidebar from "./Left_Sidebar/Left_Sidebar";
import { Outlet } from "react-router-dom";

const LandingPage = () => {
  return (
    <div
      className="interfont w-full h-screen overflow-hidden object-cover bg-left z-0"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full sticky top-0 glass z-10">
        <div className={`${style.paddingX} ${style.flexCenter}`}>
          <div className={`${style.boxWidth} z-10`}>
            <Navbar />
          </div>
        </div>
      </div>
      {/* Hero */}
      <div className="flex">
        <Left_Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default LandingPage;
