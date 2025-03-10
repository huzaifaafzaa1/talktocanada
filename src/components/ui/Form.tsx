"use client"

import { useForm } from "react-hook-form";
import Button from "./Button";

const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="font-interTight flex flex-col gap-4 py-6"
    >
      {/* Full Name Input */}
      <input
        {...register("fullName", { required: true })}
        type="text"
        placeholder="Full Name"
        className="w-[280px] h-[40px] px-4 rounded-[50px] border border-grey text-grey"
      />

      {/* Email Input */}
      <input
        {...register("email", { required: true })}
        type="email"
        placeholder="E-mail address"
        className="w-[280px] h-[40px] px-4 rounded-[50px] border border-grey text-grey"
      />

      {/* Submit Button */}
      <Button
        type="submit"
        className="font-Intertight text-lightishBlue bg-white h-[40px] w-[280px] rounded-full"
      >
        Get e-Book for Free
      </Button>
    </form>
  );
};

export default Form;
