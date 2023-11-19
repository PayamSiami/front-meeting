import React, { useEffect } from "react";
import ChatHeader from "./chat-header";
import ChatMessages from "./chat-messages";
import { useDispatch, useSelector } from "react-redux";
import ChatActions from "./chat-actions";
import {
  getActiveConversation,
  getConversationMessages,
  getFiles,
} from "@/store/features/chat-slice";
import { getUser } from "@/store/features/user-slice";
import { getConversationId } from "@/utils/chat";
import FilePreview from "./file-preview";

export default function ChatContainer({ onlineUsers }: any) {
  const dispatch: any = useDispatch();
  const activeConversation = useSelector(getActiveConversation);
  const user = useSelector(getUser);
  const token = user.token;
  const files: [] = useSelector(getFiles);

  console.log(files.length);

  useEffect(() => {
    const values = {
      token,
      con_id: activeConversation?._id,
    };
    if (activeConversation?._id) {
      dispatch(getConversationMessages(values));
    }
  }, [activeConversation]);

  return (
    <div className="relative w-full h-full border-l border-l-dark_border_2 select-none overflow-hidden">
      {/* Container */}
      <div>
        {/* Chat header */}
        <ChatHeader
          online={onlineUsers.find((u: { userId: any }) =>
            u.userId === getConversationId(user, activeConversation.users)
              ? true
              : false
          )}
        />
        {files && files.length > 0 ? (
          <FilePreview />
        ) : (
          <>
            {/* Chat message */}
            <ChatMessages />
            {/* Chat Actions */}
            <ChatActions />
          </>
        )}
      </div>
    </div>
  );
}
