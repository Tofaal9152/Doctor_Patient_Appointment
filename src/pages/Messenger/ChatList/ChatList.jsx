import React from "react";
// Redux
import { useSelector } from "react-redux";
// Components
import Head from "./Head/Head";
import ChatPeople from "./ChatPeople/ChatPeople";
import Setting from "./Setting/Setting";
import ResponsiveSidebar from "./ResponsiveSidebar/ResponsiveSidebar";

const ChatList = () => {
  const clickedSettings = useSelector((state) => state.counter.clicked_Setting);

  return (
    <div className=" md:flex-none  md:relative flex md:flex-col md:h-screen md:overflow-y-hidden dark:bg-[#1e2021]">
      <div className="md:hidden block">
        <ResponsiveSidebar />
      </div>
      <div className="md:block hidden w-[19rem] xl:w-[25vw]">
        <div className="p-2 space-y-5 ">
          <div>
            <Head />
          </div>
          <div>
            <ChatPeople />
          </div>
        </div>
        <div
          className={`${
            clickedSettings ? "left-0" : "left-[-45rem]"
          } md:block hidden h-screen w-[full] top-0 overflow-y-hidden  sidebar duration-500 absolute bg-white`}
        >
          <Setting />
        </div>
      </div>
    </div>
  );
};

export default ChatList;
