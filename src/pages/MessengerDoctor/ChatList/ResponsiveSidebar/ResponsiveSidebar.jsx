import React from "react";
import { useDispatch } from "react-redux";
import { setSmallDeviceChatPeople } from "../../../../Redux/counterSlice";
import { TbMessageCircle2Filled } from "react-icons/tb";

const ResponsiveSidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="">
      <div className="flex-col interfont flex items-center justify-start text-center h-screen overflow-y-hidden p-2 space-y-5">
        <div
          onClick={() => dispatch(setSmallDeviceChatPeople())}
          className="custom500p-2 p-1 rounded-full bg-[#9746ff] hover:bg-[#8e3df8] cursor-pointer"
        >
          <TbMessageCircle2Filled size={20} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default ResponsiveSidebar;
