import React from "react";
import Avater from "../../../../assets/doctor_Logo.png";

const ReportModal = ({ isVisible, onClose, report }) => {
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
            src={Avater}
            alt="Patient Avatar"
          />
          <h1 className="text-xl flex-wrap font-semibold mt-2 mb-2">
            {report.patientName}
          </h1>
          <p className="text-sm">Age: {report.patientAge}</p>
          <p className="text-sm">Gender: {report.patientGender}</p>
          <div className="mt-3 text-left">
            <h2 className="text-lg font-semibold">Medical Report</h2>
            <p className="text-md">
              Diagnosis:{" "} <span className="font-medium">{report.diagnosis}</span>
            </p>
            <p className="text-md">
              Treatment:{" "}<span className="font-medium">{report.treatment}</span>
            </p>
            <p className="text-md">
              Notes:{" "} <span className="font-medium">{report.notes}</span>
            </p>
            <p className="text-md">
              Date:{" "} <span className="font-medium">{report.date}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
