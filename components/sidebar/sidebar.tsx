import React, { useState } from "react";
import Header from "./header";
import Notification from "./notification";
import Search from "./search";
import Conversation from "./conversations";
import SearchResult from "./search-result";

export default function Sidebar() {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div className="w-[40%] h-full select-none">
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
        <Conversation />
      )}
    </div>
  );
}
