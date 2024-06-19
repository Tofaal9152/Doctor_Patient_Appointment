import React, { useState } from "react";
// from asset
import close from "../../../assets/close.svg";
import menu from "../../../assets/menu.svg";
import logo from "../../../assets/logo.png";
// From Constants
import { navbarNavLinks } from "../../../constants/index";
// From React-Router-Dom
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  // state
  const navigate = useNavigate();
  const [open_close, setopen_close] = useState(true);
  return (
    <nav className={`w-full flex justify-between items-center py-3`}>
      <img className="w-[2.3rem] md:w-[2.5rem]" src={logo} alt="" />
      {/* pc */}
      <div className="hidden custom879:flex justify-center items-center space-x-10 ">
        {navbarNavLinks.map((item, index) => {
          return (
            <div className="text-white fontPoppin cursor-pointer" key={item.id}>
              {item.title}
            </div>
          );
        })}
      </div>
      <div className="hidden custom879:flex items-center justify-between space-x-8 ">
        <p
          onClick={() => navigate("/login")}
          className="text-white fontPoppin cursor-pointer "
        >
          Login
        </p>
        <button
          onClick={() => navigate("/signup")}
          className="custom-gradient flex-1 text-white font-semibold py-2 px-4 border rounded-lg"
        >
          Get Started Free
        </button>
      </div>

      {/* mobile */}
      <div className="custom879:hidden flex items-center justify-end space-x-7">
        <img
          className="relative cursor-pointer w-[1.3rem] z-10 invert"
          onClick={() => setopen_close((e) => !e)}
          src={open_close ? menu : close}
          alt=""
        />

        <div
          className={`${
            open_close ? "hidden" : "flex"
          } custom879:hidden flex-col bg-white h-screen items-start flex-1  space-y-4 fixed top-[0] overflow-x-hidden right-0 min-w-[9.5rem] p-4 sidebar`}
        >
          {navbarNavLinks.map((item, index) => {
            return (
              <div
                className="text-black fontPoppin cursor-pointer mt-[4.1rem]"
                key={item.id}
              >
                {item.title}
              </div>
            );
          })}
          <div className="flex custom879:hidden flex-col items-center space-y-3 absolute bottom-[4rem] right-2 ">
            <p
              onClick={() => navigate("/login")}
              className="text-black fontPoppin cursor-pointer "
            >
              Login
            </p>
            <button
              onClick={() => navigate("/signup")}
              className="bg-[#9747ff] flex-1 hover:bg-violet-600 duration-300 text-white font-semibold py-1 px-2 text-sm border rounded-lg"
            >
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
