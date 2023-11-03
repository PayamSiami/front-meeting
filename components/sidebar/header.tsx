import ChatIcon from "@/assets/icon/Chat";
import CommunityIcon from "@/assets/icon/Community";
import DotsIcon from "@/assets/icon/Dots";
import StoryIcon from "@/assets/icon/Story";
import { getUser } from "@/store/features/userSlice";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Header() {
  const user = useSelector(getUser);
  return (
    <div className="h-[50px] bg-dark_bg_2 flex items-center p16">
      <div className="w-full flex items-center justify-between">
        <button className="btn">
          <Image
            src={""}
            // src={user.picture}
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
          <li>
            <button className="btn">
              <DotsIcon className="fill-dark_svg_1" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
