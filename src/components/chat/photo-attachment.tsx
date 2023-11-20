import React, { useRef } from "react";
import { PhotoIcon } from "../../../public/icon";
import { useDispatch } from "react-redux";
import { filesSet } from "@/store/features/chat-slice";

function PhotoAttachment() {
  const inputRef: any = useRef(null);
  const dispatch = useDispatch();
  const imageHandler = (e: any) => {
    let files = Array.from(e.target.files);
    files.forEach((file: any) => {
      if (
        file.type !== "image/png" &&
        file.type !== "image/jpeg" &&
        file.type !== "image/gif" &&
        file.type !== "image/webp" &&
        file.type !== "image/mp4" &&
        file.type !== "image/mpeg" &&
        file.type !== "image/webm"
      ) {
        files = files.filter((item: any) => item.name !== file.name);
        return;
      } else if (file.size > 1024 * 1024 * 5) {
        files = files.filter((item: any) => item.name !== file.name);
        return;
      } else {
        const reader: any = new FileReader();
        reader.onload = (e: { target: any }) => {
          dispatch(
            filesSet({
              file: file,
              fileData: e.target.result,
              type: file.type.split("/")[0],
            })
          );
        };

        reader.readAsDataURL(file);
      }
    });
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  return (
    <li>
      <button
        onClick={handleClick}
        type="button"
        className="bg-[#bf59cf] rounded-full"
      >
        <PhotoIcon />
      </button>

      <input
        type="file"
        hidden
        multiple
        ref={inputRef}
        accept="image/png;image/jpeg;image/gif;image/webp"
        onChange={imageHandler}
      />
    </li>
  );
}

export default PhotoAttachment;
