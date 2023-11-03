import { getConversation } from "@/store/features/chat-slice";
import React from "react";
import { useSelector } from "react-redux";
import Conversation from "./conversation";

export default function Conversations() {
  const conversations = useSelector(getConversation);
  
  return (
    <div className="convos scrollbar">
      <ul>
        {conversations &&
          conversations?.map((con: any) => (
            <Conversation con={con} key={con._id} />
          ))}
      </ul>
    </div>
  );
}
