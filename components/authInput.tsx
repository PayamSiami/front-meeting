import React from "react";

export default function AuthInput({
  name,
  type,
  placeholder,
  register,
  error,
}: any) {
  return (
    <div className="mt-8 content-center text-dark_text_1 space-y-1">
      <label htmlFor={name} className="text-sm font-bold tracking-wide">
        {placeholder}
      </label>
      <input
        className="w-full dark bg-dark_bg_3 text-base py-2 px-4 rounded-lg outline-none"
        name={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
      {error && <p className="text-red-40">{error}</p>}
    </div>
  );
}
