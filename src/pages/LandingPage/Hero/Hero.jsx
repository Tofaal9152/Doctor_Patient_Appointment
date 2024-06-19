import React from "react";
// React Icons
import { FaArrowRight } from "react-icons/fa6";
// From React-Dom
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row items-center text-center justify-around ">
      <div className="w-[80vw] md:w-[509px]  space-y-5 glass rounded-2xl p-[1rem]">
        <h1 className="monospace text-3xl text-[#ffffff] font-bold">
          Start chatting with anyone, anytime, anywhere with Polyglot
        </h1>
        <p className="fontPoppin text-sm text-[#e6e6e6]">
          Great software that allows you to chat from any place at any time
          without any interruption
        </p>
        <div
          onClick={() => navigate("/messenger")}
          // className="bg-gradient-to-r from-pink-500 via-purple-500 hover:via-purple-500 to-[#3404ab] hover:bg-pink-500 hover:from-[#3404ab] hover:bg-gradient-to-r button cursor-pointer flex text-center items-center justify-center space-x-2 duration-1000 text-white font-semibold py-2 px-4  rounded-lg"
          className="custom-gradient button cursor-pointer flex text-center items-center justify-center space-x-2 text-white font-semibold py-2 px-4  rounded-lg"
        >
          <span>Start Chating Now</span>
          <FaArrowRight size={19} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
