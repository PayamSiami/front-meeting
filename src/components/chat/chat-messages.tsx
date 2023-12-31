import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Message from "./message";
import {
  getActiveConversation,
  getMessages,
  getTyping,
} from "@/store/features/chat-slice";
import { getUser } from "@/store/features/user-slice";
import Typing from "./typing";

export default function ChatMessages() {
  const messages = useSelector(getMessages);
  const user = useSelector(getUser);
  const endRef: any = useRef(null);
  const typing = useSelector(getTyping);
  const activeConversation = useSelector(getActiveConversation);

  const scrollToBottom = () => {
    endRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
        <p>{typing === activeConversation._id ? <Typing /> : null}</p>
        <div ref={endRef} className="mt-2" />
      </div>
    </div>
  );
}
