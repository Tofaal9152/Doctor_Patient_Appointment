import React, { Fragment, useState } from "react";
import Avater from "../../../assets/doctor_Logo.png";
import { Medical_Reports } from "../../../constants";
import AppointmentModal from "./AppointmentModal/AppointmentModal.jsx";
import { baseUrl } from "../../../constants";
import { loadFromLocalStorage } from "../../../commons/localStorage.jsx";
import { useEffect } from "react";
import { convertTimeFormat } from "../../../commons/functions.jsx";

const Confirmed_Appointments = () => {
  // const [showModal, setShowModal] = useState(false);
  // const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleCardClick = (appointment) => {
    setSelectedAppointment(appointment);
    setShowModal(true);
  };

  const [isLoading, setLoading] = useState(true);
  const [appointmentList, setAppointmentList] = useState([]);

  useEffect(() => {
    let token = loadFromLocalStorage("doctor-token");
    fetch(`${baseUrl}/doctors/appointment/confirmed`, {
      method: "GET",
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return null;
      })
      .then((data) => {
        if (data == null) return;
        setLoading(false);
        setAppointmentList(data);
        console.log(data);
      });
  }, []);

  return (
    <Fragment>
      {!isLoading ? (
        <div className="bg-transparent w-full h-screen overflow-y-scroll custom-scrollbar p-3">
          {appointmentList.length == 0 && (
            <div className="flex h-screen w-full">
              <div className="m-auto text-center font-bold text-[1.5rem]">
                <h3 className="text-gray-600">No Confirmed Appointments</h3>
              </div>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 custom1200:grid-cols-4 gap-5">
            {appointmentList.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleCardClick(item)}
                  className="hover:bg-[#f2ffff] flex glass flex-col items-center text-center rounded-xl shadow-xl p-5 transform transition-transform hover:scale-105 hover:shadow-xl cursor-pointer duration-500"
                >
                  <img
                    className="w-20 h-20 rounded-full object-cover border-2 border-[#53829C]"
                    src={item?.patient?.profile_img}
                    alt="Patient Avatar"
                  />
                  <h1 className="text-xl flex-wrap font-semibold mt-2 mb-2">
                    {item?.patient?.name}
                  </h1>
                  <p className="text-sm">
                    Age:{" "}
                    <span className="font-medium text-sm">
                      {item?.patient?.age}
                    </span>{" "}
                  </p>
                  <p className="text-sm">
                    Gender:{" "}
                    <span className="font-medium text-sm">
                      {item?.patient?.gender}
                    </span>{" "}
                  </p>
                  <p className="text-sm mt-[.2rem]">
                    Appointment Date: <br />
                    <span className="font-medium text-sm">
                      {item?.appointment_date}
                    </span>
                  </p>

                  <p className="text-sm mt-[.2rem]">
                    Time: {"  "}
                    <span className="font-medium text-sm">
                      {convertTimeFormat(item?.appointment_time)}
                    </span>
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

      {/* {selectedAppointment && (
        <AppointmentModal
          isVisible={showModal}
          onClose={() => setShowModal(false)}
          appointment={selectedAppointment}
        />
      )} */}
    </Fragment>
  );
};

export default Confirmed_Appointments;
