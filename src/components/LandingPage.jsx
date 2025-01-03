"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "../lib/utils.js";
import { NavLink } from "react-router-dom";
import { motion } from 'framer-motion';

export function LandingPage() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      <Boxes />
      <div className="relative flex flex-col items-center justify-center">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 opacity-20 blur-xl" />
      
      {/* Main content */}
      <motion.h1 
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white relative z-20 pb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Compete in the CodeArena
      </motion.h1>

      <motion.button 
        className="text-2xl md:text-2xl lg:text-2xl relative z-20 px-5 py-2 font-medium text-black bg-gradient-to-r from-yellow-400 to-yellow-900 rounded-lg hover:from-yellow-400 hover:to-yellow-400 transition-all duration-200 shadow-lg shadow-purple-900/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let's Play
      </motion.button>
      
      <motion.p 
        className="text-neutral-300 relative z-20 text-center mt-4 text-lg md:text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Framer Motion is the best animation library
      </motion.p>

      {/* Decorative elements */}
      <motion.div 
        className="absolute -z-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
    </div>
  );
}
