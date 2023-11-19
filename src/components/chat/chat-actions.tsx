import React, { useRef, useState } from "react";
import Emoji from "./emoji";
import Attachment from "./attachment";
import Input from "./input";

import { useDispatch, useSelector } from "react-redux";

import { CircleLoader } from "react-spinners";
import {
  getActiveConversation,
  sendMessage,
} from "@/store/features/chat-slice";
import { getUser } from "@/store/features/user-slice";
import { SendIcon } from "../../../public/icon";
import { useAppContext } from "@/context";
export default function ChatActions() {
  const socket = useAppContext();

  const [message, setMessage] = useState("");
  const dispatch: any = useDispatch();
  const activeConversation = useSelector(getActiveConversation);
  const textRef = useRef();
  const { token } = useSelector(getUser);
  const [showPicker, setShowPicker] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAttachment, setShowAttachment] = useState(false);

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    const values = {
      con_id: activeConversation._id,
      files: [],
      token,
      message: message,
    };
    let newMsg = await dispatch(sendMessage(values));
    socket.emit("new_message", newMsg.payload);
    setMessage("");
    setShowPicker(false);
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-dark_bg_2 h-[60px] w-full flex items-center absolute bottom-0 py-2 px-4 select-none"
    >
      {/* Container */}
      <div className="w-full flex items-center gap-x-2">
        {/* Emoji */}
        <ul className="flex gap-x-2">
          <Emoji
            textRef={textRef}
            message={message}
            setMessage={setMessage}
            open={showPicker}
            setOpen={setShowPicker}
            setShowAttachment={setShowAttachment}
          />
          <Attachment
            open={showAttachment}
            setOpen={setShowAttachment}
            setShowPicker={setShowPicker}
          />
        </ul>
        {/* Input */}
        <Input message={message} setMessage={setMessage} textRef={textRef} />
        {loading ? (
          <CircleLoader color="#e9edef" size={25} />
        ) : (
          <button type="submit" className="btn">
            <SendIcon className="fill-dark_svg_1" />
          </button>
        )}
      </div>
    </form>
  );
}
