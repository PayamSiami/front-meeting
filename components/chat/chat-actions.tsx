import React, { useRef, useState } from "react";
import Emoji from "./emoji";
import Attachment from "./attachment";
import Input from "./input";
import SendIcon from "@/assets/icon/Send";
import {
  getActiveConversation,
  sendMessage,
} from "@/store/features/chat-slice";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/store/features/userSlice";
import { CircleLoader } from "react-spinners";

export default function ChatActions() {
  const [message, setMessage] = useState("");
  const dispatch: any = useDispatch();
  const activeConversation = useSelector(getActiveConversation);
  const textRef = useRef();
  const { token } = useSelector(getUser);
  const [showPicker, setShowPicker] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    const values = {
      con_id: activeConversation._id,
      files: [],
      token,
      message: message,
    };
    await dispatch(sendMessage(values));
    console.log("data");
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
            showPicker={showPicker}
            setShowPicker={setShowPicker}
          />
          <Attachment />
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
