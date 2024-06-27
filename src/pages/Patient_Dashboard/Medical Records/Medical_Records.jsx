import React, { Fragment, useState } from "react";
import Avater from "../../../assets/doctor_Logo.png";
import { Medical_Reports } from "../../../constants";
import ReportModal from "./ReportModal/ReportModal.jsx";
import { baseUrl } from "../../../constants";
import { loadFromLocalStorage } from "../../../commons/localStorage.jsx";
import { useEffect } from "react";

const MedicalReport = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);

  const handleCardClick = (report) => {
    setSelectedReport(report);
    setShowModal(true);
  };

  const [records, setRecords] = useState([]);

  useEffect(() => {
    let token = loadFromLocalStorage("patient-token");
    fetch(`${baseUrl}/patient/medical-records/`, {
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
        console.log(data);
        setRecords(data);
      });
  }, []);

  return (
    <Fragment>
      <div className="bg-transparent w-full h-screen overflow-y-scroll custom-scrollbar p-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 custom1200:grid-cols-4 gap-5">
          {records.map((report, index) => {
            return (
              <div
                key={index}
                onClick={() => handleCardClick(report)}
                className="hover:bg-[#f2ffff] flex glass flex-col items-center text-center rounded-xl shadow-xl p-5 transform transition-transform hover:scale-105 hover:shadow-xl cursor-pointer duration-500"
              >
                <img
                  className="w-[17rem] h-[17rem] object-cover border-2 border-[#53829C]"
                  src={report?.file_url}
                  alt="Patient Avatar"
                />
                <p className="text-sm mt-4">
                  From: {"  "}
                  <b>{report.doctor_name}</b>
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {selectedReport && (
        <ReportModal
          isVisible={showModal}
          onClose={() => setShowModal(false)}
          report={selectedReport}
        />
      )}
    </Fragment>
  );
};

export default MedicalReport;
