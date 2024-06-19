import React from "react";
import { useForm } from "react-hook-form";

const Patient_Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="interfont bg-red-100">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
       
      </form>
    </div>
  );
};

export default Patient_Registration;
