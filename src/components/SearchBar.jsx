import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
    const [visible,setVisible]= useState(false)

    const location  = useLocation()


    useEffect(()=>{
     if(location.pathname.includes('/collection') ){

      setVisible(true)

     }else{
      setVisible(false)
     }
    },[location])

   

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 py-4 flex justify-center">
      <div className="relative w-3/4 sm:w-1/2 flex items-center gap-3">

        {/* Search Box */}
        <div className="relative flex-1">
          <img
            src={assets.search_icon}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 opacity-60"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search"
            className="w-full pl-9 pr-9 py-2 rounded-full border border-gray-400 outline-none text-sm bg-white"
          />
        </div>

        {/* Cross Icon */}
        <img
          onClick={() => setShowSearch(false)}
          src={assets.cross_icon}
          className="w-4 cursor-pointer opacity-70 hover:opacity-100"
        />
      </div>
    </div>
  ) : null;
};

export default SearchBar;
