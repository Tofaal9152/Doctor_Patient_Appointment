import { IoLinkOutline } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import Emoji from "emoji-picker-react";
import React, { useState } from "react";

const TypeMessage = () => {
  const [openEmoji, setOpenEmoji] = useState(false);
  const [text, setText] = useState("");

  const handleClick = (emojiObject) => {
    setText((prev) => prev + emojiObject.emoji);
    setOpenEmoji(false);
  };

  return (
    <div className="px-4 flex bottom-0 bg-white w-full p-2 overflow-x-hidden dark:bg-[#1e2021] dark:border-solid dark:border-[1px] dark:border-gray-700">
      <div className="flex justify-center items-center space-x-2 w-full">
        {/* Link Icon */}
        <span className="cursor-pointer p-2 rounded-full hover:bg-gray-100 dark:text-white dark:hover:bg-black">
          <IoLinkOutline size={20} />
        </span>
        {/* Input Area */}
        <div className="flex flex-1 items-center bg-white p-1 rounded-full border border-gray-300 dark:bg-[#1e2021]">
          <span className="cursor-pointer p-2 rounded-full hover:bg-gray-100 dark:text-white dark:hover:bg-black">
            <FaMicrophone size={20} />
          </span>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-1 p-2 text-black text-sm outline-none bg-transparent dark:text-white"
            placeholder="Type a message..."
          />
          <div
            onClick={() => setOpenEmoji((prev) => !prev)}
            className="cursor-pointer p-2 rounded-full hover:bg-gray-100 dark:text-white dark:hover:bg-black"
          >
            <BsEmojiSmile size={20} />
          </div>
          {openEmoji && (
            <div className="absolute bottom-[5rem] right-0 p-1">
              <Emoji onEmojiClick={handleClick} />
            </div>
          )}
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
