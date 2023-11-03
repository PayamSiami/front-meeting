"use client";

import Sidebar from "@/components/sidebar/sidebar";
import { getConversations } from "@/store/features/chat-slice";
import { getUser } from "@/store/features/userSlice";
import { AppDispatch } from "@/store/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const { token } = useSelector(getUser);
  const router = useRouter();
  const dispatch: any = useDispatch();

  // get conversations
  useEffect(() => {
    if (token) {
      dispatch(getConversations(token));
    }
  }, [token]);

  return (
    <div className="min-h-screen bg-dark_bg_1 flex items-center justify-center py-[19px] overflow-hidden">
      <div className="container min-h-screen flex">
        <Sidebar />
      </div>
    </div>
  );
}
