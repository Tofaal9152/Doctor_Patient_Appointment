import React from "react";
// From Assets
import featureMessenger from "../../../assets/featureMessenger.png";

const Feature2 = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-around md:space-x-8 space-y-8 md:space-y-0 mt-[2rem] md:mt-0">
      <div className="flex md:justify-start md:items-start justify-center items-center flex-col space-y-5 md:space-y-10 mt-[2rem] md:mt-0">
        <h1 className="text-[#1B1C20] text-center md:text-start text-2xl sm:text-4xl w-[25rem] md:leading-normal">
          Text in any language you like with instant translations
        </h1>
        <button className="bg-[#9747ff] hover:bg-violet-600 duration-300 text-white font-semibold py-2 px-4 border rounded-lg">
          Start Chatting Now
        </button>
      </div>
      <div>
        <img
          className="w-[470px]"
          src={featureMessenger}
          alt="Messenger Illustration"
        />
      </div>
    </div>
  );
};

export default Feature2;
