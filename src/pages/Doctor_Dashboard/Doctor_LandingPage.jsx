import React from "react";
// Adding Style.js and assets
import backgroundImage from "../../assets/bgImage.jpg";
import style from "../../style";
// Importing Components
import Navbar from "./Navbar/Navbar";
import Left_Sidebar from "./Left_Sidebar/Left_Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const LandingPage = () => {
  const Open_doctor_sidebar = useSelector(
    (state) => state.counter.Open_doctor_sidebar
  );
  return (
    <div
      className="shadow-xl interfont w-full h-screen overflow-hidden object-cover bg-left  bg-[#f7f7f7]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="shadow-md w-full sticky top-0 glass pb-2">
        <div className={`${style.paddingX} ${style.flexCenter}`}>
          <div className={`${style.boxWidth} `}>
            <Navbar />
          </div>
        </div>
      </div>
      {/* Hero */}
      <div className="flex relative">
        <div className="md:block hidden">
          <Left_Sidebar />
        </div>

        <Outlet />
      </div>
      <div
        className={`${
          Open_doctor_sidebar ? "left-0" : "left-[-45rem]"
        } absolute md:hidden  top-[4rem] flex flex-col glass h-screen w-[full]  sidebar duration-500  `}
      >
        <Left_Sidebar />
      </div>
    </div>
  );
};

export default LandingPage;
