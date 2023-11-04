import { getMessages } from "@/store/features/chat-slice";
import React from "react";
import { useSelector } from "react-redux";
import Message from "./message";
import { getUser } from "@/store/features/userSlice";

export default function ChatMessage() {
  const messages = useSelector(getMessages);
  const user = useSelector(getUser);

  return (
    <div
      className="mb-[60px] 
    bg-[url('https://cdn.svgator.com/images/2022/06/svg-background-geometric-shapes.svg')]
    bg-cover bg-no-repeat"
    >
      {/* Container */}
      <div className="scrollbar overflow_scrollbar overflow-auto py-2 px-[5%]">
        {/* Messages */}
        {messages &&
          messages?.map((message: any) => (
            <Message
              message={message}
              me={user._id === message?.sender?._id}
              key={message._id}
            />
          ))}
      </div>
    </div>
  );
}
