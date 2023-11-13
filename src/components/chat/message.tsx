
import React from "react";
import { StoryIcon } from "../../../public/icon";

export default function Message({ message, me }: any) {
  return (
    <div
      className={`w-full flex mt-2 space-x-3 max-w-xs ${
        me ? "ml-auto justify-end" : ""
      }`}
    >
      {/* Messages container */}
      <div>
        <div
          className={`relative h-full text-dark_text_1 p-2 rounded-lg ${
            me ? "bg-green-700" : "bg-dark_bg_2"
          }`}
        >
          {/* Message */}
          <p className={"float-left h-full text-sm pb-5"}>{message.message}</p>
          {/* Message data */}
          <span className="absolute right-1.5 bottom-1.5 text-xs text-dark_text_5 leading-none">
            {message.createdAt}
          </span>
          {/* Triangle */}
          {!me ? (
            <span>
              <StoryIcon
                className={
                  "fill-dark_bg_2 rotate-[60deg] absolute top-[5px] left-1.5"
                }
              />
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}
