import React from "react";
import MessageContainer from "./ShowMessage/ShowMessage";
import ChatList from "./ChatList/ChatList";
import { useSelector } from "react-redux";

const MessengerDoctor = () => {
  const darkMode = useSelector((state) => state.counter.darkMode);

  return (
    <div className="w-[-webkit-fill-available]">
      <div className={`flex interfont ${darkMode ? "dark" : ""}`}>
        <ChatList />
        <MessageContainer />
      </div>
    </div>
  );
};

export default MessengerDoctor;
