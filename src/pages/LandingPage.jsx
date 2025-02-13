import React from "react";
import { Navbar } from "../components/Navbar";
import { GoalIcon, Star } from "lucide-react";

const LandingPage = () => (
  <div className="bg-[#0f0f0f] h-screen">
    <div className="p-5">
      <Navbar />
    </div>
    <div className="max-w-4xl mx-auto ">
      <div className="flex gap-2 mt-10 justify-center ">
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

      <div className="grid gap-3 justify-center items-center mt-8">
        <div className="text-white text-5xl font-semibold ">
          Engaging, Competitive, and Interactive
        </div>
        <div className="flex justify-center">
          <div className="text-white text-5xl font-semibold ">
            Platform for Coding Battles
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-8">
        <div className="text-xl text-[#454648] font-medium">
          Level Up Your Skills with Our Dynamic and Thrilling CodeArena Platform
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="bg-[#cef241] font-medium py-4 px-8 rounded-3xl border-[#191919] cursor-pointer font-semibold">
          Play Now
        </div>
      </div>

      <div className="flex items-center justify-center mt-8">
        <div className="text-md text-[#78787b] font-medium">
          Available Figma File With Editable Assets
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto flex justify-between border-t border-gray-900 mt-2 p-6">
      <div className="bg-gray-[#141414] border rounded-2xl w-60 h-36 pt-8 text-center">
        <h1 className="text-3xl font-semibold text-white pb-2">50+</h1>
        <p className="text-[#454648]">Total Registers</p>
      </div>

      <div className="bg-gray-[#141414] border rounded-2xl w-60 h-36 pt-8 text-center">
        <h1 className="text-3xl font-semibold text-white pb-2">5+</h1>
        <p className="text-[#454648]">Total Games</p>
      </div>

      <div className="bg-gray-[#141414] border rounded-2xl w-60 h-36 pt-8 text-center">
        <h1 className="text-3xl font-semibold text-white pb-2">50+</h1>
        <p className="text-[#454648]">Project Completed</p>
      </div>

      <div className="bg-gray-[#141414] border rounded-2xl w-60 h-36 pt-8 text-center">
        <h1 className="text-3xl font-semibold text-white pb-2">50+</h1>
        <p className="text-[#454648]">Project Completed</p>
      </div>
    </div>
  </div>
);

export default LandingPage;
