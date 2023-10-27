"use client";

import React from "react";
import { useForm } from "react-hook-form";
import AuthInput from "../authInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "@/utils/validation";
import { useSelector } from "react-redux";
import { getLoadingAuth } from "@/store/features/userSlice";
import PulseLoader from "react-spinners/PulseLoader";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signUpSchema) });
  const onSubmit = (data: any) => console.log(data);

  const loadingAuth = useSelector(getLoadingAuth);

  return (
    <div className="h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Container */}
      <div className="max-w-md space-y-8 p-10 bg-dark_bg_2 rounded-xl">
        {/* Heading */}
        <div className="text-center text-dark_text_1">
          <h2 className="mt-6 text-3xl font-bold">welcome</h2>
          <p className="mt-2 text-sm">Sign up</p>
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
          <AuthInput
            name="name"
            type="text"
            placeholder="Full Name"
            register={register}
            error={errors?.name?.message}
          />
          <AuthInput
            name="email"
            type="text"
            placeholder="Email address"
            register={register}
            error={errors?.email?.message}
          />
          <AuthInput
            name="status"
            type="text"
            placeholder="Status"
            register={register}
            error={errors?.status?.message}
          />
          <AuthInput
            name="password"
            type="text"
            placeholder="Password"
            register={register}
            error={errors?.password?.message}
          />
          <button
            className="w-full flex justify-center bg-green_1 text-gray-100 p-4 rounded-full tracking-wide font-semibold 
          focus:outline-none hover:bg-green_2 shadow-lg cursor-pointer transition ease-in duration-300"
            type="submit"
          >
            {loadingAuth === "loading" ? (
              <PulseLoader size={16} color="#fff" />
            ) : (
              "sign up"
            )}
            submit
          </button>
        </form>
      </div>
    </div>
  );
}
