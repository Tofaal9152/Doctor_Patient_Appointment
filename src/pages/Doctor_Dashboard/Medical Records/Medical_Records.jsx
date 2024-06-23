import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Medical_Records = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

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
            {...register("file")}
            type="file"
            name="files"
            id="files"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="gender"
          >
            Select
          </label>
          <select
            className="block w-full  text-sm p-4 text-gray-900 border-2 border-[#7EABFE] rounded-lg cursor-pointer bg-transparent  focus:outline-none space-y-3 "
            {...register("gender")}
          >
            <option className="p-3 font-bold space-x-3" value="female">
              Cancel
            </option>
            <option className="p-3 font-bold space-x-3" value="male">
              Arthyties
            </option>
            <option className="p-3 font-bold space-x-3" value="other">
              Coug
            </option>
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
