import { Link, NavLink } from "react-router-dom";
import { useStore } from "../ContextAPi/store/ContextProvide";
import Logout from "./logout";
import GetProfileInfo from "./get-profile";
import { useState } from "react";
import {ArrowBigDownDashIcon, Brain, Circle} from "lucide-react"
import { motion } from "framer-motion"
export const Navbar = () => {
  const { isAuth } = useStore();
  return (
    <motion.div 
    initial={{ opacity: 0, y:-50 }}
    animate={{ opacity:1, y:0 }}
    transition={{ duration: 0.6, ease: "easeInOut"}}
    className="sm:max-w-2xl max-w-4xl mx-auto">
      <div className="bg-[#111111] flex justify-between items-center border p-3 rounded-full">
        <NavLink to={"/"} className="text-white text-xl flex gap-2 items-center"><span><Circle fill="#cff243" /></span> CodeArena</NavLink>
        <div className="sm:block sm:flex hidden text-white flex gap-6 items-center">
          <NavLink to={"/"} className="cursor-pointer hover:bg-[#2d2d2d] transition-all duration:0.6 hover:rounded-3xl hover:border-[#1d1d1d] hover:p-2 hover:px-4 ">Home</NavLink>
          <div className="cursor-pointer hover:bg-[#2d2d2d] transition-all duration:0.6 hover:rounded-3xl hover:border-[#1d1d1d] hover:p-2 hover:px-4 ">About</div>
          <div className="cursor-pointer hover:bg-[#2d2d2d] transition-all duration:0.6 hover:rounded-3xl hover:border-[#1d1d1d] hover:p-2 hover:px-4 ">Leaderboard</div>
          <div className="cursor-pointer hover:bg-[#2d2d2d] transition-all duration:0.6 hover:rounded-3xl hover:border-[#1d1d1d] hover:p-1 hover:px-4 ">
            <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className=" m-1 flex gap-2 justify-center">Play</div>
              <ul tabIndex={0} className="dropdown-content menu bg-[#cef241] rounded-box z-[1] w-52 text-black font-medium shadow">
                <li><a href="/singleplayer">Single Player</a></li>
                <li><a href="/multiplayer">Multi Player </a></li>
              </ul>
            </div>
          </div>
          
        </div>
        <NavLink to={"/login"} className="bg-[#cef241] font-semibold p-2 px-3 rounded-3xl border-[#191919] cursor-pointer">{ isAuth ? "Dashboard" : "Login Now" }</NavLink>
      </div>
    </motion.div>
  );
};
