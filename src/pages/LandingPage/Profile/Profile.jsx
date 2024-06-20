import React from "react";
import Avater from "../../../assets/doctor_Logo.png";

const Profile = () => {
  return (
    <div className=" w-full h-screen  flex justify-center bg-white">
      <form className=" mt-[3rem]">
        <div className="flex flex-col items-center  p-3 px-4 space-y-2">
          <img
            className="w-20 h-20 rounded-full ring-4 ring-[#53829C] object-cover "
            src={Avater}
            alt="Doctor Avatar"
          />
          <div class="grid grid-rows-3 w-[30rem] grid-cols-1 gap-2">
            <div>
              <label
                for="first_name"
                class="block mb-2 text-sm font-md font-semibold text-gray-900 "
              >
                Patient Name
              </label>
              <input
                type="text"
                id="first_name"
                value="Md Tofaal Ahmed"
                class="bg-gray-50  outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 "
                placeholder="John"
                required
              />
            </div>

            <div className="flex gap-2 ">
              <div className="">
                <label
                  for="Age"
                  class="block mb-2 text-sm font-md font-semibold text-gray-900 "
                >
                  Age
                </label>
                <input
                  type="tel"
                  id="phone"
                  class="bg-gray-50  outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5   "
                  placeholder="123-45-678"
                  value="20"
                  required
                />
              </div>
              <div className="">
                <label
                  for="Age"
                  class="block mb-2 text-sm font-md font-semibold text-gray-900 "
                >
                  Gender
                </label>
                <input
                  type="tel"
                  id="phone"
                  class="bg-gray-50  outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5   "
                  placeholder="123-45-678"
                  value="Male"
                  required
                />
              </div>
              <div>
                <label
                  for="phone"
                  class="block mb-2 text-sm font-md font-semibold text-gray-900 "
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  class="bg-gray-50  outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5   "
                  placeholder="123-45-678"
                  value="01732-243-108"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                />
              </div>
            </div>

            <div class="">
              <label
                for="email"
                class="block mb-2 text-sm font-md font-semibold text-gray-900 "
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50  outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5   "
                placeholder="tofaal9152@gmail.com"
                Value="tofaal9152@gmail.com"
                required
              />
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-[#53829C]  hover:bg-[#497791] rounded-md px-2 py-1 cursor-pointer hover:scale-105 duration-300 text-md font-semibold text-white">
                Update profile
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
