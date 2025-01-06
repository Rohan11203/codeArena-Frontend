"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "../lib/utils.js";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import PricingCards from "./grid-cards.jsx";

export function LandingPage() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-[#0f081c]">
      <div className="absolute  w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />

      {/* Background gradient effect */}
      <div className="z-20 absolute inset-0 top-[20%] flex  justify-center font-bold min-h-fit">
        <div className="text-center">
          <h1 className="font-poppins text-6xl">
            <span className="rounded-xl pl-2 bg-gradient-to-r from-blue-800 ">CodeArena</span> is a platform for <br /> Competitive coding
          </h1>
          <div className="">
            <PricingCards />
           </div>
        </div>
        
      </div>
      
      
    </div>
  );
}
