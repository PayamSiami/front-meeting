import React from "react";
import { useSelector } from "react-redux";
import Conversation from "./conversation";
import {
  getActiveConversation,
  getConversation,
} from "@/store/features/chat-slice";
import { getConversationId } from "@/utils/chat";
import { getUser } from "@/store/features/user-slice";

export default function Conversations({ onlineUsers }: any) {
  const conversations = useSelector(getConversation);
  const activeConversation = useSelector(getActiveConversation);
  const user = useSelector(getUser);

  return (
    <div className="convos scrollbar">
      <ul>
        {conversations &&
          conversations
            ?.filter(
              (c: { latestMessage: any; _id: any }) =>
                c.latestMessage || c?._id === activeConversation?._id
            )
            .map((con: any) => {
              let check = onlineUsers.find(
                (u: { userId: any }) =>
                  u.userId === getConversationId(user, con.users)
              );
              return (
                <Conversation
                  con={con}
                  key={con?._id}
                  online={check ? true : false}
                />
              );
            })}
      </ul>
    </div>
  );
}
