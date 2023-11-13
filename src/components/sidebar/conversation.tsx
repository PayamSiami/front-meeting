
import { getActiveConversation, openCreateConversation } from "@/store/features/chat-slice";
import { getUser } from "@/store/features/user-slice";
import {
  getConversationId,
  getConversationName,
  getConversationPicture,
} from "@/utils/chat";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Conversation({ socket, con }: any) {
  const dispatch: any = useDispatch();
  const activeConversation = useSelector(getActiveConversation);
  const user = useSelector(getUser);
  const openConversation = async () => {
    const values = {
      receiver_id: getConversationId(user, con.users),
      token: user.token,
    };
    await dispatch(openCreateConversation(values));
    socket?.emit("join_conversation", activeConversation._id);
  };

  return (
    <li
      onClick={openConversation}
      className={`list-none h-[72px] w-full bg-dark_bg_1 hover:${
        con?._id === activeConversation?._id ? "" : "bg-dark_bg_2"
      } cursor-pointer text-dark_text_1 px[10px] ${
        con?._id === activeConversation?._id ? "bg-dark_hover_1" : ""
      }`}
    >
      {/* Container */}
      <div className="relative w-full flex items-center justify-between py[10px]">
        {/* Left */}
        <div className="flex items-center gap-x-3">
          <div className="relative min-w-[50px] max-w-[50px] h-[50px] rounded-full overflow-hidden">
            <Image
              src={getConversationPicture(user, con?.users)}
              alt={"picture"}
              width={50}
              height={50}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full flex flex-col">
            <h1 className="font-bold flex items-center gap-x-2 capitalize">
              {getConversationName(user, con?.users)}
            </h1>
            <div>
              <div className="flex items-center gap-x-1 text-dark_text_2">
                <p>
                  {con?.latestMessage?.message.length > 25
                    ? `${con?.latestMessage?.message.substring(0, 25)}...`
                    : con?.latestMessage?.message}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-col gap-y-4 items-end text-xs">
          <span className="text-dark_text_2">
            {con?.latestMessage?.createdAt ? con?.latestMessage?.createdAt : ""}
          </span>
        </div>
      </div>
      {/* Border */}
      <div className="ml-16 border-b border-b-dark_border_1"></div>
    </li>
  );
}