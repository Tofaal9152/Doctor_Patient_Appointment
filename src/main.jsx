import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// Landing Page
import Landing_page from './pages/Landing Page/Landing_Page.jsx'

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

import Messenger from "./pages/Messenger/Messenger.jsx";
// redux
import { Provider } from "react-redux";
import store from "./Redux/store.js";
// Rect-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing_page/>,
  },
  {
    path: "/patient",
    element: <Patient_LandingPage />,
    children: [
      {
        path: "/patient",
        element: <Available_Doctor />,
      },
      {
        path: "/patient/profile",
        element: <Profile_patient />,
      },
      {
        path: "/patient/messages",
        element: <Messenger />,
      },
      {
        path: "/patient/medicalreport",
        element: <Medical_Report />,
      },
      {
        path: "/patient/myappointment",
        element: <MyAppointment />,
      },
    ],
  },
  {
    path: "/doctor",
    element: <Doctor_LandingPage />,
    children: [
      {
        path: "/doctor",
        element: <Appointments />,
      },
      {
        path: "/doctor/profile",
        element: <Doctor_profile />,
      },
      {
        path: "/doctor/messages",
        element: <Messenger />,
      },
      {
        path: "/doctor/medicalrecords",
        element: <Medical_Records />,
      },
      {
        path: "/doctor/confirmappointment",
        element: <Confirmed_Appointments />,
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
