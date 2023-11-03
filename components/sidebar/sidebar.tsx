import React, { useState } from "react";
import Header from "./header";
import Notification from "./notification";
import Search from "./search";
import Conversation from "./conversations";

export default function Sidebar() {
  const [searchResult, setSearchResult] = useState([]);
  return (
    <div className="w-[40%] h-full select-none">
      <Header />
      <Notification />
      <Search searchLength={searchResult} />
      <Conversation />
    </div>
  );
}
