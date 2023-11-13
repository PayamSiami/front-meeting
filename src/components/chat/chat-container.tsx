import React, { useEffect } from "react";
import ChatHeader from "./chat-header";
import ChatMessages from "./chat-messages";
import { useDispatch, useSelector } from "react-redux";
import ChatActions from "./chat-actions";
import { getActiveConversation, getConversationMessages } from "@/store/features/chat-slice";
import { getUser } from "@/store/features/user-slice";

export default function ChatContainer({ socket }: any) {
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
        <ChatMessages />
        {/* Chat Actions */}
        <ChatActions socket={socket} />
      </div>
    </div>
  );
}
