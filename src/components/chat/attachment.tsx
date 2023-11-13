import React from "react";
import Menu from "./menu";
import { AttachmentIcon } from "../../../public/icon";

export default function Attachment({ open, setOpen, setShowPicker }: any) {
  return (
    <li className="relative">
      <button
        className="btn"
        type="button"
        onClick={() => {
          setOpen(!open);
          setShowPicker(false);
        }}
      >
        <AttachmentIcon className="fill-dark_svg_1" />
      </button>
      {/* Menu */}
      {open ? <Menu /> : null}
    </li>
  );
}
