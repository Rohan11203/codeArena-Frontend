import { Link, NavLink } from "react-router-dom";
import { useStore } from "../ContextAPi/store/ContextProvide";
import Logout from "./logout";
import GetProfileInfo from "./get-profile";
import { useState } from "react";
import { ArrowBigDownDashIcon, Brain, Circle } from "lucide-react";
import { motion } from "framer-motion";
import { MenuIcon } from "../components/ui/MenuIcon";
import { MenuButton } from "./ui/MenuButton";
export const Navbar = () => {
  const { isAuth } = useStore();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="sm:max-w-2xl max-w-4xl mx-auto"
    >
      <div className="bg-[#111111] flex  justify-between items-center border p-3 rounded-full">
        <NavLink
          to={"/"}
          className="text-white text-xl flex gap-2 items-center"
        >
          <span>
            <Circle fill="#cff243" />
          </span>{" "}
          CodeArena
        </NavLink>
        <div className="sm:block sm:flex hidden text-white flex gap-6 items-center">
          <NavLink
            to={"/"}
            className="cursor-pointer hover:bg-[#2d2d2d] transition-all duration:0.6 hover:rounded-3xl hover:border-[#1d1d1d] hover:p-2 hover:px-4 "
          >
            Home
          </NavLink>
          <div
            onClick={scrollToAbout}
            className="cursor-pointer hover:bg-[#2d2d2d] transition-all duration:0.6 hover:rounded-3xl hover:border-[#1d1d1d] hover:p-2 hover:px-4 "
          >
            About
          </div>
          <NavLink
            to={"/leaderboard"}
            className="cursor-pointer hover:bg-[#2d2d2d] transition-all duration:0.6 hover:rounded-3xl hover:border-[#1d1d1d] hover:p-2 hover:px-4 "
          >
            Leaderboard
          </NavLink>
          <div className="relative group">
            <div className="cursor-pointer px-5 py-2 rounded-2xl transition-all duration-300 bg-[#1d1d1d] text-white flex items-center gap-2 group-hover:bg-[#2d2d2d] group-hover:rounded-2xl">
              Play
            </div>

            <ul className="absolute right-0 mt-2 w-52 bg-[#cef241] rounded-xl text-black font-medium shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300">
              <li>
                <a
                  href="/singleplayer"
                  className="block px-4 py-2 hover:bg-[#b8d93a] rounded-t-xl"
                >
                  Single Player
                </a>
              </li>
              <li>
                <a
                  href="/multiplayer"
                  className="block px-4 py-2 hover:bg-[#b8d93a] rounded-b-xl"
                >
                  Multi Player
                </a>
              </li>
            </ul>
          </div>
        </div>

        <NavLink
          to={"/login"}
          className="bg-[#cef241] font-semibold p-2 px-3 rounded-3xl border-[#191919] cursor-pointer"
        >
          {isAuth ? "Dashboard" : "Login Now"}
        </NavLink>
        <div className="sm:hidden block">
          <MenuButton />
        </div>
      </div>
    </motion.div>
  );
};
