"use client";

import Chat from "@/components/chat/chat";
import ChatContainer from "@/components/chat/chat-container";
import Sidebar from "@/components/sidebar/sidebar";
import {
  getActiveConversation,
  getConversations,
} from "@/store/features/chat-slice";
import { getUser } from "@/store/features/user-slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const activeConversation = useSelector(getActiveConversation);
  const user = useSelector(getUser);

  const dispatch: any = useDispatch();
  // get conversations
  useEffect(() => {
    if (user?.token) {
      dispatch(getConversations(user?.token));
    }
  }, [dispatch, user?.token]);

  return (
    <div className="h-screen bg-dark_bg_1 flex items-center justify-center overflow-hidden">
      {/* Container */}
      <div className="container h-screen flex py[19px]">
        {/* Sidebar */}
        <Sidebar />
        {activeConversation ? <ChatContainer /> : <Chat />}
      </div>
    </div>
  );
}
