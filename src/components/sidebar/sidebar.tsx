import React, { useState } from "react";
import Header from "./header";
import Notification from "./notification";
import Search from "./search";
import Conversations from "./conversations";
import SearchResult from "./search-result";

export default function Sidebar({ onlineUsers }: any) {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div className="flex0030 max-w-[30%] h-full select-none">
      <Header />
      <Notification />
      <Search
        searchLength={searchResults?.length}
        setSearchResult={setSearchResults}
      />
      {searchResults.length > 0 ? (
        <SearchResult
          searchResults={searchResults}
          setSearchResults={setSearchResults}
        />
      ) : (
        <Conversations onlineUsers={onlineUsers} />
      )}
    </div>
  );
}
