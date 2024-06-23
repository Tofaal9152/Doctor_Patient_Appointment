import React, { useState } from "react";
import Avater from "../../../assets/doctor_Logo.png";
import { LuCamera } from "react-icons/lu";
import { IoSave } from "react-icons/io5";
import { useEffect } from "react";
import { baseUrl } from "../../../constants";
import { loadFromLocalStorage } from "../../../utils/localStorage";
import axios from "axios";

const Profile = () => {
  const [image, setImage] = useState(Avater);
  const [isEditing, setIsEditing] = useState(true); 
  const [formData, setFormData] = useState({
    name: "",
    profile_img: "",
    age: "",
    gender: "",
    phone_number: "",
  });

  const [isLoading, setLoading] = useState(true);

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
    let token = loadFromLocalStorage("patient-token");

    console.log("submitting data:", formData);
    setIsEditing(false);
    fetch(`${baseUrl}/patient/profile/`, {
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
    let token = loadFromLocalStorage("patient-token");

    fetch(`${baseUrl}/patient/profile/`, {
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

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
        uploadToImgbb(e.target.result);
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
    <>
      {!isLoading ? (
        <div className="w-full h-screen flex justify-center ">
          <form className="mt-10">
            <h1 className="text-[#53829C] text-3xl font-bold text-center mb-6">
              Your Profile
            </h1>
            <div className="flex flex-col items-center p-3 px-4 space-y-2">
              <div className="object-cover relative flex items-end justify-center space-y-2">
                <img
                  className="object-cover w-24 h-24 rounded-full ring-2 ring-[#53829C] cursor-pointer"
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
              <div className="grid grid-rows-3 min-w-[20rem] max-w-[30rem] w-[50vw] grid-cols-1 gap-4 mt-4">
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

                <div className="flex space-x-2">
                  <div className="">
                    <label
                      htmlFor="age"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Age
                    </label>
                    <input
                      type="tel"
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className={`bg-gray-100 border-2 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-[16vw] min-w-[10rem] p-2.5 ${
                        isEditing ? "" : "cursor-not-allowed"
                      }`}
                      readOnly={!isEditing}
                    />
                  </div>
                  <div className="">
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
                      className={`bg-gray-100 border-2 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-[16vw] min-w-[10rem] p-2.5 ${
                        isEditing ? "" : "cursor-not-allowed"
                      }`}
                      readOnly={!isEditing}
                    />
                  </div>
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
                    value={formData.phone_number}
                    onChange={handleChange}
                    className={`bg-gray-100 border-2 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 ${
                      isEditing ? "" : "cursor-not-allowed"
                    }`}
                    readOnly={!isEditing}
                  />
                </div>

                <div className="flex items-center justify-center">
                  <div
                    onClick={() => updateProfile()}
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
