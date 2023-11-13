
import React from "react";
import { useSelector } from "react-redux";
import Conversation from "./conversation";
import { getActiveConversation, getConversation } from "@/store/features/chat-slice";

export default function Conversations({ socket }: any) {
  const conversations = useSelector(getConversation);
  const activeConversation = useSelector(getActiveConversation);

  return (
    <div className="convos scrollbar">
      <ul>
        {conversations &&
          conversations
            ?.filter(
              (c: { latestMessage: any; _id: any }) =>
                c.latestMessage || c?._id === activeConversation?._id
            )
            .map((con: any) => (
              <Conversation socket={socket} con={con} key={con?._id} />
            ))}
      </ul>
    </div>
  );
}