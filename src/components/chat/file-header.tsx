import React from "react";
import { CloseIcon } from "../../../public/icon";
import { useDispatch } from "react-redux";
import { clearFilesSet } from "@/store/features/chat-slice";

export default function FileHeader() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearFilesSet());
  };

  return (
    <div className="w-full flex items-center justify-between">
      {/* Close icon */}
      <div className="cursor-pointer" onClick={handleClick}>
        <CloseIcon className="dark:fill-dark_svg_1" />
      </div>
    </div>
  );
}
