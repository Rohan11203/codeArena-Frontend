import React from "react";
import {
  ArrowRight,
  Code,
  Award,
  Trophy,
  Sword,
  Shield,
  Gamepad2,
  Target,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { useStore } from "../ContextAPi/store/ContextProvide";

const FlowDiagram = () => {
  const { xp, level } = useStore();

  const LevelNode = ({
    title,
    xpRequired,
    rewards,
    icon: Icon,
    isActive,
    isCompleted,
  }) => (
    <motion.div
    initial={{ opacity:0, y:50 }}
    animate={{ opacity:50, y:0 }}
    transition={{ duration:1, ease:"easeInOut" }}
    >
      <div
        className={`relative py-8 px-4 rounded-lg border  ${
          isActive
            ? "bg-gray-800 border-cyan-500 shadow-lg shadow-cyan-500/20"
            : isCompleted
            ? "bg-gray-800 border-[#F2E741] shadow-lg shadow-green-500/20"
            : "bg-gray-900 border-gray-700"
        } transition-all duration-300 hover:scale-105`}
      >
        <div className=" absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div
            className={`p-2 rounded-full ${
              isActive
                ? "bg-cyan-500"
                : isCompleted
                ? "bg-[#F2E741]"
                : "bg-gray-700"
            }`}
          >
            <Icon size={20} className="text-black" />
          </div>
        </div>
        <div className="mt-4">
          <h3
            className={`text-xl font-bold mb-2 ${
              isActive
                ? "text-cyan-400"
                : isCompleted
                ? "text-[#F2E741]"
                : "text-gray-400"
            }`}
          >
            {title}
          </h3>
          <p className="text-gray-400 text-sm mb-3">
            Required: {xpRequired} XP
          </p>
          <div className="text-sm text-gray-500">
            <p className="font-semibold text-gray-400">Rewards:</p>
            <ul className="">
              {rewards.map((reward, idx) => (
                <li key={idx} className="text-gray-500">
                  {reward}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const levels = [
    {
      title: "Novice",
      xpRequired: "0",
      rewards: ["Basic Profile Badge", "Starter Kit"],
      icon: Gamepad2,
    },
    {
      title: "Apprentice",
      xpRequired: "100",
      rewards: ["New Avatar Frame", "Daily Bonus +10%"],
      icon: Code,
    },
    {
      title: "Adept",
      xpRequired: "300",
      rewards: ["Special Emotes", "Custom Title"],
      icon: Shield,
    },
    {
      title: "Expert",
      xpRequired: "500",
      rewards: ["Unique Badge", "Profile Themes"],
      icon: Sword,
    },
    {
      title: "Master",
      xpRequired: "1000",
      rewards: ["Elite Status", "All Features Unlocked"],
      icon: Trophy,
    },
  ];

  return (
    <div className="w-full  overflow-x-hidden max-w-6xl mx-auto p-8 bg-black rounded-xl shadow-lg">
      <div className="grid mt-16 grid-cols-1 md:grid-cols-5 gap-4 relative">
        {levels.map((levelData, index) => (
          <React.Fragment key={index}>
            <LevelNode
              {...levelData}
              isActive={
                xp >= parseInt(levelData.xpRequired) &&
                index === levels.findIndex((l) => xp < parseInt(l.xpRequired))
              }
              isCompleted={xp >= parseInt(levelData.xpRequired)}
            />
            
          </React.Fragment>
        ))}
      </div>

      {/* Current Progress */}
      <div className="mt-12 bg-gray-900 p-6 rounded-lg border border-gray-800">
        <div className="flex justify-between items-center mb-2">
          <span className="text-cyan-400 font-bold">Current Progress</span>
          <span className="text-cyan-400">{xp} XP</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-4">
          <div
            className="bg-gradient-to-r from-cyan-500 to-blue-500 h-4 rounded-full transition-all duration-500"
            style={{ width: `${xp / 10}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default FlowDiagram;
