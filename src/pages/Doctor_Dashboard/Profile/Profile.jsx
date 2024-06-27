import React, { useState } from "react";
import Avater from "../../../assets/doctor_Logo.png";
import { LuCamera } from "react-icons/lu";
import { IoSave } from "react-icons/io5";
import { baseUrl } from "../../../constants";
import { loadFromLocalStorage } from "../../../commons/localStorage";
import { useEffect } from "react";
import axios from "axios";

const Profile = () => {
  // const [image, setImage] = useState(Avater);
  const [isEditing, setIsEditing] = useState(true);
  const [isLoading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    from_time: "",
    to_time: "",
    description: "",
    profile_img: "",
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // setImage(e.target.result);
        uploadToImgbb(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // upload to imgbb API
  const uploadToImgbb = async (base64Image) => {
    try {
      const _formData = new FormData();
      _formData.append("image", base64Image.split(",")[1]);
      const response = await axios.post(
        "https://api.imgbb.com/1/upload",
        _formData,
        {
          params: {
            key: "ed67a942812ea90bf6e8f65a6c43c091",
          },
        }
      );
      console.log(response.data.data.url);
      setFormData({ ...formData, profile_img: response.data.data.url });
    } catch (error) {
      console.error("Error uploading image to imgbb", error);
    }
  };

  // update profile info
  const updateProfile = () => {
    let token = loadFromLocalStorage("doctor-token");

    console.log("submitting data:", formData);
    setIsEditing(false);
    fetch(`${baseUrl}/doctors/profile/`, {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return null;
      })
      .then((data) => {
        if (data == null) return;
        setIsEditing(true);
        alert("Successfully updated profile");
      });
  };

  // get profile info
  useEffect(() => {
    let token = loadFromLocalStorage("doctor-token");

    fetch(`${baseUrl}/doctors/profile/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
      method: "GET",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return null;
      })
      .then((data) => {
        if (data == null) return;
        setLoading(false);
        setFormData(data);
      });
  }, []);

  return (
    <>
      {!isLoading ? (
        <div className="w-full h-screen overflow-y-scroll flex flex-col items-center">
          <form className="mx-[7rem] mt-[3rem]">
            <h1 className="text-[#53829C] text-3xl font-bold text-center mb-6">
              Your Profile
            </h1>
            <div className="flex flex-col items-center space-y-2">
              <div className="object-cover relative flex items-end justify-center">
                <img
                  className="object-cover w-20 h-20 rounded-full ring-2 ring-[#53829C] cursor-pointer"
                  src={formData?.profile_img}
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

                <div className="flex gap-4 items-center justify-between">
                  <div className="w-full flex items-center justify-between space-x-3 p-1">
                    <label className="text-slate-600" htmlFor="">
                      Available Time :
                    </label>
                    <div className="relative z-0">
                      <input
                        type="time"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        name="from_time"
                        value={formData.from_time}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="floating_standard"
                        className="absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        From Time
                      </label>
                    </div>

                    {/* To Time */}
                    <div className="relative z-0">
                      <input
                        type="time"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        name="to_time"
                        value={formData.to_time}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="floating_standard"
                        className="absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        To Time
                      </label>
                    </div>
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
                    onClick={() => {
                      updateProfile();
                    }}
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
      ) : (
        <div className="flex h-screen w-full">
          <div className="m-auto text-center font-bold text-[1.5rem]">
            <h3 className="text-gray-600">Loading</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
