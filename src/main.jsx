import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import Doctor_Registration from './pages/Doctor_Registration/Doctor_Registration.jsx'
import Patient_Registration from "./pages/Patient_Registration/Patient_Registration.jsx"

import Messenger from "./pages/Messenger/Messenger.jsx";
// redux
import { Provider } from "react-redux";
import store from "./Redux/store.js";
// Rect-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
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
    path: "/messenger",
    element: <Messenger />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
