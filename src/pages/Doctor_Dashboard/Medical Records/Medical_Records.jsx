import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { loadFromLocalStorage } from "../../../commons/localStorage";
import { baseUrl } from "../../../constants";

const Medical_Records = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: async (data) => {
      return {
        values: {
          ...data,
          patient: parseInt(data.patient, 10),
        },
        errors: {},
      };
    },
  });

  let [patient, setPatient] = useState([]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Image = e.target.result;
        uploadToImgbb(base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  // upload to imgbb API
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
      setValue("file_url", response.data.data.url); // Set the img_url field in the form
    } catch (error) {
      console.error("Error uploading image to imgbb", error);
    }
  };

  useEffect(() => {
    let token = loadFromLocalStorage("doctor-token");

    fetch(`${baseUrl}/doctors/medical-records/`, {
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
        console.log(data, "-----");
        setPatient(data);
      });
  }, []);

  const onSubmit = (data) => {
    if (!data.hasOwnProperty("file_url")) {
      alert("Please upload the paper");
      return;
    }

    console.log(data);

    let token = loadFromLocalStorage("doctor-token");

    fetch(`${baseUrl}/doctors/medical-records/`, {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return res.text();
      })
      .then((data) => {
        if (data == null) return;
        alert("Papers sent to the patient successfully");
      });
  };

  return (
    <div className="bg-transparent  w-full h-screen overflow-y-scroll flex items-center justify-center">
      <form
        className="bg-white p-6 rounded shadow-2xl w-full max-w-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="files"
          >
            Files
          </label>
          <input
            className="block w-full p-4 text-md font-semibold bg-white text-gray-900 border-2 border-[#7EABFE] rounded-lg cursor-pointer bg-transparent focus:outline-none"
            onChange={handleImageChange}
            // {...register("file")}
            type="file"
            name="files"
            id="files"
            accept="image/*"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="patient"
          >
            Select Patient
          </label>
          <select
            className="block w-full  text-sm p-4 text-gray-900 border-2 border-[#7EABFE] rounded-lg cursor-pointer bg-transparent  focus:outline-none space-y-3 "
            {...register("patient")}
          >
            {patient.map((item, index) => (
              <option
                className="p-3 font-bold space-x-3"
                value={item?.id}
                key={item?.id}
              >
                {item?.name}
              </option>
            ))}
          </select>
        </div>

        <input
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Medical_Records;
