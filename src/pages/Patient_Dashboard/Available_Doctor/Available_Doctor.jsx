import React, { Fragment, useEffect, useState } from "react";
import Avater from "../../../assets/doctor_Logo.png";
import { Doctor_Appointment } from "../../../constants";
import Modal from "./Modal/Modal";
import { baseUrl, weekDays } from "../../../constants";
import { convertTimeFormat } from "../../../utils/functions";

const Available_Doctor = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDoctor, setselectedDoctor] = useState(null);
  const handleCardClick = (doctor) => {
    setselectedDoctor(doctor);
    setShowModal(true);
  };

  const [isLoading, setLoading] = useState(true);
  const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/doctors/doctors-list/`, {
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
        setLoading(false);
        setDoctorList(data);
        console.log(data);
      });
  }, []);

  return (
    <Fragment>
      {!isLoading ? (
        <div className=" bg-transparent  w-full h-screen overflow-y-scroll custom-scrollbar p-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 custom1200:grid-cols-4 gap-5">
            {doctorList.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleCardClick(item)}
                  className=" hover:bg-[#f2ffff] flex glass flex-col items-center text-center  rounded-xl shadow-xl p-5 transform transition-transform hover:scale-105 hover:shadow-xl cursor-pointer duration-500"
                >
                  <img
                    className="w-20 h-20 rounded-full object-cover border-2 border-[#53829C]"
                    src={item?.profile_img}
                    alt="Doctor Avatar"
                  />
                  <h1 className="text-xl flex-wrap font-semibold  mt-2 mb-2">
                    {item?.name}
                  </h1>
                  <p className="text-sm ">{item.specialty}</p>
                  <div className="mt-3 ">
                    <p>
                      Available From:{" "}
                      <span className="font-medium text-sm">
                        {convertTimeFormat(item?.from_time)}
                      </span>
                    </p>
                    <p>
                      To:{" "}
                      <span className="font-medium text-sm">
                        {convertTimeFormat(item?.to_time)}
                      </span>
                    </p>
                    <p className="flex flex-wrap">
                      {item.available_days.split("").map((char, index) => (
                        <span key={index} className="bg-blue-400 mr-2 mt-2 py-[2px] px-[6px] rounded text-white text-[.8rem]">
                          {weekDays[parseInt(char)]}                          
                        </span>
                      ))}
                    </p>
                  </div>
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
      <Modal
        doctor={selectedDoctor}
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      />
    </Fragment>
  );
};

export default Available_Doctor;
