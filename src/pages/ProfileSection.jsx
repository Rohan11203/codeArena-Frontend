import React from "react";
import { Award, Code, GitBranch, Star, Zap } from "lucide-react";
import PlayerStats from "../components/PlayerStats";
import { Navbar } from "../components/Navbar";

const ProfileSection = () => {
  return (
    <div className="h-screen bg-black overflow-auto flex justify-center items-center pt-4">
      <div className="">
        <div className="mb-2"><Navbar /></div>
        <PlayerStats />
      </div>
    </div>
  );
};

export default ProfileSection;
