import React from "react";
import { useNavigate } from "react-router-dom";

const Left_Sidebar = () => {
  const navigate =useNavigate()
  return (
    <div className={`h-screen bg-white p-4  border-[2px]`}>
      <div className="flex flex-col">
        <div className="bg-white cursor-pointer border hover:scale-105 duration-300 bg-opacity-20 backdrop-blur-md rounded-md px-3 py-2 mb-1 shadow-md">
          <span
            onClick={() => {
              navigate("/");
            }}
            className="text-center text-md font-semibold text-[#2a5c83]"
          >
            Available Doctor
          </span>
        </div>
        <div className="bg-white  cursor-pointer border hover:scale-105 duration-300 bg-opacity-20 backdrop-blur-md rounded-md px-3 py-2 mb-1 shadow-md">
          <span className="text-md font-semibold text-[#2a5c83]">
            My Appointment
          </span>
        </div>
        <div className="bg-white cursor-pointer border hover:scale-105 duration-300 bg-opacity-20 backdrop-blur-md rounded-md px-3 py-2 mb-1 shadow-md">
          <span
            onClick={() => {
              navigate("/messages");
            }}
            className="text-md font-semibold text-[#2a5c83]"
          >
            Messages
          </span>
        </div>
        <div className="bg-white cursor-pointer border hover:scale-105 duration-300 bg-opacity-20 backdrop-blur-md rounded-md px-3 py-2 mb-1 shadow-md">
          <span className="text-md font-semibold text-[#2a5c83]">
            Medical Report
          </span>
        </div>
      </div>
    </div>
  );
};

export default Left_Sidebar;
