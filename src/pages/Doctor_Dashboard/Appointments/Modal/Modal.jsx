import React, { useState } from "react";
import Avater from "../../../../assets/doctor_Logo.png";
import { FaUserDoctor } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { loadFromLocalStorage } from "../../../../commons/localStorage";
import { baseUrl } from "../../../../constants";

const Modal = ({ isVisible, onClose, patient }) => {
  let [time, setTime] = useState("");

  if (!isVisible) {
    return null;
  }

  // set appointment and validation check
  const setAppointment = (cancel) => {
    if (time == "" && !cancel) {
      alert("Please select the time");
      return;
    }

    let token = loadFromLocalStorage("doctor-token");
    const payload = {
      appointment_id: patient?.id,
      time: cancel ? "00:00:00" : time,
      status: !cancel ? "approved" : "cancelled",
    };

    console.log(payload);

    fetch(`${baseUrl}/doctors/appointment/`, {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return null;
      })
      .then((data) => {
        if (data == null) return;
        console.log(data);
        location.reload()
        setTime("");
        onClose();
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTime(value);
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
            src={patient?.patient?.profile_img}
            alt="Patient Avatar"
          />
          <h1 className="text-xl flex-wrap font-semibold mt-2 mb-2">
            {patient.patientName}
          </h1>
          <p className="text-sm font-medium">
            Age:{" "}
            <span className="text-sm font-bold">{patient?.patient?.age}</span>
          </p>
          <p className="text-sm font-medium">
            Gender:{" "}
            <span className="text-sm font-bold">
              {patient?.patient?.gender}
            </span>
          </p>
          <p className="text-sm font-medium">
            {" "}
            Appointment Date: <br />
            <span className="text-sm font-bold">
              {patient?.appointment_date}
            </span>
          </p>
          <p className="text-sm font-medium">
            <span className="text-sm font-bold">
              {patient?.problem_description}
            </span>
          </p>

          <p>
            <span className="text-sm font-bold">Set time:</span>
            <input
              type="time"
              className="block pb-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={time}
              onChange={handleChange}
            />
          </p>

          <div className="flex items-center justify-center space-x-4">
            <button
              type="submit"
              className="bg-[#76c3ed] space-x-1 flex items-center justify-center hover:bg-[#69afd4] rounded-md px-3 duration-300 py-2 cursor-pointer text-md font-semibold text-white"
              onClick={() => {
                setAppointment(false);
              }}
            >
              <MdHealthAndSafety size={25} />
              <span>Appoint</span>
            </button>

            <button
              type="submit"
              className="bg-[#ff6547] space-x-1 flex items-center justify-center hover:bg-[#69afd4] rounded-md px-3 duration-300 py-2 cursor-pointer text-md font-semibold text-white"
              onClick={() => {
                setAppointment(true);
              }}
            >
              <MdCancel size={25} />
              <span>Cancel</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
