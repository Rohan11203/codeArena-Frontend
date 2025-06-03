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
    index,
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeInOut" }}
      className="relative"
    >
      <div
        className={`group relative py-6 px-4 rounded-xl border transition-all duration-300 hover:scale-105 backdrop-blur-sm ${
          isActive
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black border-[#cef241]/50 shadow-2xl shadow-[#cef241]/20"
            : isCompleted
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black border-green-500/50 shadow-xl shadow-green-500/20"
            : "bg-gradient-to-br from-gray-900 via-gray-800 to-black border-gray-700/50 shadow-lg hover:border-gray-600/50"
        }`}
      >
        {/* Glowing effect for active/completed states */}
        {(isActive || isCompleted) && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-xl opacity-50" />
        )}
        
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div
            className={`p-2.5 rounded-full transition-all duration-300 ${
              isActive
                ? "bg-gradient-to-r from-[#cef241] to-green-400 shadow-lg shadow-[#cef241]/30"
                : isCompleted
                ? "bg-gradient-to-r from-green-500 to-green-400 shadow-lg shadow-green-500/30"
                : "bg-gray-700 group-hover:bg-gray-600"
            }`}
          >
            <Icon size={18} className="text-black" />
          </div>
        </div>
        
        <div className="mt-6 relative z-10">
          <h3
            className={`text-lg font-bold mb-2 transition-colors duration-300 ${
              isActive
                ? "bg-gradient-to-r from-[#cef241] to-green-400 bg-clip-text text-transparent"
                : isCompleted
                ? "text-green-400"
                : "text-gray-300 group-hover:text-gray-200"
            }`}
          >
            {title}
          </h3>
          <p className="text-gray-400 text-sm mb-3 group-hover:text-gray-300 transition-colors duration-300">
            Required: {xpRequired} XP
          </p>
          <div className="text-sm">
            <p className="font-semibold text-gray-300 mb-1">Rewards:</p>
            <ul className="space-y-1">
              {rewards.map((reward, idx) => (
                <li key={idx} className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-xs">
                  • {reward}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Connection line to next level */}
        {index < 4 && (
          <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
            <ArrowRight 
              size={16} 
              className={`${
                isCompleted ? "text-green-400" : "text-gray-600"
              } transition-colors duration-300`}
            />
          </div>
        )}
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

  const getCurrentLevelIndex = () => {
    for (let i = levels.length - 1; i >= 0; i--) {
      if (xp >= parseInt(levels[i].xpRequired)) {
        return i;
      }
    }
    return 0;
  };

  const getNextLevelXP = () => {
    const currentIndex = getCurrentLevelIndex();
    if (currentIndex < levels.length - 1) {
      return parseInt(levels[currentIndex + 1].xpRequired);
    }
    return parseInt(levels[levels.length - 1].xpRequired);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="flex-1 bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-gray-700/50 rounded-2xl shadow-2xl backdrop-blur-sm overflow-x-hidden"
    >
      <div className="p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#cef241] to-green-400 bg-clip-text text-transparent mb-2">
            Level Progression
          </h2>
          <p className="text-gray-400">Your journey to mastery</p>
        </div>

        {/* Level Flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative mb-8">
          {levels.map((levelData, index) => (
            <React.Fragment key={index}>
              <LevelNode
                {...levelData}
                index={index}
                isActive={
                  xp >= parseInt(levelData.xpRequired) &&
                  (index === levels.length - 1 || xp < parseInt(levels[index + 1]?.xpRequired || "9999"))
                }
                isCompleted={xp >= parseInt(levelData.xpRequired)}
              />
            </React.Fragment>
          ))}
        </div>

        {/* Current Progress */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300 p-6 rounded-xl border border-gray-700/30 hover:border-[#cef241]/30"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#cef241]/20 rounded-lg">
                <Zap className="text-[#cef241]" size={18} />
              </div>
              <div>
                <span className="font-semibold text-gray-200">Current Progress</span>
                <div className="text-xs text-gray-400">Next level: {getNextLevelXP() - xp} XP to go</div>
              </div>
            </div>
            <span className="text-[#cef241] font-bold text-lg">{xp} XP</span>
          </div>
          <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#cef241] to-green-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min((xp / 1000) * 100, 100)}%` }}
              transition={{ duration: 1.5, delay: 1 }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>0 XP</span>
            <span>1000 XP</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FlowDiagram;