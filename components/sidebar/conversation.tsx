import Image from "next/image";
import React from "react";

export default function Conversation({ con }: any) {
  console.log(con);

  return (
    <li className="list-none h-[72px] w-full bg-dark_bg_1 hover:bg-dark_bg_2 cursor-pointer text-dark_text_1 px[10px]">
      <div className="relative w-full flex items-center justify-between py[10px]">
        <div className="flex items-center gap-x-3">
          <div className="relative min-w-[50px] max-w-[50px] h-[50px] rounded-full overflow-hidden">
            <Image
              src={con.picture}
              alt={con.name}
              width={50}
              height={50}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full flex flex-col">
            <h1 className="font-bold flex items-center gap-x-2">{con?.name}</h1>
            <div>
              <div className="flex items-center gap-x-1 text-dark_text_2">
                <p>{con?.latestMessage?.message}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 items-end text-xs">
          <span className="text-dark_text_2">
            {con?.latestMessage?.createdAt}
          </span>
        </div>
      </div>
      <div className="ml-16 border-b border-b-dark_border_1"></div>
    </li>
  );
}
