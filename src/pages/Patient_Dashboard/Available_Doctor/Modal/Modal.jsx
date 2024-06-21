import React, { useState } from "react";
import Avater from "../../../../assets/doctor_Logo.png";
import { FaUserDoctor } from "react-icons/fa6";


const Modal = ({ isVisible, onClose, doctor }) => {
  const [problem, setProblem] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");

  if (!isVisible) {
    return null;
  }

  const handleProblemChange = (e) => setProblem(e.target.value);
  const handleDateChange = (e) => setAppointmentDate(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Problem:", problem);
    console.log("Appointment Date:", appointmentDate);
    onClose();
  };

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
            alt="Doctor Avatar"
          />
          <h1 className="text-xl flex-wrap font-semibold mt-2 mb-2">
            {doctor.name}
          </h1>
          <p className="text-sm text-[#2a5c83] mb-4">{doctor.specialty}</p>
          <div className="mt-3 ">
            <p>
              Available:{" "}
              <span className="font-medium">{doctor.availability}</span>
            </p>
            <p>
              Hours: <span className="font-medium">{doctor.hours}</span>
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            <textarea
              className="w-full text-sm p-2 border rounded-md outline-none focus:ring-2 focus:ring-[#53829C]"
              placeholder="Describe your problem..."
              value={problem}
              onChange={handleProblemChange}
              required
            />
            <input
              type="date"
              className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-[#53829C]"
              value={appointmentDate}
              onChange={handleDateChange}
              required
            />
            <div className="flex items-center justify-center space-x-4">
              <button
                type="submit"
                className="bg-[#76c3ed] space-x-2 flex items-center justify-center hover:bg-[#7dcefa] rounded-md px-3 duration-300 py-2 cursor-pointer text-md font-semibold text-white"
              >
                <FaUserDoctor size={22} />
                <span>Appointment</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
