import { getActiveConversation } from "@/store/features/chat-slice";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { DotsIcon, SearchIcon } from "../../../public/icon";

export default function ChatHeader({ online }: any) {
  const { name, picture } = useSelector(getActiveConversation);
  return (
    <div className="h-[59px] bg-dark_bg_2 flex items-center p16 select-none ">
      {/* Container */}
      <div className="w-full flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-x-4">
          {/* container image */}
          <button className="btn">
            <Image
              src={picture}
              alt={`${name} picture`}
              width={40}
              height={40}
              className="w-full h-full rounded-full object-cover"
            />
          </button>
          {/* conversation name and online status */}
          <div className="flex flex-col">
            <h1 className="text-white text-md font-bold capitalize">
              {name?.split(" ")[0]}
            </h1>
            <span className="text-xs text-dark_svg_2">
              {online ? "online" : ""}
            </span>
          </div>
        </div>
        {/* Right  */}
        <ul className="flex items-center gap-x-2.5">
          <li>
            <button className="btn">
              <SearchIcon className={"fill-dark_svg_1"} />
            </button>
          </li>
          <li>
            <button className="btn">
              <DotsIcon className={"fill-dark_svg_1"} />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
