import React from "react";
import { Spotlight } from "../components/ui/spot-light";

export function SpotlightNewDemo() {
  return (
    (<div
      className="h-[40rem] w-full  flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1
          className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Master Your Coding Skills <br /> through <span className="text-gray-900"> Competitive  </span><br /> <span className="text-gray-900">Programming</span> 
        </h1>
        <p
          className="mt-6 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Join our community of passionate developers and enhance your problem-solving abilities. Practice daily challenges, compete with peers, and level up your coding expertise.
        </p>
      </div>
    </div>)
  );
}
