import React, { useState } from "react";
import Avater from "../../../assets/doctor_Logo.png";
import { LuCamera } from "react-icons/lu";
import { IoSave } from "react-icons/io5";

const Profile = () => {
  const [image, setImage] = useState(Avater);
  const [isEditing, setIsEditing] = useState(true); 
  const [formData, setFormData] = useState({
    name: "Md Tofaal Ahmed",
    specialization: "Nephrology",
    gender: "Male",
    phone: "01732-243-108",
    email: "tofaal9152@gmail.com",
    availableTimes: "9 AM - 5 PM",
    availableDays: "Monday to Friday",
    description: "Experienced nephrologist with over 10 years of practice.",
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-full h-screen overflow-y-scroll flex flex-col items-center justify-center">
      <form className="m-[7rem]">

        <h1 className="text-[#53829C] text-3xl font-bold text-center mb-6">
          Your Profile
        </h1>
        <div className="flex flex-col items-center space-y-2">
          <div className="object-cover relative flex items-end justify-center">
            <img
              className="object-cover w-20 h-20 rounded-full ring-2 ring-[#53829C] cursor-pointer"
              src={image}
              alt="Avatar"
            />
            <div className="absolute bottom-0 right-0">
              <div className="relative z-10">
                <label htmlFor="fileInput" className="cursor-pointer">
                  <div className="p-1 bg-[#53829C] rounded-full">
                    <LuCamera size={20} className="text-white" />
                  </div>
                </label>
                <input
                  type="file"
                  id="fileInput"
                  className="opacity-0 hidden absolute top-0 left-0 w-full h-full cursor-pointer"
                  onChange={handleImageChange}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-rows-3 w-[22rem] sm:w-[30rem] grid-cols-1 gap-4 mt-4">
            <div>
              <label
                htmlFor="name"
                className="block  mb-2 text-sm font-medium text-gray-900"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`bg-gray-100 border-2 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 ${
                  isEditing ? "" : "cursor-not-allowed"
                }`}
                readOnly={!isEditing}
              />
            </div>

            <div className="flex gap-4">
              <div>
                <label
                  htmlFor="specialization"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Specialization
                </label>
                <input
                  type="text"
                  id="specialization"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  className={`bg-gray-100 border-2 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 ${
                    isEditing ? "" : "cursor-not-allowed"
                  }`}
                  readOnly={!isEditing}
                />
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Gender
                </label>
                <input
                  type="text"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className={`bg-gray-100 border-2 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 ${
                    isEditing ? "" : "cursor-not-allowed"
                  }`}
                  readOnly={!isEditing}
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`bg-gray-100 border-2 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 ${
                    isEditing ? "" : "cursor-not-allowed"
                  }`}
                  readOnly={!isEditing}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`bg-gray-100 border-2 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 ${
                  isEditing ? "" : "cursor-not-allowed"
                }`}
                readOnly={!isEditing}
              />
            </div>
            <div className="flex gap-4 items-center justify-between">
              <div>
                <label
                  htmlFor="availableTimes"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Available Times
                </label>
                <input
                  type="text"
                  id="availableTimes"
                  name="availableTimes"
                  value={formData.availableTimes}
                  onChange={handleChange}
                  className={`bg-gray-100 border-2 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 ${
                    isEditing ? "" : "cursor-not-allowed"
                  }`}
                  readOnly={!isEditing}
                />
              </div>
              <div>
                <label
                  htmlFor="availableDays"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Available Days
                </label>
                <input
                  type="text"
                  id="availableDays"
                  name="availableDays"
                  value={formData.availableDays}
                  onChange={handleChange}
                  className={`bg-gray-100 border-2 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 ${
                    isEditing ? "" : "cursor-not-allowed"
                  }`}
                  readOnly={!isEditing}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className={`bg-gray-100 border-2 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 ${
                  isEditing ? "" : "cursor-not-allowed"
                }`}
                readOnly={!isEditing}
              />
            </div>

            <div className="flex items-center justify-center">
              <div
                onClick={() => setIsEditing(!isEditing)}
                className={`bg-[#76c3ed] flex items-center justify-center space-x-3 hover:bg-[#7dcefa] rounded-md px-4 py-2 cursor-pointer hover:scale-105 duration-300 text-md font-semibold text-white`}
              >
                <IoSave size={17} />
                <span>Save Changes</span>
              </div>
            </div>
          </div>
        </div>

      </form>
    </div>
  );
};

export default Profile;
