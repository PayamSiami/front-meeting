import CloseIcon from "@/assets/icon/Close";
import EmojiIcon from "@/assets/icon/Emoji";
import EmojiPicker from "emoji-picker-react";
import React, { useEffect, useState } from "react";

export default function Emoji({
  textRef,
  message,
  setMessage,
  open,
  setOpen,
  setShowAttachment,
}: any) {
  const [currentPosition, setCurrentPosition] = useState();

  const handleClick = () => {
    setShowAttachment(false);
    setOpen(!open);
  };

  useEffect(() => {
    textRef.current.selectionEnd = currentPosition;
  }, [currentPosition, textRef]);

  const handleEmoji = (emojiData: any, e: any) => {
    const { emoji } = emojiData;
    const ref = textRef.current;
    ref.focus();
    const start = message.substring(0, ref.selectionStart);
    const end = message.substring(ref.selectionStart);
    const newTest = start + emoji + end;
    setMessage(newTest);
    setCurrentPosition(start.length + emoji.length);
  };

  return (
    <li className="w-full">
      {open ? (
        <button className="btn" type="button" onClick={handleClick}>
          <CloseIcon className={"fill-dark_svg_1"} />
        </button>
      ) : (
        <button className="btn" type="button" onClick={handleClick}>
          <EmojiIcon className={"fill-dark_svg_1"} />
        </button>
      )}
      {/* Emoji */}
      {open ? (
        <div className="openEmojiAnimation absolute bottom-[60px] left-[-0.5px] w-full">
          <EmojiPicker theme="dark" onEmojiClick={handleEmoji} />
        </div>
      ) : null}
    </li>
  );
}
