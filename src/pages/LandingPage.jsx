import React from "react";
import { Navbar } from "../components/Navbar";
import { GoalIcon, Star } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import GameShowcase from "../components/GameShowCase";
import { useStore } from "../ContextAPi/store/ContextProvide";

const LandingPage = () => {

  const { isAuth } = useStore();

  const stats = [
    { count: "50+", label: "Total Registers" },
    { count: "20+", label: "Total Problems" },
    { count: "5+", label: "Total Games" },
    { count: "20+", label: "Leaderboard ranks" },
  ];
  return (
    <div className="bg-[#0f0f0f] h-full">
      <div className="p-5">
        <Navbar />
      </div>
      <div className="lg:max-w-4xl max-w-2xl mx-auto ">
        <div className="flex gap-2 mt-10 justify-center text-md">
          <div className="flex items-center justify-center h-6 w-6 bg-[#0f0f0f] rounded-full border">
            <GoalIcon fill="white" />
          </div>
          <div className="flex">
            <Star fill="orange" />
            <Star fill="orange" />
            <Star fill="orange" />
            <Star fill="orange" />
            <Star fill="orange" />
          </div>
          <div className="text-[#7f7f82] font-semibold">Rated 4.5 of 5</div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 50, x: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col gap-2 justify-center items-center mt-8"
        >
          <div className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
            Engaging, Competitive, and Interactive
          </div>
          <div className="flex justify-center">
            <div className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
              Platform for Coding Battles
            </div>
          </div>
        </motion.div>
        <div className="flex items-center justify-center mt-8">
          <div className="text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#454648] font-medium">
            Level Up Your Skills with Our Dynamic and Thrilling CodeArena
            Platform
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 50, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex justify-center mt-10"
        >
          <NavLink
            to={"/dashboard"}
            className="bg-[#cef241] font-medium py-4 px-6  rounded-3xl border-[#191919] cursor-pointer font-semibold hover:bg-[#cef098]"
          >
            Start Playing
          </NavLink>
        </motion.div>

        <div className="flex items-center justify-center mt-8">
          <div className="lg:text-lg text-sm text-[#78787b] font-medium">
            CodeArena Platform Stats & Features
          </div>
        </div>
      </div>

      <div className="lg:max-w-xl md:max-w-3xl max-w-lg mx-auto md:flex border-t border-gray-900 mt-2 p-6 overflow-hidden ">
        <motion.div
          className="flex space-x-6"
          initial={{ x: "-100%" }}
          animate={{ x: "50%" }}
          transition={{
            repeat: Infinity,
            ease: "easeInOut",
            duration: 20,
          }}
        >
          {[...stats, ...stats].map((stat, index) => (
            <div
              key={index}
              className="bg-[#0f0f0f]  shadow-md shadow-gray-500 rounded-2xl w-40 h-32 pt-8 text-center flex-shrink-0"
            >
              <h1 className="text-3xl font-semibold text-white pb-2">
                {stat.count}
              </h1>
              <p className="text-gray-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

     <GameShowcase />

    </div>
  );
};

export default LandingPage;
