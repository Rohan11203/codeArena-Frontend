import { Link, NavLink } from "react-router-dom";
import { useStore } from "../ContextAPi/store/ContextProvide";
import Logout from "./logout";
import GetProfileInfo from "./get-profile";
import { useState } from "react";
import {Brain, Circle} from "lucide-react"
import { motion } from "framer-motion"
export const Navbar = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y:-50 }}
    animate={{ opacity:1, y:0 }}
    transition={{ duration: 0.6, ease: "easeInOut"}}
    className="sm:max-w-2xl max-w-4xl mx-auto">
      <div className="bg-[#111111] flex justify-between items-center border p-3 rounded-full">
        <NavLink to={"/"} className="text-white text-xl flex gap-2 items-center"><span><Circle fill="#cff243" /></span> CodeArena</NavLink>
        <div className="sm:block sm:flex hidden text-white flex gap-6 items-center">
          <div className="cursor-pointer bg-[#2d2d2d] rounded-3xl p-2 px-4 border-[#1d1d1d]">Home</div>
          <div className="cursor-pointer">About</div>
          <div className="cursor-pointer">Works</div>
          <div className="cursor-pointer">Services</div>
        </div>
        <NavLink to={"/login"} className="bg-[#cef241] font-semibold p-2 px-3 rounded-3xl border-[#191919] cursor-pointer">Login Now</NavLink>
      </div>
    </motion.div>
  );
};
