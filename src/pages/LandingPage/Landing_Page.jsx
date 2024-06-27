import React from "react";
import backgroundImage from "../../assets/bgImage.jpg";
import { IoLogInOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import styles from "../../style";
import Logo from "../../assets/stethoscope.png";
import Doctor from "../../assets/doctor.png";
import Patient from "../../assets/patient.png";
import { FaSearch } from "react-icons/fa";

const Landing_Page = () => {
  const navigate = useNavigate();

  return (
    <div className="interfont bg-[#F9FAFB]">
      {/* Navbar */}
      <div className="w-full  shadow-md top-0 sticky z-50 bg-[#F9FAFB]">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} z-10`}>
            {/* Navbar */}
            <div className="interfont flex items-center justify-between p-3 ">
              <div
                id="headlineLogo"
                className="rounded-full flex items-center justify-between space-x-2"
              >
                <img
                  onClick={() => {
                    navigate("/");
                  }}
                  className="w-[2.7rem] h-[2.7rem] cursor-pointer"
                  src={Logo}
                  alt="Logo"
                />
                <h1
                  onClick={() => {
                    navigate("/");
                  }}
                  className="flex items-center justify-center space-x-1 text-xl font-bold cursor-pointer"
                >
                  <span className="text-[#76c3ed]">Doctor</span>
                  <span>Appoinment</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Body */}
      <div className="relative top-0">
        <div className="space-y-20  bg-gray-50 ">
          <>
            <div
              id="heroGSAP"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(${backgroundImage})`,
              }}
              className="flex flex-col items-center justify-center h-screen px-6 py-12 space-y-4"
            >
              <div className="relative top-[-4rem]">
                {/* Title */}
                <h1
                  id="item"
                  className="md:text-4xl text-3xl font-bold text-[#ffffff] mb-10 text-center"
                >
                  Easy and smart solution <br />
                  for doctor appointment
                </h1>
                <div
                  id="item"
                  className="flex flex-wrap justify-center md:gap-8 gap-3 "
                >
                  <div className="flex flex-col items-center justify-center mr-[3rem]">
                    <div className="w-20 h-20 p-2 flex items-center justify-center rounded-full mb-4 bg-[#3c3c3c75]">
                      <span className="text-black w-10 h-10 flex items-center justify-center rounded-full">
                        <img src={Doctor} alt="doctor" />
                      </span>
                    </div>
                    <div className="text-center">
                      {/* <span className="font-semibold text-xl text-white block">
                      Doctor
                    </span> */}
                      <div
                        onClick={() => navigate("/doctor")}
                        className="bg-[#76c3ed] space-x-1 flex items-center justify-center hover:bg-[#7dcefa] rounded-md px-3 py-2 cursor-pointer text-md font-semibold text-white"
                      >
                        <span>Doctor Dashboard</span>
                        <div>
                          <IoLogInOutline size={25} className="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <div className="w-20 h-20 p-2 flex items-center justify-center rounded-full bg-[#3c3c3c75] mb-4">
                      <span className="text-black w-10 h-10 flex items-center justify-center rounded-full">
                        <img src={Patient} alt="doctor" className="w-[5rem]" />
                      </span>
                    </div>
                    <div className="text-center">
                      <div
                        onClick={() => navigate("/patient")}
                        className="bg-[#76c3ed] space-x-1 flex items-center justify-center hover:bg-[#7dcefa] rounded-md px-3 py-2 cursor-pointer text-md font-semibold text-white"
                      >
                        <span>Patient Dashboard</span>
                        <div>
                          <IoLogInOutline size={25} className="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Landing_Page;
