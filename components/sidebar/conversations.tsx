import {
  getActiveConversation,
  getConversation,
} from "@/store/features/chat-slice";
import React from "react";
import { useSelector } from "react-redux";
import Conversation from "./conversation";

export default function Conversations() {
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
            .map((con: any) => <Conversation con={con} key={con?._id} />)}
      </ul>
    </div>
  );
}
