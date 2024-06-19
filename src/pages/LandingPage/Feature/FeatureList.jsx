import React from "react";
// From React Icons
import { FaVideo } from "react-icons/fa";
import { MdOutlineSignalWifi4BarLock } from "react-icons/md";
import { IoIosStopwatch } from "react-icons/io";



const FeatureList = () => {
  return (
    <div className=" space-y-10 ">
      <h1 className="text-3xl fontPoppin text-center">
        Features for a better experience
      </h1>
      <div className="flex flex-col space-y-3 card676:space-y-0 card676:flex-row items-center  card676:justify-between justify-center ">
        {/* F-1 */}
        <div className="flex lg:flex-row flex-col items-center space-y-3 lg:space-y-0 lg:items-start lg:text-start justify-center space-x-7  w-[416px] h-[153px] p-[1rem] lg:p-[2.5rem]">
          <div className="p-3 rounded-full bg-[#FFDFCD] flex items-center justify-center">
            <FaVideo size={24} className="text-[#FD6003] text-center" />
          </div>
          <div className="flex flex-col space-y-3 ">
            <h1 className="text-center lg:text-start text-md font-medium text-[#1B1C20]">
              Video messaging
            </h1>
            <p className="md:text-start text-center  text-sm text-[#5F616B]">
              This software is very easy for you to manage. You can use it as
              you wish.
            </p>
          </div>
        </div>
        {/* F-2 */}
        <div className="flex lg:flex-row flex-col items-center space-y-3 lg:space-y-0 lg:items-start lg:text-start  justify-center space-x-7  w-[416px] h-[153px] p-[1rem] lg:p-[2.5rem]">
          <div className="p-3 rounded-full bg-[#DBEDDC] flex items-center justify-center">
            <IoIosStopwatch size={24} className="text-[#4DA44E] text-center" />
          </div>
          <div className="flex flex-col space-y-3 ">
            <h1 className="text-center lg:text-start text-md font-medium text-[#1B1C20]">
              Video messaging
            </h1>
            <p className="md:text-start text-center  text-sm text-[#5F616B]">
              This software is very easy for you to manage. You can use it as
              you wish.
            </p>
          </div>
        </div>
        {/* F-3 */}
        <div className="flex lg:flex-row flex-col items-center space-y-3 lg:space-y-0 lg:items-start  lg:text-start justify-center space-x-7  w-[416px] h-[153px] p-[1rem] lg:p-[2.5rem]">
          <div className="p-3 rounded-full bg-[#FFDFCD] flex items-center justify-center">
            <MdOutlineSignalWifi4BarLock
              size={24}
              className="text-[#FD6003] text-center"
            />
          </div>
          <div className="flex flex-col space-y-3 ">
            <h1 className="text-center lg:text-start text-md font-medium text-[#1B1C20]">
              Video messaging
            </h1>
            <p className="md:text-start text-center  text-sm text-[#5F616B]">
              This software is very easy for you to manage. You can use it as
              you wish.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureList;
