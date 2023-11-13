import React from "react";

export default function Input({ message, setMessage, textRef }: any) {
  const handleChange = (e: { target: { value: any } }) => {
    setMessage(e.target.value);
  };

  return (
    <div className="w-full">
      <input
        onChange={handleChange}
        value={message}
        type="text"
        ref={textRef}
        placeholder="Type a message"
        className="bg-dark_hover_1 text-dark_text_1 outline-none h-[45px] w-full flex-1 rounded-lg pl-4"
      />
    </div>
  );
}
