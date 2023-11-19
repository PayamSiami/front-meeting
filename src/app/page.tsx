"use client";

import Chat from "@/components/chat/chat";
import ChatContainer from "@/components/chat/chat-container";
import Sidebar from "@/components/sidebar/sidebar";
import { useAppContext } from "@/context";
import {
  getActiveConversation,
  getConversations,
  setUpdateConversationAndMessages,
  typingSet,
} from "@/store/features/chat-slice";
import { getUser } from "@/store/features/user-slice";
import { JSX, SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const activeConversation = useSelector(getActiveConversation);
  const user = useSelector(getUser);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useAppContext();

  const dispatch: any = useDispatch();
  // get conversations
  useEffect(() => {
    if (user?.token) {
      dispatch(getConversations(user?.token));
    }
  }, [user]);

  useEffect(() => {
    socket.emit("join", user?._id);
    socket.on("get_online_users", (users: SetStateAction<never[]>) => {
      setOnlineUsers(users);
    });
    socket.on("received_message", (message: any) => {
      dispatch(setUpdateConversationAndMessages(message));
    });
    socket.on("typing", (conversation: any) => {
      dispatch(typingSet(conversation));
    });
    socket.on("stop_typing", () => {
      dispatch(typingSet(null));
    });
    // return () => {
    //   socket.disconnect();
    // };
  }, []);

  return (
    <div className="h-screen bg-dark_bg_1 flex items-center justify-center overflow-hidden">
      {/* Container */}
      <div className="container h-screen flex py[19px]">
        {/* Sidebar */}
        <Sidebar onlineUsers={onlineUsers} />
        {activeConversation ? (
          <ChatContainer onlineUsers={onlineUsers} />
        ) : (
          <Chat />
        )}
      </div>
    </div>
  );
}
