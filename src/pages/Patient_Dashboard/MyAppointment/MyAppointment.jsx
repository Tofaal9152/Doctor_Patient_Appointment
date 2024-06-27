import React, { Fragment, useState } from "react";
import Avater from "../../../assets/doctor_Logo.png";
import { User_Appointments } from "../../../constants";
import AppointmentModal from "./AppointmentModal/AppointmentModal.jsx";
import { useEffect } from "react";
import { baseUrl } from "../../../constants";
import { loadFromLocalStorage } from "../../../commons/localStorage.jsx";
import { convertTimeFormat } from "../../../commons/functions.jsx";

const Confirmed_Appointments = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const [isLoading, setLoading] = useState(true);
  const [appointmentsList, setAppointmentsList] = useState([]);

  const handleCardClick = (appointment) => {
    setSelectedAppointment(appointment);
    setShowModal(true);
  };

  useEffect(() => {
    let token = loadFromLocalStorage("patient-token");

    fetch(`${baseUrl}/patient/appointment/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
      method: "GET",
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
        setAppointmentsList(data);
        setLoading(false);
      });
  }, []);

  return (
    <Fragment>
      {!isLoading ? (
        <div className="bg-transparent w-full h-screen overflow-y-scroll custom-scrollbar p-3 pt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 custom1200:grid-cols-4 gap-5">
            {appointmentsList.map((appointment, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleCardClick(appointment)}
                  className="hover:bg-[#f2ffff] flex glass flex-col items-center text-center rounded-xl shadow-xl p-5 transform transition-transform hover:scale-105 hover:shadow-xl cursor-pointer duration-500"
                >
                  <img
                    className="w-20 h-20 rounded-full object-cover border-2 border-[#53829C]"
                    src={appointment?.doctor?.profile_img}
                    alt="Doctor Avatar"
                  />
                  <h1 className="text-xl flex-wrap font-semibold mt-2 mb-2">
                    {appointment?.doctor?.name}
                  </h1>
                  <p className="text-sm">
                    {appointment?.doctor?.specialization}
                  </p>
                  <p className="text-sm">
                    Date: {appointment?.appointment_date}
                  </p>
                  <p className="text-sm">
                    Time:{" "}
                    {appointment?.appointment_time == null
                      ? "Pending"
                      : convertTimeFormat(appointment?.appointment_time)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex h-screen w-full">
          <div className="m-auto text-center font-bold text-[1.5rem]">
            <h3 className="text-gray-600">Loading</h3>
          </div>
        </div>
      )}
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
