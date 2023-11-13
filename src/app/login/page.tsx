
import LoginForm from "@/components/auth/loginForm";
import React from "react";

export default function Login() {
  return (
    <div className="h-screen bg-dark_bg_1 flex items-center justify-center py-[19px] overflow-hidden">
      {/* Container */}
      <div className="flex w-[1600px] mx-auto h-full">
        <LoginForm />
      </div>
    </div>
  );
}