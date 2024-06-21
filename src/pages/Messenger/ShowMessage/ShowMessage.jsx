import React, { useState } from "react";
import Avatar from "../../../assets/doctor_Logo.png";
import Chat from "./Chat/Chat";
import TypeMessage from "./TypeMessage/TypeMessage";

const MessageContainer = () => {
  return (
    <div className="flexWidth2 overflow-auto flex-1 h-screen flex flex-col relative bg- border-x-[1px] border-[#D4D4DD] overflow-x-hidden dark:border-solid dark:border-[1px] dark:border-gray-700">
      {/*1. Nav */}
      <div className="dark:bg-[#1e2021] bg-transparent flex items-center custom500:px-[3rem] justify-between p-[0.7rem] px-[1.6rem] lg:px-[5rem] shadow-md b dark:border-solid dark:border-[1px] dark:border-gray-800">
        <div className="flex justify-start items-start space-x-3">
          <img
            className="w-[1.7rem] h-[1.7rem] ring-2 ring-[#53829C] rounded-full object-cover"
            src={Avatar}
            alt="User Avatar"
          />

          <div className="flex flex-col">
            <h1 className="text-sm font-semibold text-[#191816] dark:text-white">
              Mindy Moores
            </h1>
            <p className="text-[#7C8092] text-xs">Last seen 15 minutes ago</p>
          </div>
        </div>
      </div>
      {/*2. Chat+Typing */}
      <div className="flex flex-col relative h-screen">
        <Chat />
        <div className="absolute w-full bottom-0">
          <TypeMessage />
        </div>
      </div>
    </div>
  );
};

export default MessageContainer;
