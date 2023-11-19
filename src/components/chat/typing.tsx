import React from "react";
import { StoryIcon } from "../../../public/icon";
import { BeatLoader } from "react-spinners";

export default function Typing() {
  return (
    <div className="w-full flex mt-2 space-x-3 max-w-xs">
      {/* Messages container */}
      <div>
        <div className="relative h-full text-dark_text_1 p-2 rounded-lg bg-dark_bg_2">
          {/* Typing Animation */}
          <BeatLoader color="#fff" size={10} />
        </div>
      </div>
    </div>
  );
}
