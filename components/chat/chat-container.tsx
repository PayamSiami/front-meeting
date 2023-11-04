import React, { useEffect } from "react";
import ChatHeader from "./chat-header";
import ChatMessage from "./chat-message";
import { useDispatch, useSelector } from "react-redux";
import {
  getActiveConversation,
  getConversationMessages,
  getMessages,
} from "@/store/features/chat-slice";
import { getUser } from "@/store/features/userSlice";
import ChatActions from "./chat-actions";

export default function ChatContainer() {
  const dispatch: any = useDispatch();
  const activeConversation = useSelector(getActiveConversation);
  const { token } = useSelector(getUser);

  useEffect(() => {
    const values = {
      token,
      con_id: activeConversation?._id,
    };
    if (activeConversation?._id) {
      dispatch(getConversationMessages(values));
    }
  }, [activeConversation]);

  return (
    <div className="relative w-full h-full border-l border-l-dark_border_2 select-none overflow-hidden">
      {/* Container */}
      <div>
        {/* Chat header */}
        <ChatHeader />
        {/* Chat message */}
        <ChatMessage />
        {/* Chat Actions */}
        <ChatActions />
      </div>
    </div>
  );
}
