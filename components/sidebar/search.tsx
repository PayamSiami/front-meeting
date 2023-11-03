import FilterIcon from "@/assets/icon/FilterIcon";
import ReturnIcon from "@/assets/icon/Return";
import SearchIcon from "@/assets/icon/Search";
import { getUser } from "@/store/features/userSlice";
import axios from "axios";
import { error } from "console";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Search({ searchLength, setSearchResult }: any) {
  const { token } = useSelector(getUser);
  const [show, setShow] = useState(false);

  const handleSearch = async (e: any) => {
    if (e.target.value && e.key === "Enter") {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user?search?=${e.target.value}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setSearchResult(data);
      } catch (error: any) {
        console.log(error.response.data.error.message);
      }
    } else {
      setSearchResult([]);
    }
  };

  return (
    <div className="h-[49px] py-1.5">
      <div className="px-[10px]">
        <div className="flex items-center gap-x-2">
          <div className="w-full flex bg-dark_bg_2 rounded-lg pl-2">
            {show || searchLength > 0 ? (
              <span className="w-8 flex items-center justify-center rotateAnimation">
                <ReturnIcon className="fill-green-500 w-5" />
              </span>
            ) : (
              <span className="w-8 flex items-center justify-center">
                <SearchIcon className="fill-dark_svg_2 w-5" />
              </span>
            )}
            <input
              type="text"
              placeholder="Search or start a new chat"
              className="input"
              onFocus={() => setShow(true)}
              onBlur={() => searchLength === 0 && setShow(false)}
              onKeyDown={handleSearch}
            />
          </div>
          <button className="btn">
            <FilterIcon className="fill-dark_svg_2" />
          </button>
        </div>
      </div>
    </div>
  );
}
