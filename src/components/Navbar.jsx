import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import Home from "../pages/Home";

const Navbar = () => {
  const [visible, SetVisible] = useState(false);
  return (
    <div className="flex items-center justify-between py-5   px-4 font-bold">
     <Link to={'/'}> <img src={assets.logo} alt="logo"></img></Link>

      <ul className=" sm:flex gap-5 text-gray-800 hidden">
        <NavLink to={"/"}>
          <p>HOME</p>
          <hr className="w-2/8 border-none h-[2px] bg-gray-600 hidden" />
        </NavLink>
        <NavLink to={"/collection"}>
          <p>COLLECTION</p>
          <hr className="w-2/8 border-none h-[2px] bg-gray-600 hidden" />
        </NavLink>
        <NavLink to={"/about"}>
          <p>ABOUT</p>
          <hr className="w-2/8 border-none h-[2px] bg-gray-600 hidden" />
        </NavLink>
        <NavLink to={"/contact"}>
          <p>CONTACT</p>
          <hr className="w-2/8 border-none h-[2px] bg-gray-600 hidden" />
        </NavLink>
      </ul>

      <div className=" flex items-center gap-6">
        <img src={assets.search_icon} className="w-5 cursor-pointer"></img>
        <div className="group relative">
          <img
            className="w-5 cursor-pointer "
            src={assets.profile_icon}
            alt="profile"
          ></img>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3  px-5 bg bg-slate-50 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to={"/cart"} className="relative">
          <img src={assets.cart_icon} className="w-5 cursor-pointer"></img>
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>
        <img
          onClick={() => SetVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
        ></img>
      </div>

      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div
          className={`absolute top-0 right-0 h-full bg-white z-50 overflow-hidden transition-all duration-300 ${
            visible ? "w-full" : "w-0  "
          }`}
        >
          <div className="flex  flex-col text-gray-600">
            <div
              onClick={() => SetVisible(false)}
              className="flex items-center gap-4 "
            >
              <img src={assets.dropdown_icon} className="w-3" />
              <p>Back</p>
            </div>
          
          <NavLink onClick={()=>SetVisible(false)} to={'/'} className="py-2 pl-6 border">HOME</NavLink>
           <NavLink onClick={()=>SetVisible(false)} to={'/colectiom'} className="py-2 pl-6 border">COLLECTION</NavLink>
            <NavLink onClick={()=>SetVisible(false)} to={'/about'} className="py-2 pl-6 border">ABOUT</NavLink>
             <NavLink  onClick={()=>SetVisible(false)} to={'/contact'} className="py-2 pl-6 border">CONTACT</NavLink>





          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
