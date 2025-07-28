import React from "react";
import { Navbar } from "../components/Navbar";
import { GoalIcon, Star } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import GameShowcase from "../components/GameShowCase";
import { useStore } from "../ContextAPi/store/ContextProvide";
import { Features } from "../components/Features";

const LandingPage = () => {
  const { isAuth } = useStore();

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white overflow-x-hidden">
      <div className="p-4 md:p-6">
        <Navbar />
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-wrap gap-2 items-center justify-center text-sm text-gray-400 font-medium"
        >
          <div className="flex items-center gap-1 bg-[#1A1A1A] border border-gray-800 px-3  rounded-full">
            <GoalIcon className="h-5 w-5 text-yellow-400" />
            <span>Top Rated</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center text-yellow-400">
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
            </div>
            <span className="text-gray-300">Rated 4.5 of 5</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mt-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            Engaging, Competitive, and
            <span className="block text-yellow-400 mt-2">
              Interactive Coding Battles
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-400">
            Level up your skills with our dynamic and thrilling CodeArena platform. Join thousands of developers and start competing today.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className="mt-10"
        >
          <NavLink
            to={"/dashboard"}
            className="inline-block bg-yellow-400 text-black font-bold py-4 px-10 rounded-full text-lg transition-transform transform hover:scale-105 hover:bg-yellow-300 shadow-lg shadow-yellow-400/20"
          >
            Start Playing Now
          </NavLink>
        </motion.div>

        <div className="mt-20 sm:mt-24 lg:mt-32 ">
          <h2 className="text-base font-semibold text-gray-500 tracking-wider uppercase">
            CodeArena Platform Stats & Features
          </h2>
        </div>
      </main>

      <div className="max-w-5xl mx-auto">
        <Features />
      </div>

      <div className="w-full mt-16 sm:mt-20">
        <GameShowcase />
      </div>
    </div>
  );
};

export default LandingPage;
