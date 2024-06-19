// hide_scroll == hidden scrollbar
import React from "react";
import { RiArrowRightDoubleLine } from "react-icons/ri";
// import Avater from "../../../assets/Avater.jpeg";

import { messageContainer } from "../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { setopen_notification } from "../../../Redux/counterSlice";
const Notification = () => {
  // Redux
  const dispatch = useDispatch();
  const open_notification = useSelector(
    (state) => state.counter.open_notification
  );
  return (
    <div className="p-6  hide_scroll h-screen max-w-md mx-auto overflow-y-hidden z-10 dark:bg-[#241b30]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 space-x-3">
        <h1 className="text-xl font-bold text-[#191816] hover:underline cursor-pointer dark:text-white">
          Notifications
        </h1>
        <div
          onClick={() => dispatch(setopen_notification())}
          className="duration-500 p-1 cursor-pointer items-center justify-center bg-[#9746ff] rounded-full shadow-md"
        >
          <RiArrowRightDoubleLine
            className="cursor-pointer text-white  duration-300"
            size={25}
          />
        </div>
      </div>
      {/* Message */}
      <div className="overflow-y-scroll h-full hide_scroll">
        {messageContainer.map((item, index) => {
          return (
            <div key={index} className="flex items-start space-x-3 mb-4">
              <img
                className="w-[37px] h-[37px] rounded-full object-cover"
                src={item.img}
                alt="User Avatar"
              />
              <div className="flex flex-col space-y-1">
                <h2 className="text-sm font-semibold text-[#191816] dark:text-white">
                  {item.avatar_name}
                </h2>
                <p className="text-sm text-[#191816] dark:text-[#bec3d6]">
                  {item.avatar_text.length > 10
                    ? item.avatar_text.substring(0, 15) + "..."
                    : item.avatar_text}
                </p>
                <p className="text-xs text-[#7C8092]">1 minute ago</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notification;
