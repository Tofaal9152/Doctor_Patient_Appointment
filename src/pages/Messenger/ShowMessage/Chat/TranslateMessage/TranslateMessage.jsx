import React from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import { Translate_to } from "../../../../../constants";
const Change_Language = () => {
  return (
    <div className="dark:bg-[#434343] flex flex-col items-start p-2 space-y-2 bg-white rounded-lg shadow-lg border border-gray-200 w-[10rem] max-h-[10rem] overflow-y-auto custom-scrollbar dark:border-solid dark:border-[1px] dark:border-gray-800">
      <h1 className="text-md font-semibold text-gray-800 dark:text-white">
        Translate to..
      </h1>
      {Translate_to.map((item, index) => (
        <div
          key={index}
          className=" hover:bg-violet-300 dark:hover:bg-violet-700 cursor-pointer p-1 flex items-center justify-start space-x-1 rounded-md transition-colors duration-200 ease-in-out w-full"
        >
          <span className="p-1 rounded-full bg-[#9746ff]">
            <FaGlobeAmericas className="text-white " size={15} />
          </span>
          <h1 className="text-xs font-bold text-gray-700 dark:text-gray-200">{item.language}</h1>
        </div>
      ))}
    </div>
  );
};

export default Change_Language;
