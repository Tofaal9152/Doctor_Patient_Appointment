import React, { useState } from "react";
import { useForm } from "react-hook-form";
import backgroundImage from "../../assets/bgImage.jpg";
import Avater from "../../assets/doctor_Logo.png";
import axios from "axios";
import { LuCamera } from "react-icons/lu";
import { baseUrl } from "../../constants";
import { useNavigate } from "react-router-dom";

const Patient_Registration = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: async (data) => {
      return {
        values: {
          ...data,
          age: parseInt(data.age, 10), // Parse 'age' to integer
        },
        errors: {},
      };
    },
  });

  const [image, setImage] = useState(Avater);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Image = e.target.result;
        setImage(base64Image);
        uploadToImgbb(base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadToImgbb = async (base64Image) => {
    try {
      const formData = new FormData();
      formData.append("image", base64Image.split(",")[1]); // Remove the data:image/png;base64, part
      const response = await axios.post(
        "https://api.imgbb.com/1/upload",
        formData,
        {
          params: {
            key: "ed67a942812ea90bf6e8f65a6c43c091",
          },
        }
      );
      console.log(response.data.data.url);
      setValue("profile_img", response.data.data.url); // Set the img_url field in the form
    } catch (error) {
      console.error("Error uploading image to imgbb", error);
    }
  };

  const onSubmit = (data) => {
    if (!("profile_img" in data)) {
      alert("Please upload your Profile Image");
      return;
    }
    if (data["password1"] !== data["password2"]) {
      alert("The passwords do not match");
      return;
    }

    console.log(data);
    console.log(typeof data);

    fetch(`${baseUrl}/patient/registration/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          navigate("/patient-login");
        }
        return res.text();
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="interfont flex flex-col items-center justify-center h-screen bg-cover"
    >
      <h1 className="text-3xl font-semibold text-[#538296] text-center mb-4">
        Patient Registration
      </h1>
      <div className="bg-opacity-65 flex flex-col items-center rounded-md border border-[#c5d8e2] shadow-2xl backdrop-filter backdrop-blur-sm py-3 sm:p-3 space-y-6">
        {/* Profile Image */}
        <div className="object-cover relative flex  items-end justify-center space-y-2">
          <img
            className=" object-cover w-[4.5rem] h-[4.5rem] rounded-full ring-2 ring-[#53829C] cursor-pointer"
            src={image}
            alt="Avatar"
          />
          <div className="absolute bottom-0 right-0">
            <div className="relative z-10">
              <label htmlFor="fileInput" className="cursor-pointer">
                <div className="p-1 bg-[#53829C] rounded-full">
                  <LuCamera size={20} className=" text-white" />
                </div>
              </label>
              <input
                onChange={handleImageChange}
                type="file"
                id="fileInput"
                className="opacity-0 hidden absolute top-0 left-0 w-full h-full cursor-pointer"
              />
            </div>
          </div>
        </div>
        {/* Form */}
        <div className="w-full p-5 sm:p-10">
          <form
            className="space-y-4 w-full "
            action=""
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Name */}
            <div className="relative z-0">
              <input
                type="text"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                {...register("name", { required: true })}
              />
              <label
                htmlFor="floating_standard"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
            {/* Age */}
            <div className="flex md:flex-row flex-col gap-2">
              <div className="relative z-0">
                <input
                  type="number"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  {...register("age", { required: true })}
                />
                <label
                  htmlFor="floating_standard"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Age
                </label>
              </div>
              <div className="relative z-0">
                <input
                  type="number"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  {...register("phone_number", { required: true })}
                />
                <label
                  htmlFor="floating_standard"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone Number
                </label>
              </div>
            </div>
            {/* Sex */}
            <div className="flex flex-col">
              <label className="text-gray-800" htmlFor="gender">
                Gender:
              </label>
              <div className="flex space-x-5">
                <div className="space-x-2">
                  <input
                    id="male"
                    className="cursor-pointer "
                    type="radio"
                    value="male"
                    {...register("gender", { required: true })}
                  />
                  <label className="cursor-pointer" htmlFor="male">
                    Male
                  </label>
                </div>
                <div className="space-x-2">
                  <input
                    className="cursor-pointer "
                    type="radio"
                    id="female"
                    value="female"
                    {...register("gender", { required: true })}
                  />
                  <label className="cursor-pointer " htmlFor="female">
                    Female
                  </label>
                </div>
                <div className="space-x-2">
                  <input
                    type="radio"
                    className="cursor-pointer "
                    value="others"
                    id="other"
                    {...register("gender", { required: true })}
                  />
                  <label className="cursor-pointer " htmlFor="other">
                    Others
                  </label>
                </div>
              </div>
            </div>
            {/* Email */}
            <div className="relative z-0">
              <input
                type="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              <label
                htmlFor="floating_standard"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>
            {/* Password */}
            <div className="relative z-0">
              <input
                type="password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                {...register("password1", { required: true })}
              />
              <label
                htmlFor="floating_standard"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                {...register("password2", { required: true })}
              />
              <label
                htmlFor="floating_standard"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Re-type Password
              </label>
            </div>
            {/* Submit */}
            <div className="">
              <input
                className="bg-[#53829C] mt-[2rem] hover:bg-[#497791] rounded-md w-full px-2 py-1 cursor-pointer hover:scale-105 duration-300 text-md font-semibold text-white"
                disabled={isSubmitting}
                type="submit"
                value="Register"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Patient_Registration;
