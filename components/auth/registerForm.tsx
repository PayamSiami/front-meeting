"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AuthInput from "./authInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "@/utils/validation";
import { useDispatch, useSelector } from "react-redux";
import { getUser, registerUser } from "@/store/features/userSlice";
import PulseLoader from "react-spinners/PulseLoader";
import Link from "next/link";
import Picture from "./picture";

export default function RegisterForm() {
  const dispatch: any = useDispatch();
  const [picture, setPicture] = useState();
  const [readablePicture, setReadablePicture]: any = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signUpSchema) });
  const onSubmit = async (data: any) => {
    let res = await dispatch(registerUser({ ...data, picture: "" }));
    if (res.payload.user) {
      console.log("done");
    }
  };

  const { error, status } = useSelector(getUser);

  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Container */}
      <div className="w-full max-w-md space-y-8 p-10 bg-dark_bg_2 rounded-xl">
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
            placeholder="Status (optional)"
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
          <Picture
            readablePicture={readablePicture}
            setPicture={setPicture}
            setReadablePicture={setReadablePicture}
          />
          {error ? <p className="text-red-400">{error}</p> : null}
          <button
            className="w-full flex justify-center bg-green_1 text-gray-100 p-4 rounded-full tracking-wide font-semibold 
          focus:outline-none hover:bg-green_2 shadow-lg cursor-pointer transition ease-in duration-300"
            type="submit"
          >
            {status === "loading" ? (
              <PulseLoader size={16} color="#fff" />
            ) : (
              "sign up"
            )}
          </button>
          <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-dark_text_1">
            <span>have an account ?</span>
            <Link
              href="/login"
              className="hover:underline cursor-pointer transition ease-in duration-300"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
