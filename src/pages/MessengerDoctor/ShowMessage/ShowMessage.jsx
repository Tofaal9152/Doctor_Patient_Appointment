import React, { useState } from "react";
import Chat from "./Chat/Chat";
import { useDispatch, useSelector } from "react-redux";
import TypeMessage from "./TypeMessage/TypeMessage";

const MessageContainer = () => {
  const chatPeopleId = useSelector((state) => state.counter.chatPeopleId);

  return (
    <div className="flexWidth2 flex-1 h-screen flex flex-col relative bg- border-x-[1px] border-[#D4D4DD] overflow-x-hidden dark:border-solid dark:border-[1px] dark:border-gray-700">
      {chatPeopleId !== null ? (
        <div className="flex flex-col relative  h-screen overflow-y-hidden">
          <Chat />
          {/* <TypeMessage /> */}
        </div>
      ) : (
        <div className="flex flex-col relative  h-screen overflow-y-hidden w-full">
          {/* <div className="flex h-screen w-full"> */}
          <div className="m-auto text-center font-bold text-[1.2rem]">
            <h3 className="text-gray-600">Select a chat to load messages</h3>
            {/* </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageContainer;
