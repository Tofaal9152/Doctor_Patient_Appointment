import React from "react";
import Avater from "../../../../assets/doctor_Logo.png";
import { convertTimeFormat } from "../../../../utils/functions";

const AppointmentModal = ({ isVisible, onClose, appointment }) => {
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
            src={appointment?.doctor?.profile_img}
            alt="Doctor Avatar"
          />
          <h1 className="text-xl flex-wrap font-semibold mt-2 mb-2">
            {appointment?.doctor?.name}
          </h1>
          <p className="text-sm">{appointment?.doctor?.specialization}</p>
          <p className="text-sm">
            From: {convertTimeFormat(appointment?.doctor?.from_time)}
          </p>
          <p className="text-sm">
            To: {convertTimeFormat(appointment?.doctor?.to_time)}
          </p>

          <p className="text-sm">
            <span className="underline"> Description:</span> <br />
            {appointment?.problem_description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
