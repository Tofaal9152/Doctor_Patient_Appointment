import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import Login from "./pages/LogIn/LoginInterface.jsx";
import Signup from "./pages/Signup/SignupInterface.jsx";
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
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
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
