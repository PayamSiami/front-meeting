import { useAppContext } from "@/context";
import { getActiveConversation } from "@/store/features/chat-slice";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Input({ message, setMessage, textRef }: any) {
  const [typing, typingSet] = useState(false);
  const socket = useAppContext();

  const activeConversation = useSelector(getActiveConversation);

  const handleChange = (e: { target: { value: any } }) => {
    setMessage(e.target.value);
    if (!typing) {
      typingSet(true);
      socket.emit("typing", activeConversation._id);
    }
    let lastTypingTime = new Date().getTime();
    let timer = 2000;
    setTimeout(() => {
      let timeNow = new Date().getTime();
      let timeDiff = timeNow - lastTypingTime;
      if (timeDiff >= timer && typing) {
        socket.emit("stop_typing", activeConversation._id);
        typingSet(false);
      }
    }, timer);
  };

  return (
    <div className="w-full">
      <input
        onChange={handleChange}
        value={message}
        type="text"
        ref={textRef}
        placeholder="Type a message"
        className="bg-dark_hover_1 text-dark_text_1 outline-none h-[45px] w-full flex-1 rounded-lg pl-4"
      />
    </div>
  );
}
