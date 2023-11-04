"use client";

import Chat from "@/components/chat/chat";
import ChatContainer from "@/components/chat/chat-container";
import Sidebar from "@/components/sidebar/sidebar";
import {
  getActiveConversation,
  getConversations,
} from "@/store/features/chat-slice";
import { getUser } from "@/store/features/userSlice";
import { AppDispatch } from "@/store/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const { token } = useSelector(getUser);
  const router = useRouter();
  const dispatch: any = useDispatch();
  const activeConversation = useSelector(getActiveConversation);

  // get conversations
  useEffect(() => {
    if (token) {
      dispatch(getConversations(token));
    }
  }, [token]);

  return (
    <div className="h-screen bg-dark_bg_1 flex items-center justify-center py-[19px] overflow-hidden">
      {/* Container */}
      <div className="container h-screen flex py[19px]">
        {/* Sidebar */}
        <Sidebar />
        {activeConversation ? <ChatContainer /> : <Chat />}
      </div>
    </div>
  );
}
