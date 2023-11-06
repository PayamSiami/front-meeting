import {
  CameraIcon,
  ContactIcon,
  DocumentIcon,
  PhotoIcon,
  PollIcon,
  StickerIcon,
} from "@/assets/icon";
import React from "react";

export default function Menu() {
  return (
    <div className="absolute bottom-14 openEmojiAnimation">
      <li>
        <button type="button" className="rounded-full">
          <PollIcon />
        </button>
      </li>
      <li>
        <button type="button" className="bg-[#0eabf4] rounded-full">
          <ContactIcon />
        </button>
      </li>
      <li>
        <button type="button" className="bg-[#5f66cd] rounded-full">
          <DocumentIcon />
        </button>
      </li>
      <li>
        <button type="button" className="bg-[#d3396d] rounded-full">
          <CameraIcon />
        </button>
      </li>
      <li>
        <button type="button" className="rounded-full">
          <StickerIcon />
        </button>
      </li>
      <li>
        <button type="button" className="bg-[#bf59cf] rounded-full">
          <PhotoIcon />
        </button>
      </li>
    </div>
  );
}
