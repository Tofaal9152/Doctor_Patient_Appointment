import { IoIosSend } from "react-icons/io";
import React, { useState } from "react";

const TypeMessage = () => {
  const [openEmoji, setOpenEmoji] = useState(false);
  

  return (
    <div className="px-4 flex absolute bottom-[4.2rem] bg-white w-full p-2 overflow-x-hidden dark:bg-[#1e2021] dark:border-solid dark:border-[1px] dark:border-gray-700">
      <div className="flex justify-center items-center space-x-2 w-full">
        {/* Input Area */}
        <div className="flex flex-1 items-center bg-white p-1 rounded-full border border-gray-300 dark:bg-[#1e2021]">
          <input
            type="text"
            // value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-1 p-2 text-black text-sm outline-none bg-transparent dark:text-white"
            placeholder="Type a message..."
          />
        </div>
        {/* Send Button */}
        <div className="cursor-pointer p-2 rounded-full bg-[#9746ff] hover:bg-[#8e3df8]">
          <IoIosSend className="text-white" size={22} />
        </div>
      </div>
    </div>
  );
};

export default TypeMessage;
