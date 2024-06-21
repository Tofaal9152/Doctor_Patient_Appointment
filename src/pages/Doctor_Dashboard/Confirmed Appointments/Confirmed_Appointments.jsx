import React, { Fragment, useState } from "react";
import Avater from "../../../assets/doctor_Logo.png";
import { Medical_Reports } from "../../../constants";
import AppointmentModal from "./AppointmentModal/AppointmentModal.jsx";

const Confirmed_Appointments = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleCardClick = (appointment) => {
    setSelectedAppointment(appointment);
    setShowModal(true);
  };

  return (
    <Fragment>
      <div className="bg-transparent w-full h-screen overflow-y-scroll custom-scrollbar p-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 custom1200:grid-cols-4 gap-5">
          {Medical_Reports.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => handleCardClick(item)}
                className="hover:bg-[#f2ffff] flex glass flex-col items-center text-center rounded-xl shadow-xl p-5 transform transition-transform hover:scale-105 hover:shadow-xl cursor-pointer duration-500"
              >
                <img
                  className="w-20 h-20 rounded-full object-cover border-2 border-[#53829C]"
                  src={Avater}
                  alt="Doctor Avatar"
                />
                <h1 className="text-xl flex-wrap font-semibold mt-2 mb-2">
                  {item.patientName}
                </h1>
                <div className="space-y-1">
                  <p className="text-sm">
                    Age: <span className="font-medium"> {item.patientAge}</span>
                  </p>
                  <p className="text-sm">
                    Gender:{" "}
                    <span className="font-medium">{item.patientGender}</span>{" "}
                  </p>
                  <p className="text-sm">
                    Date: <span className="font-medium">{item.date}</span>{" "}
                  </p>
                  <p className="text-sm">
                    Time: <span className="font-medium">{item.time}</span>{" "}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {selectedAppointment && (
        <AppointmentModal
          isVisible={showModal}
          onClose={() => setShowModal(false)}
          appointment={selectedAppointment}
        />
      )}
    </Fragment>
  );
};

export default Confirmed_Appointments;
