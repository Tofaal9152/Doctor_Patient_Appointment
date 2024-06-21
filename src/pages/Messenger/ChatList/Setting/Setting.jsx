import React, { useEffect, useState } from "react";
import Avatar from "../../../../assets/Avatar.jpeg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaToggleOff } from "react-icons/fa6";
import { BiSolidToggleLeft, BiSolidToggleRight } from "react-icons/bi";
import { CiExport } from "react-icons/ci";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  setDarkMode,
  setclicked_Setting,
} from "../../../../Redux/counterSlice";

const Setting = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => {
    state.counter.darkMode;
  });

  const [Dark_Mode_On_Off, setDark_Mode_On_Off] = useState(false);
  const [active_On_Off, setactive_On_Off] = useState(true);
  // Functionality
  const [profileImage, setProfileImage] = useState(Avatar);
  const [profileName, setProfileName] = useState("Gal Gadot");
  const [language, setLanguage] = useState("English");

  const handleChangeProfileImage = (newImage) => {
    setProfileImage(newImage);
  };

  return (
    <div className=" flex-col interfont flex items-center h-screen overflow-y-hidden p-4 dark:bg-[#241b30]">
      {/* back */}
      <div
        onClick={() => dispatch(setclicked_Setting())}
        className="p-2 top-3 z-10 left-3 rounded-full bg-[#9746ff] items-start justify-start flex absolute cursor-pointer"
      >
        <IoMdArrowRoundBack size={20} className="text-white" />
      </div>
      {/* Profile */}
      <div className="flex flex-col items-center justify-center text-center space-y-4 mb-4">
        <div className="flex items-end ">
          <img
            src={profileImage}
            alt="Avatar"
            className="w-[4rem] h-[4rem] rounded-full object-cover ring-2 ring-[#8e3df8] shadow-md"
          />
          <CiExport
            className="text-voilet-800  cursor-pointer"
            size={15}
            onClick={() => handleChangeProfileImage(newImage)}
          />
          {/* Add Image <input className="hidden" type="file"></input> */}
        </div>
        <div className="flex items-center  space-x-2">
          <h1 className="text-xl font-semibold text-[#191816] dark:text-white">
            {profileName}
          </h1>
          <CiExport className="text-voilet-800  cursor-pointer" size={10} />
          {/* Add Image <input  className="hidden" type="file"></input> */}
        </div>
        <p className="text-gray-600 text-sm dark:text-gray-400">
          In real life, I'm the type of girl who doesn't take herself too
          seriously....
        </p>
      </div>

      {/* Settings */}
      <div className="flex h-full flex-col items-center  relative  rounded-lg w-full space-y-4">
        <hr className="w-full h-[1px] border-none bg-[#9746ff]" />
        {/* Dark Mode */}
        <div className="flex items-center justify-between w-full duration-500 cursor-pointer">
          <h1 className="text-md font-semibold text-gray-800 dark:text-white">
            Dark Mode
          </h1>
          {Dark_Mode_On_Off ? (
            <BiSolidToggleRight
              onClick={() => {                
                setDark_Mode_On_Off((e) => !e);
                dispatch(setDarkMode());
              }}
              size={35}
              className="text-[#9746ff]"
            />
          ) : (
            <BiSolidToggleLeft
              onClick={() => {                
                setDark_Mode_On_Off((e) => !e);
                dispatch(setDarkMode());
              }}
              size={35}
              className="text-gray-500"
            />
          )}
        </div>
        {/* Active status */}
        <div className="flex items-center justify-between w-full duration-500 cursor-pointer">
          <h1 className="text-md font-semibold text-gray-800 dark:text-white">
            Active status
          </h1>
          {active_On_Off ? (
            <BiSolidToggleRight
              onClick={() => setactive_On_Off((e) => !e)}
              size={35}
              className="text-[#9746ff]"
            />
          ) : (
            <BiSolidToggleLeft
              onClick={() => setactive_On_Off((e) => !e)}
              size={35}
              className="text-gray-500"
            />
          )}
        </div>
        {/* Change language */}

        <div className="flex items-center justify-between w-full">
          <h1 className="text-md font-semibold text-gray-800 dark:text-white">
            Change language
          </h1>
          <div>
            <select className="w-full border border-gray-300 rounded px-2 py-1 text-xs outline-none bg-[#9746ff] text-white font-semibold">
              <option className="bg-[#9746ff] font-medium  " value="1">
                Bangla
              </option>
              <option className="bg-[#9746ff] font-medium  " value="2">
                English
              </option>
              <option className="bg-[#9746ff] font-medium  " value="3">
                Hindi
              </option>
            </select>
          </div>
        </div>

        {/* Switch Account */}
        <div className="flex items-center justify-between w-full">
          <h1 className="text-md font-semibold text-gray-800 dark:text-white">
            Switch Account
          </h1>
          <MdKeyboardArrowDown
            className="cursor-pointer dark:text-white"
            size={25}
          />
        </div>
        {/* Help */}
        <div className="flex items-center justify-between w-full ">
          <h1 className="text-md font-semibold text-gray-800 dark:text-white">
            Help
          </h1>
        </div>
        {/* Legal & Policies */}
        <div className="flex items-center justify-between w-full">
          <h1 className="text-md font-semibold text-gray-800 dark:text-white">
            Legal & Policies
          </h1>
        </div>
        {/* Log Out */}
        <div className="flex items-center justify-end w-full absolute bottom-0">
          <button className="px-2 font-semibold py-1 text-[#9746ff] border border-[#9746ff]  rounded hover:bg-[#8e3df8] hover:text-white duration-300 focus:outline-none">
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
