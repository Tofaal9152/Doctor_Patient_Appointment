import React from "react";
import { useNavigate } from "react-router-dom";

const Left_Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className={`h-screen bg-gray-gradient2 p-4 border-r`}>
      <div className="flex flex-col ">
        <div
          onClick={() => {
            navigate("/doctor");
          }}
          className="bg-transparent cursor-pointer border hover:scale-105 duration-300 bg-opacity-20 backdrop-blur-md rounded-md px-3 py-2 mb-1 shadow-md"
        >
          <span className="text-center text-md font-semibold text-[#2a5c83]">
            Appointments
          </span>
        </div>
        <div
          onClick={() => {
            navigate("/doctor/confirmappointment");
          }}
          className="bg-white  cursor-pointer border hover:scale-105 duration-300 bg-opacity-20 backdrop-blur-md rounded-md px-3 py-2 mb-1 shadow-md"
        >
          <span className="text-md font-semibold text-[#2a5c83]">
            My Appointment
          </span>
        </div>
        <div
          onClick={() => {
            navigate("/doctor/messages");
          }}
          className="bg-white cursor-pointer border hover:scale-105 duration-300 bg-opacity-20 backdrop-blur-md rounded-md px-3 py-2 mb-1 shadow-md"
        >
          <span className="text-md font-semibold text-[#2a5c83]">Messages</span>
        </div>
        <div
          onClick={() => {
            navigate("/doctor/medicalrecords");
          }}
          className="bg-white cursor-pointer border hover:scale-105 duration-300 bg-opacity-20 backdrop-blur-md rounded-md px-3 py-2 mb-1 shadow-md"
        >
          <span className="text-md font-semibold text-[#2a5c83]">
            Medical Report
          </span>
        </div>
      </div>
    </div>
  );
};

export default Left_Sidebar;
