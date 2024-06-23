import React, { useState } from "react";
// import Avater from "../../../../assets/doctor_Logo.png";
import { FaUserDoctor } from "react-icons/fa6";
import { convertTimeFormat } from "../../../../utils/functions";
import { loadFromLocalStorage } from "../../../../utils/localStorage";
import { baseUrl, weekDays } from "../../../../constants";

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

  // set appointment and validation check
  const setAppointment = () => {
    if (problem == "" || appointmentDate == "") {
      alert("Please fillup the form properly");
      return;
    }

    console.log(appointmentDate);
    let dayIndex = getDayNameIndex(appointmentDate);
    console.log(dayIndex);

    if (!doctor?.available_days.includes(dayIndex.toString())) {
      alert(`doctor is not avaliable on ${weekDays[dayIndex]}day`);
      return;
    }

    let token = loadFromLocalStorage("patient-token");
    const payload = {
      doctor: doctor?.id,
      problem_description: problem,
      appointment_date: appointmentDate,
    };

    console.log(payload);

    fetch(`${baseUrl}/patient/appointment/`, {
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
        setProblem("");
        setAppointmentDate("");
        onClose();
      });
  };

  function getDayNameIndex(dateString) {
    // Split the input string into parts
    const [year, month, day] = dateString.split("-");

    // Create a new Date object with the parts
    const date = new Date(`${year}-${month}-${day}`);
    console.log(date);

    // Get the day of the week (0 for Sunday, 1 for Monday, etc.)
    const dayIndex = date.getDay();

    return dayIndex;
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
              setProblem("");
              setAppointmentDate("");
              onClose();
            }}
            className="flex absolute top-1 right-1 items-center space-x-2 text-black rounded-md px-2 py-1 cursor-pointer hover:scale-105 duration-500 font-bold text-lg"
          >
            X
          </div>
          <img
            className="w-20 h-20 rounded-full object-cover border-2 border-[#53829C]"
            src={doctor?.profile_img}
            alt="Doctor Avatar"
          />
          <h1 className="text-xl flex-wrap font-semibold mt-2 mb-2">
            {doctor.name}
          </h1>
          <p className="text-sm text-[#2a5c83] mb-4">
            {doctor?.specialization}
          </p>
          <div className="mt-3 ">
            <p>
              Available From:{" "}
              <span className="font-medium">
                {convertTimeFormat(doctor?.from_time)}
              </span>
            </p>
            <p>
              To:{" "}
              <span className="font-medium">
                {convertTimeFormat(doctor?.to_time)}
              </span>
            </p>
          </div>

          <div className="mt-3 ">
            <p className="text-[.8rem]">{doctor?.description}</p>
          </div>

          <p className="flex flex-wrap">
            {doctor?.available_days.split("").map((char, index) => (
              <span
                key={index}
                className="bg-blue-400 mr-2 mt-2 py-[2px] px-[6px] rounded text-white text-[.8rem]"
              >
                {weekDays[parseInt(char)]}
              </span>
            ))}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            <textarea
              className="w-full text-sm p-2 border rounded-md outline-none focus:ring-2 focus:ring-[#53829C]"
              placeholder="Describe your problem ..."
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
                onClick={setAppointment}
                type="button"
                className="bg-[#76c3ed] space-x-2 flex items-center justify-center hover:bg-[#7dcefa] rounded-md px-3 duration-300 py-2 cursor-pointer text-md font-semibold text-white"
              >
                <FaUserDoctor size={22} />
                <span>Set an appointment</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
