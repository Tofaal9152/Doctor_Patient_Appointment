import React from "react";
import backgroundImage from "../../assets/bgImage.jpg";
import { IoLogInOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const Landing_Page = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="flex items-center justify-center interfont w-full h-screen  object-cover
       bg-left"
    >
      <div className="grid grid-cols-2 items-center justify-center grid-row-3 gap-4">
        <div
          onClick={() => navigate("/patient")}
          className="bg-[#76c3ed] space-x-1 flex items-center justify-center hover:bg-[#7dcefa] rounded-md px-3 py-2 cursor-pointer text-md font-semibold text-white"
        >
          <span>Patient Dashboard</span>
          <div>
            <IoLogInOutline size={25} className="" />
          </div>
        </div>
        <div
          onClick={() => navigate("/doctor")}
          className="bg-[#76c3ed] space-x-1 flex items-center justify-center hover:bg-[#7dcefa] rounded-md px-3 py-2 cursor-pointer text-md font-semibold text-white"
        >
          <span>Doctor Dashboard</span>
          <div>
            <IoLogInOutline size={25} className="" />
          </div>
        </div>
        <div
          onClick={() => navigate("/patientregistration")}
          className="bg-[#76c3ed] space-x-1 flex items-center justify-center hover:bg-[#7dcefa] rounded-md px-3 py-2 cursor-pointer text-md font-semibold text-white"
        >
          <span>Patient Register</span>
          <div>
            <IoLogInOutline size={25} className="" />
          </div>
        </div>
        <div
          onClick={() => navigate("/doctorregistration")}
          className="bg-[#76c3ed] space-x-1 flex items-center justify-center hover:bg-[#7dcefa] rounded-md px-3 py-2 cursor-pointer text-md font-semibold text-white"
        >
          <span>Doctor Register</span>
          <div>
            <IoLogInOutline size={25} className="" />
          </div>
        </div>
        <div
          onClick={() => navigate("/Login")}
          className="bg-[#76c3ed] w-full space-x-1 flex items-center justify-center hover:bg-[#7dcefa] rounded-md px-3 py-2 cursor-pointer text-md font-semibold text-white"
        >
          <span>Log In</span>
          <div>
            <IoLogInOutline size={25} className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing_Page;
