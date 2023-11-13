import RegisterForm from "@/components/auth/registerForm";
import React from "react";

export default function Register() {
  return (
    <div className="min-h-screen bg-dark_bg_1 flex items-center justify-center py-[19px] overflow-hidden">
      {/* Container */}
      <div className="flex w-[1600px] mx-auto h-full">
        <RegisterForm />
      </div>
    </div>
  );
}
