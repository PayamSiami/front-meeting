import ChatIcon from "@/assets/icon/Chat";
import CommunityIcon from "@/assets/icon/Community";
import DotsIcon from "@/assets/icon/Dots";
import StoryIcon from "@/assets/icon/Story";
import { getUser } from "@/store/features/userSlice";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";
import Menu from "./menu";

export default function Header() {
  const user = useSelector(getUser);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="h-[50px] bg-dark_bg_2 flex items-center p16">
      <div className="w-full flex items-center justify-between">
        <button className="btn">
          <Image
            src={user.picture}
            alt={user.name}
            width={50}
            height={50}
            className="w-full h-full rounded-full object-cover"
          />
        </button>
        <ul className="flex items-center gap-x-2">
          <li>
            <button className="btn">
              <CommunityIcon className="fill-dark_svg_1" />
            </button>
          </li>
          <li>
            <button className="btn">
              <StoryIcon className="fill-dark_svg_1" />
            </button>
          </li>
          <li>
            <button className="btn">
              <ChatIcon className="fill-dark_svg_1" />
            </button>
          </li>
          <li className="relative" onClick={() => setShowMenu((prev) => !prev)}>
            <button className={`btn ${showMenu ? "bg-dark_hover_1" : ""}`}>
              <DotsIcon className="fill-dark_svg_1" />
            </button>
            {showMenu ? <Menu /> : null}
          </li>
        </ul>
      </div>
    </div>
  );
}
