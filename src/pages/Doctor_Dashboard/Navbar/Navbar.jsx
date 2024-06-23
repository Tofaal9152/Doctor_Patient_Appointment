import React, { useState } from "react";
// from asset
import logo from "../../../assets/doctor_Logo.png";
// From React-Router-Dom
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { setOpen_doctor_sidebar } from "../../../Redux/counterSlice";
import { IoLogInOutline } from "react-icons/io5";

const Navbar = () => {
  // state
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <nav className={`w-full flex justify-between items-center`}>
      <div className="flex items-center justify-start space-x-2">
        <div
          onClick={() => {
            dispatch(setOpen_doctor_sidebar());
          }}
          className="p-2 glass border hover:scale-105 duration-300 border-[#497791] rounded-full cursor-pointer md:hidden block "
        >
          <GiHamburgerMenu size={17} className="text-[#497791]" />
        </div>
        <img
          onClick={() => {
            navigate("/doctor/profile");
          }}
          className="object-cover w-[3rem] h-[3rem] rounded-full ring-2 mt-3 ring-[#53829C] cursor-pointer"
          src={logo}
          alt="Profile"
        />
      </div>
      {/*  */}

      <div
        className="bg-[#76c3ed] space-x-1 flex items-center justify-center hover:bg-[#7dcefa] rounded-md px-3 py-2 cursor-pointer text-md font-semibold text-white"
        onClick={() => {
          navigate("/");
        }}
      >
        <span>Log out</span>
        <div>
          <IoLogInOutline size={25} className="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
