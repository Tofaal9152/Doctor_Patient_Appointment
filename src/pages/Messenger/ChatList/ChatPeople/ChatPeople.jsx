import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
// import { Messenger_Recent } from "../../../../constants";
import { messageContainer } from "../../../../constants";

const ChatPeople = () => {
  return (
    <div className="space-y-3 ">
      {/* heading */}
      <div className="ChatsAndPlusIcon flex justify-between items-center ">
        <h1 className="text-2xl font-bold dark:text-white">Chats</h1>
      </div>
      {/* Search */}
      <div className="search">
        <div className="p-2 flex items-center justify-start space-x-2 rounded-full bg-white  border-gray-300 border dark:bg-[#1e2021]">
          <CiSearch className="cursor-pointer dark:text-white" size={16} />
          <input
            placeholder="Search for people..."
            className="outline-none bg-transparent text-sm text-[#191816] dark:text-white"
            type="text"
          />
        </div>
      </div>
      {/* Chats */}
      <div className="relative custom-scrollbar flex flex-col overflow-y-auto h-[78vh] 2xl:h-[82vh] space-y-2 p-1 pb-[16rem]">
        {messageContainer.map((item, index) => (
          <div
            key={index}
            className="dark:bg-[#1e2021] dark:border-gray-700 flex relative justify-between items-center border border-gray-300  cursor-pointer bg-white rounded-xl p-3 shadow-lg"
          >
            <div className="flex justify-start items-start space-x-3">
              <img
                className="w-[2.7rem] h-[2.7rem] rounded-full object-cover"
                src={item.img}
                alt="Avatar"
              />
              <div className="flex flex-col space-y-1">
                <h1
                  className={`${
                    item.avatar_name.length > 15
                      ? "flex flex-col items-start justify-start"
                      : ""
                  } text-sm font-semibold text-[#191816] truncate dark:text-white`}
                >
                  {item.avatar_name.length > 15 ? (
                    <span style={{ whiteSpace: "pre-wrap" }}>
                      {item.avatar_name}
                    </span>
                  ) : (
                    item.avatar_name
                  )}
                </h1>
                <p className="text-[#7C8092] text-xs truncate overflow-hidden">
                  {item.avatar_text.length > 10
                    ? item.avatar_text.substring(0, 24) + "..."
                    : item.avatar_text}
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-1 items-end">
              <div className="time text-[#7C8092] text-xs">{item.time}</div>
              <div className="flex items-center justify-center bg-[#9746ff] w-[1rem] h-[1rem] rounded-full mx-auto">
                <p className="text-white text-xs">1</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatPeople;
