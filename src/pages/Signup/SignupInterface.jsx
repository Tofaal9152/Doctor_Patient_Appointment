import React, { useState } from "react";
// Images From Assets
import Login_Brain_Logo from "../../assets/brainLogo.png";
import Login_Email_Logo from "../../assets/loginEmailLogo.png";
// Icons from React-Icons
import { FaGoogle } from "react-icons/fa";
import { FaVk } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [Checkedddd, setCheckedddd] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      {/* first */}
      <div className="fontimonti text-center flex flex-col items-center justify-center space-y-4">
        <img
          onClick={() => navigate("/")}
          className="Heading w-[62px] cursor-pointer"
          src={Login_Brain_Logo}
          alt=""
        />
        <h1
          onClick={() => navigate("/")}
          className="text-[#6408DC] text-3xl font-bold  cursor-pointer"
        >
          PolyGlot
        </h1>
        <p className="text-[#7C8092]">Sign Up Now!</p>
        <div className="flex items-center justify-center space-x-2">
          <div className=" bg-[#F4F6FA] rounded-md p-2 cursor-pointer ">
            <FaVk size={23} />
          </div>
          <div className="bg-[#F4F6FA] rounded-md p-2 cursor-pointer">
            <FaGoogle size={23} />
          </div>
          <div className="bg-[#F4F6FA] rounded-md p-2 cursor-pointer font-bold">
            <img className="w-[25px]" src={Login_Email_Logo} alt="" />
          </div>
        </div>
        <p className="text-[#7C8092]">With Email</p>
      </div>
      {/* Second */}
      <div className="flex flex-col items-start space-y-10 min-w-[10rem] max-w-[30rem] w-[80vw]">
        <div className="space-y-2 w-full">
          <div className="flex flex-col space-y-1">
            <label className="font-semibold" htmlFor="">
              Email
            </label>
            <input
              className="outline-none p-2 rounded-md border-[1.5px] w-full border-[#8D46F6] fontimonti"
              placeholder="Enter email"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="font-semibold" htmlFor="">
              Password
            </label>
            <input
              className="outline-none p-2 rounded-md border-[1.5px] w-full border-[#8D46F6]"
              placeholder="Enter Password"
              type="password"
              name=""
              id=""
            />
          </div>
          <div className="flex items-center space-x-2">
            <input checked={Checkedddd} type="checkbox" name="" id="" />
            <p
              onClick={() => setCheckedddd((e) => !e)}
              className="font-semibold cursor-pointer"
            >
              Remember me
            </p>
          </div>
        </div>
        <button className="bg-[#9747ff]  w-full text-center  hover:bg-violet-600 duration-300 text-white font-semibold py-2 px-4 border rounded-lg">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
