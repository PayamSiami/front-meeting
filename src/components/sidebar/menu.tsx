import { logout } from "@/store/features/user-slice";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

export default function Menu() {
  const router = useRouter();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  return (
    <div className="absolute right-1 z-50 bg-dark_bg_2 text-dark_text_1 shadow-sm w-52">
      <ul>
        <li className="py-3 pl-5 cursor-pointer bg-dark_bg_3">
          <span>New group</span>
        </li>
        <li className="py-3 pl-5 cursor-pointer bg-dark_bg_3">
          <span>New community</span>
        </li>
        <li className="py-3 pl-5 cursor-pointer bg-dark_bg_3">
          <span>Started messages</span>
        </li>
        <li className="py-3 pl-5 cursor-pointer bg-dark_bg_3">
          <span>Settings</span>
        </li>
        <li
          onClick={handleLogout}
          className="py-3 pl-5 cursor-pointer bg-dark_bg_3"
        >
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
}
