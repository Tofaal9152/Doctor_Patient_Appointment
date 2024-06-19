import React from "react";
// From Assets
import featureGirl from "../../../assets/featureGirl.jpeg";

const Feature1 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:space-x-11 space-y-11 md:space-y-0">
      <div className="border-blue-500 border-[0.1rem]">
        <img
          className="w-[400px] flex-1"
          src={featureGirl}
          alt="Feature Image"
        />
      </div>
      <div className="flex md:items-start justify-center items-center flex-col space-y-5 md:space-y-10">
        <h1 className="text-[#1B1C20] text-center md:text-start text-2xl sm:text-4xl md:leading-normal">
          Real-Time Audio Transcriptions
        </h1>
        <p className="text-[#5F616B] text-center md:text-start">
          Select your preferred language and chat away
        </p>
      </div>
    </div>
  );
};

export default Feature1;
