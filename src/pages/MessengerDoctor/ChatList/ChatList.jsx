import React from "react";
// Redux
import { useSelector } from "react-redux";
// Components
// import Head from "./Head/Head";
import ChatPeople from "./ChatPeople/ChatPeople";
// import Setting from "./Setting/Setting";
// import ResponsiveSidebar from "./ResponsiveSidebar/ResponsiveSidebar";

const ChatList = () => {
  // const clickedSettings = useSelector((state) => state.counter.clicked_Setting);

  return (
    <div className=" md:flex-none  md:relative flex md:flex-col md:h-screen md:overflow-y-hidden dark:bg-[#1e2021]">
      <div className="md:hidden block">
        {/* <ResponsiveSidebar /> */}
      </div>
      <div className="xl:w-[25vw] w-[20vw] max-w-[20rem] min-w-[12rem]">
        <div className="p-2 space-y-5 ">
          <ChatPeople />
        </div>
      </div>
    </div>
  );
};

export default ChatList;
