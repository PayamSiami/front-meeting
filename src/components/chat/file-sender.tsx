import { getFiles } from "@/store/features/chat-slice";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

export default function FileSender() {
  const files = useSelector(getFiles);

  return (
    <div className="w-[97%] items-center justify-between mt-2 border-t dark:border-x-dark_border_2">
      {/* Empty */}
      <span></span>
      {/* List files */}
      <div className="flex gap-x-2">
        {files.map((file: any, i: string) => (
          <div
            key={i}
            className={`w-14 h-14 border dark:border-white mt-2 rounded-md overflow-hidden cursor-pointer`}
          >
            {file.type === "IMAGE" ? (
              <Image
                src={file.fileData}
                alt=""
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={file.fileData}
                alt=""
                className="w-8 h-10 mt-1.5 ml-2.5"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
