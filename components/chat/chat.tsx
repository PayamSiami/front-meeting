import Logo from "@/assets/icon/Logo";
import React from "react";

export default function Chat() {
  return (
    <div className="w-full h-full bg-dark_bg_4 select-none border-l border-l-dark_border_2 border-b-[6px] border-b-green-600">
      {/* Container */}
      <div className="-mt-1.5 w-full h-full flex flex-col gap-y-8 items-center justify-center">
        <span>
          <Logo />
        </span>
        {/* Infos */}
        <div className="mt-1 text-center space-y-[12px]">
          <h1 className="text-[32px] text-dark_text_4 font-extralight">
            chat app
          </h1>
          <p className="text-sm text-dark_text_3">
            send and receive messages and keep your phone online
            <br />
            use app on to 4 linked devices and 1 phone as same time
          </p>
        </div>
      </div>
    </div>
  );
}
