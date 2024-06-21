import React, { useState } from "react";
import { RiCheckDoubleFill } from "react-icons/ri";
import { chating_between } from "../../../../constants";
import TranslateMessage from "./TranslateMessage/TranslateMessage"; // Adjusted import path

const MeAndFriendConversation = () => {
  const [messageToTranslate, setMessageToTranslate] = useState(null);

  const toggleTranslateMessage = (message) => {
    if (messageToTranslate === message) {
      setMessageToTranslate(null); // Toggle off if already selected
    } else {
      setMessageToTranslate(message); // Toggle on if not selected
    }
  };

  return (
    <div className=" px-2 lg:px-[4rem] xl:px-[7rem] hide_scroll pt-[1rem] flex flex-col overflow-y-auto h-full space-y-5 bg-[#F5F5F7] dark:bg-[#1e2021]">
      {chating_between.map((item, index) => (
        <div key={index} className="">
          {/* ME */}
          <div className="My flex justify-end items-start mb-4">
            <div className="bg-[#E8F3FD] text-white p-3 rounded-lg max-w-[70%] space-y-1 dark:bg-[#6f34bc]">
              <p className="text-sm text-black leading-relaxed dark:text-white">
                {item.MyText}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-xs text-[#7C8092] dark:text-gray-300">{item.MyTime}</p>
                <RiCheckDoubleFill className="text-[#30323E]" />
              </div>
            </div>
          </div>
          {/* Friend */}
          <div className="Friend flex justify-start items-start mb-4 space-x-2">
            <img
              className="w-8 h-8 rounded-full object-cover"
              src={item.FriendImage}
              alt="Friend"
            />
            <div className="bg-white p-3 rounded-lg max-w-[70%] space-y-1 dark:bg-[#323232]">
              <p className="text-sm dark:text-white">{item.FriendText}</p>
              <div className="flex items-center justify-between">
                <p className="text-xs text-[#7C8092]">{item.FriendMyTime}</p>
                <RiCheckDoubleFill className="text-[#30323E]" />
              </div>
              <div className="flex flex-col space-y-1 justify-start items-start mt-1">
                <button
                  className="text-xs text-gray-500 cursor-pointer hover:text-gray-900 dark:hover:text-white"
                  onClick={() => toggleTranslateMessage(item.FriendText)}
                >
                  {messageToTranslate === item.FriendText
                    ? "Hide translation"
                    : "Translate message"}
                </button>
                {messageToTranslate === item.FriendText && (
                  <TranslateMessage message={item.FriendText} />
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MeAndFriendConversation;
