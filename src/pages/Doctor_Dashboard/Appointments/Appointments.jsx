import React, { Fragment, useState } from "react";
import Avater from "../../../assets/doctor_Logo.png";
import { Patient_Appointment } from "../../../constants";
import Modal from "./Modal/Modal";

const Available_Doctor = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleCardClick = (patient) => {
    setSelectedPatient(patient);
    setShowModal(true);
  };

  return (
    <Fragment>
      <div className="bg-transparent w-full h-screen overflow-y-scroll custom-scrollbar p-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 custom1200:grid-cols-4 gap-5">
          {Patient_Appointment.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => handleCardClick(item)}
                className="hover:bg-[#f2ffff] flex glass flex-col items-center text-center rounded-xl shadow-xl p-5 transform transition-transform hover:scale-105 hover:shadow-xl cursor-pointer duration-500"
              >
                <img
                  className="w-20 h-20 rounded-full object-cover border-2 border-[#53829C]"
                  src={Avater}
                  alt="Patient Avatar"
                />
                <h1 className="text-xl flex-wrap font-semibold mt-2 mb-2">
                  {item.patientName}
                </h1>
                <p className="text-sm">
                  Age: <span className="font-medium text-sm">{item.patientAge}</span>{" "}
                </p>
                <p className="text-sm">
                  Gender: <span className="font-medium text-sm">{item.patientGender}</span>{" "}
                </p>
                <p className="text-sm">
                  Appointment Time: <span className="font-medium text-sm">{item.appointmentTime}</span>
                </p>
                <p className="text-sm">
                  Reason: <span className="font-medium text-sm">{item.reason}</span>{" "}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {selectedPatient && (
        <Modal
          isVisible={showModal}
          onClose={() => setShowModal(false)}
          patient={selectedPatient}
        />
      )}
    </Fragment>
  );
};

export default Available_Doctor;
