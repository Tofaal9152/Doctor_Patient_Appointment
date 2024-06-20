import React, { useState } from "react";
// from asset
import logo from "../../../assets/doctor_Logo.png";
// From React-Router-Dom
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  // state
  const navigate = useNavigate();
  return (
    <nav className={`w-full flex justify-between items-center`}>
      <img className="w-[4rem] cursor-pointer" src={logo} alt="" />
      {/* pc */}
      <div className="flex items-center space-x-2">
        <div
          onClick={() => navigate("/doctorregistration")}
          className="bg-[#53829C]  hover:bg-[#497791] rounded-md px-2 py-1 cursor-pointer hover:scale-105 duration-300 text-md font-semibold text-white"
        >
          Doctor Login
        </div>
        <div
          onClick={() => navigate("/patientregistration")}
          className="bg-[#53829C]  hover:bg-[#497791] rounded-md px-2 py-1 cursor-pointer hover:scale-105 duration-300 text-md font-semibold text-white"
        >
          Patient Login
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
