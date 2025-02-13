import { Link, NavLink } from "react-router-dom";
import { useStore } from "../ContextAPi/store/ContextProvide";
import Logout from "./logout";
import GetProfileInfo from "./get-profile";
import { useState } from "react";
import {Brain, Circle} from "lucide-react"
export const Navbar = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-[#111111] flex justify-between items-center border p-3 rounded-full">
        <div className="text-white text-xl flex gap-2 items-center"><span><Circle fill="#cff243" /></span> CodeArena</div>
        <div className="text-white flex gap-6 items-center">
          <div className="cursor-pointer bg-[#2d2d2d] rounded-3xl p-2 px-4 border-[#1d1d1d]">Home</div>
          <div className="cursor-pointer">About</div>
          <div className="cursor-pointer">Works</div>
          <div className="cursor-pointer">Services</div>
        </div>
        <div className="bg-[#cef241] font-medium p-2 rounded-3xl border-[#191919] cursor-pointer">Contact Us</div>
      </div>
    </div>
  );
};
