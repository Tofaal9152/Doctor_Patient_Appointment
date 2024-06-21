import React from "react";
import Avatar from "../../../../assets/Avatar.jpeg";
import { useDispatch } from "react-redux";
import {
  setSmallDeviceChatPeople,
  setclicked_Setting,
  setopen_notification,
} from "../../../../Redux/counterSlice";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";

const ResponsiveSidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="">
      <div className="flex-col interfont flex items-center justify-start text-center h-screen overflow-y-hidden p-2 space-y-5">
        <img
          className="custom500:w-[1.7rem] w-[1.3rem] custom500:h-[1.7rem] h-[1.3rem] rounded-full object-cover ring-2 ring-[#8e3df8] shadow-md"
          src={Avatar}
          alt=""
        />
        <div
          onClick={() => dispatch(setSmallDeviceChatPeople())}
          className="custom500p-2 p-1 rounded-full bg-[#9746ff] hover:bg-[#8e3df8] cursor-pointer"
        >
          <TbMessageCircle2Filled size={20} className="text-white" />
        </div>
        <div
          onClick={() => dispatch(setclicked_Setting())}
          className="custom500p-2 p-1 rounded-full cursor-pointer bg-[#9746ff] hover:bg-[#8e3df8]"
        >
          <IoMdSettings size={20} className="text-white" />
        </div>
        <div
          onClick={() => dispatch(setopen_notification())}
          className="custom500p-2 p-1 cursor-pointer items-center justify-center bg-[#9746ff] hover:bg-[#8e3df8] rounded-full shadow-md"
        >
          <IoIosNotifications className="cursor-pointer text-white" size={20} />
        </div>
      </div>
    </div>
  );
};

export default ResponsiveSidebar;
