import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { existsInLocalStorage } from "./localStorage";

export const DoctorPrivateRoute = ({ children }) => {
  const location = useLocation();

  return existsInLocalStorage("doctor-token") ? (
    children
  ) : (
    <Navigate to="/doctor-login" state={{ from: location }} replace />
  );
};

export const PatientPrivateRoute = ({ children }) => {
  const location = useLocation();
  return existsInLocalStorage("patient-token") ? (
    children
  ) : (
    <Navigate to="/patient-login" state={{ from: location }} replace />
  );
};
