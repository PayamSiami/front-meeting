"use client";

import Chat from "@/components/chat/chat";
import ChatContainer from "@/components/chat/chat-container";
import Sidebar from "@/components/sidebar/sidebar";
import {
  getActiveConversation,
  getConversations,
  setUpdateMessages,
} from "@/store/features/chat-slice";
import { getUser } from "@/store/features/user-slice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";

const socket = io(process.env.NEXT_PUBLIC_API_ENDPOINT?.split("/api/v1")[0]);

export default function Home() {
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { token } = useSelector(getUser);
  const user = useSelector(getUser);
  const router = useRouter();
  const dispatch: any = useDispatch();
  const activeConversation = useSelector(getActiveConversation);

  // get conversations
  useEffect(() => {
    if (user?.token) {
      dispatch(getConversations(user?.token));
    }
  }, [user]);

  useEffect(() => {
    socket.emit("join", user?._id);
    socket.on("get_online_users", (users) => {
      setOnlineUsers(users);
    });
    socket.on("received_message", (message) => {
      dispatch(setUpdateMessages(message));
    });
    return () => {
      socket.disconnect();
    };
  }, []);


  return (
    <div className="h-screen bg-dark_bg_1 flex items-center justify-center overflow-hidden">
      {/* Container */}
      <div className="container h-screen flex py[19px]">
        {/* Sidebar */}
        <Sidebar socket={socket} />
        {activeConversation ? <ChatContainer socket={socket} /> : <Chat />}
      </div>
    </div>
  );
}
