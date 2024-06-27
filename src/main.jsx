import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// Landing Page
import Landing_page from "./pages/LandingPage/Landing_Page.jsx";

// Patient
import Patient_LandingPage from "./pages/Patient_Dashboard/Patient_LandingPage.jsx";
import Available_Doctor from "./pages/Patient_Dashboard/Available_Doctor/Available_Doctor.jsx";
import Patient_Registration from "./pages/Patient_Registration/Patient_Registration.jsx";
import Medical_Report from "./pages/Patient_Dashboard/Medical Records/Medical_Records.jsx";
import Profile_patient from "./pages/Patient_Dashboard/Profile/Profile.jsx";
import MyAppointment from "./pages/Patient_Dashboard/MyAppointment/MyAppointment.jsx";
// Doctor
import Doctor_LandingPage from "./pages/Doctor_Dashboard/Doctor_LandingPage.jsx";
import Appointments from "./pages/Doctor_Dashboard/Appointments/Appointments.jsx";
import Confirmed_Appointments from "./pages/Doctor_Dashboard/Confirmed Appointments/Confirmed_Appointments.jsx";
import Medical_Records from "./pages/Doctor_Dashboard/Medical Records/Medical_Records.jsx";
import Doctor_profile from "./pages/Doctor_Dashboard/Profile/Profile.jsx";
import Doctor_Registration from "./pages/Doctor_Registration/Doctor_Registration.jsx";
// login
import PatientLogin from "./pages/PatientLogin/PatientLogin.jsx";

import Messenger from "./pages/Messenger/Messenger.jsx";
import MessengerDoctor from "./pages/MessengerDoctor/MessengerDoctor.jsx";
// redux
import { Provider } from "react-redux";
import store from "./Redux/store.js";
// Rect-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DoctorLogin from "./pages/DoctorLogin/DoctorLogin.jsx";
import {
  DoctorPrivateRoute,
  PatientPrivateRoute,
} from "./commons/PrivateRoutes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing_page />,
  },
  {
    path: "/patient",
    element: (
      <PatientPrivateRoute>
        <Patient_LandingPage />
      </PatientPrivateRoute>
    ),
    children: [
      {
        path: "/patient",
        element: (
          <PatientPrivateRoute>
            <Available_Doctor />{" "}
          </PatientPrivateRoute>
        ),
      },
      {
        path: "/patient/profile",
        element: (
          <PatientPrivateRoute>
            <Profile_patient />{" "}
          </PatientPrivateRoute>
        ),
      },
      {
        path: "/patient/messages",
        element: (
          <PatientPrivateRoute>
            <Messenger />{" "}
          </PatientPrivateRoute>
        ),
      },
      {
        path: "/patient/medicalreport",
        element: (
          <PatientPrivateRoute>
            <Medical_Report />
          </PatientPrivateRoute>
        ),
      },
      {
        path: "/patient/myappointment",
        element: (
          <PatientPrivateRoute>
            <MyAppointment />
          </PatientPrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/doctor",
    element: (
      <DoctorPrivateRoute>
        <Doctor_LandingPage />{" "}
      </DoctorPrivateRoute>
    ),
    children: [
      {
        path: "/doctor",
        element: (
          <DoctorPrivateRoute>
            <Appointments />{" "}
          </DoctorPrivateRoute>
        ),
      },
      {
        path: "/doctor/profile",
        element: (
          <DoctorPrivateRoute>
            <Doctor_profile />
          </DoctorPrivateRoute>
        ),
      },
      {
        path: "/doctor/messages",
        element: (
          <DoctorPrivateRoute>
            <MessengerDoctor />
          </DoctorPrivateRoute>
        ),
      },
      {
        path: "/doctor/medicalrecords",
        element: (
          <DoctorPrivateRoute>
            <Medical_Records />
          </DoctorPrivateRoute>
        ),
      },
      {
        path: "/doctor/confirmappointment",
        element: (
          <DoctorPrivateRoute>
            <Confirmed_Appointments />
          </DoctorPrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/doctorregistration",
    element: <Doctor_Registration />,
  },
  {
    path: "/patientregistration",
    element: <Patient_Registration />,
  },
  {
    path: "/patient-login",
    element: <PatientLogin />,
  },
  {
    path: "/doctor-login",
    element: <DoctorLogin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
