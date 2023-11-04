import { openCreateConversation } from "@/store/features/chat-slice";
import { getUser } from "@/store/features/userSlice";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Contact({ contact, setSearchResults }: any) {
  const dispatch: any = useDispatch();

  const user = useSelector(getUser);

  const openConversation = async () => {
    const values = {
      receiver_id: contact._id,
      token: user.token,
    };
    await dispatch(openCreateConversation(values));
    setSearchResults([]);
  };
  return (
    <li
      onClick={openConversation}
      className="list-none h-[72px] hover:bg-dark_bg_2 cursor-pointer text-dark_text_1 px[10px]"
    >
      {/* Container */}
      <div className="flex items-center gap-x-3 py-[10px]"></div>
      {/* Contact infos */}
      <div className="flex items-center gap-x-3">
        <div className="relative min-w-[50px] max-w-[50px] h-[50px] rounded-full overflow-hidden">
          <Image
            src={contact.picture}
            alt={contact.name}
            width={50}
            height={50}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full flex flex-col">
          <h1 className="font-bold flex items-center gap-x-2 capitalize">
            {contact?.name}
          </h1>
          <div>
            <div className="flex items-center gap-x-1 text-dark_text_2">
              <p>{contact?.status}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-16 border-b border-b-dark_border_1"></div>
    </li>
  );
}
