import React from "react";
import Avater from '../../../../assets/Avatar.jpeg'
import { ImCross } from "react-icons/im";

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) {
    return null;
  }
  return (
    <div
      onClick={onClose}
      className="flex items-center justify-center bg-opacity-25 backdrop:blur-sm fixed inset-0 bg-black"
    >
      <div className="flex flex-col ">
        <div
          onClick={(e) => e.stopPropagation()}
          className="rounded-md p-[3.7rem] space-y-4 bg-white flex flex-col text-center items-center"
        >
          <img
            className="w-20 h-20 rounded-full object-cover border-2 border-[#53829C]"
            src={Avater}
            alt="Doctor Avatar"
          />
          <h1 className="text-xl flex-wrap font-semibold text-[#2a5c83] mt-2 mb-2">
            Dr. Md Tofaal Ahmed
          </h1>
          <p className="text-sm text-[#2a5c83] mb-4">Nephrologist</p>
          <div className="flex items-center space-x-9">
            <div className="bg-[#53829C]  hover:bg-[#497791] rounded-md px-2 py-1 cursor-pointer hover:scale-105 duration-300 text-md font-semibold text-white">
              Appointment
            </div>
            <div
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="bg-[#53829C] flex items-center space-x-2 hover:bg-[#497791] rounded-md px-2 py-1 cursor-pointer hover:scale-105 duration-300 text-md font-semibold text-white"
            >
              <ImCross />
              <span>Close</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
