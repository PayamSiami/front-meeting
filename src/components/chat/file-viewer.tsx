import { getFiles } from "@/store/features/chat-slice";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

export default function FileViewer() {
  const files = useSelector(getFiles);

  return (
    <div className="w-full max-w-[60%]">
      {/* Container  */}
      <div className="flex justify-center items-center">
        {files[0].type === "IMAGE" ? (
          <Image
            width={100}
            height={100}
            alt="image"
            src={files[0].fileData}
            className="max-w-[80%] object-contain hview"
          />
        ) : (
          <div className="min-w-full flex flex-col items-center justify-center">
            {/* File Icon image */}
            {/* No preview */}
            <h1 className="dark:text-dark_text_2 text-2xl">
              No preview available
            </h1>
            {/* File */}
            <span className="dark:text-dark_text_2">
              {files[0]?.file?.size} kb - {files[0]?.type}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
