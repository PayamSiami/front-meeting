"use client";

import React from "react";
import { useForm } from "react-hook-form";
import AuthInput from "./authInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, loginUser } from "@/store/features/user-slice";
import PulseLoader from "react-spinners/PulseLoader";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInSchema } from "@/utils/validation";

export default function LoginForm() {
  const router = useRouter();
  const dispatch: any = useDispatch();
  const { error, status } = useSelector(getAuth);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signInSchema) });

  const onSubmit = async (data: any) => {
    const res = await dispatch(loginUser({ ...data }));
    if (res?.payload?.user) {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Container */}
      <div className="w-full max-w-md space-y-8 p-10 bg-dark_bg_2 rounded-xl">
        {/* Heading */}
        <div className="text-center text-dark_text_1">
          <h2 className="mt-6 text-3xl font-bold">welcome back</h2>
          <p className="mt-2 text-sm">Sign in</p>
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
          <AuthInput
            name="email"
            type="text"
            placeholder="Email address"
            register={register}
            error={errors?.email?.message}
          />
          <AuthInput
            name="password"
            type="text"
            placeholder="Password"
            register={register}
            error={errors?.password?.message}
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
              "sign in"
            )}
          </button>
          <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-dark_text_1">
            <span>you do not have an account?</span>
            <Link
              href="/register"
              className="hover:underline cursor-pointer transition ease-in duration-300"
            >
              Sign un
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}