import React from "react";
import Avater from "../../../../assets/doctor_Logo.png";
import { FaUserDoctor } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";


const Modal = ({ isVisible, onClose, patient }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div
      onClick={onClose}
      className="flex items-center justify-center bg-opacity-25 backdrop:blur-sm fixed inset-0 bg-black"
    >
      <div className="flex flex-col relative">
        <div
          onClick={(e) => e.stopPropagation()}
          className="rounded-md p-8 space-y-4 bg-white flex flex-col text-center items-center"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="flex absolute top-1 right-1 items-center space-x-2 text-red-500 rounded-md px-2 py-1 cursor-pointer hover:scale-105 duration-500 font-bold text-lg"
          >
            X
          </div>
          <img
            className="w-20 h-20 rounded-full object-cover border-2 border-[#53829C]"
            src={Avater}
            alt="Patient Avatar"
          />
          <h1 className="text-xl flex-wrap font-semibold mt-2 mb-2">
            {patient.patientName}
          </h1>
          <p className="text-sm font-medium">
            Age: <span className="text-sm font-bold">{patient.patientAge}</span>
          </p>
          <p className="text-sm font-medium : font">
            Gender:{" "}
            <span className="text-sm font-bold">{patient.patientGender}</span>
          </p>
          <p className="text-sm font-medium">
            {" "}
            font-medium Appointment Time:{" "}
            <span className="text-sm font-bold">{patient.appointmentTime}</span>
          </p>
          <p className="text-sm font-medium">
            Reason: <span className="text-sm font-bold">{patient.reason}</span>
          </p>
          <div className="flex items-center justify-center space-x-4">
            <button
              type="submit"
              className="bg-[#76c3ed] space-x-1 flex items-center justify-center hover:bg-[#69afd4] rounded-md px-3 duration-300 py-2 cursor-pointer text-md font-semibold text-white"
            >
              <MdHealthAndSafety size={25} />
              <span>Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
