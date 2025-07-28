import React from "react";
import { ArrowRight, Code, Trophy, Sword, Shield, Gamepad2, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useStore } from "../ContextAPi/store/ContextProvide";

const FlowDiagram = () => {
  const { xp } = useStore();

  const LevelNode = ({ title, xpRequired, rewards, icon: Icon, isActive, isCompleted, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="relative flex-1"
    >
      <div
        className={`group relative h-full flex flex-col py-6 px-4 rounded-xl border transition-all duration-300 hover:scale-105 backdrop-blur-sm ${
          isActive
            ? "bg-[#111111] border-yellow-400/50 shadow-2xl shadow-yellow-400/20"
            : isCompleted
            ? "bg-[#111111]/50 border-gray-700"
            : "bg-[#111111]/50 border-gray-800 hover:border-gray-700"
        }`}
      >
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div
            className={`p-3 rounded-full transition-all duration-300 ${
              isActive
                ? "bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg shadow-yellow-400/30"
                : isCompleted
                ? "bg-yellow-400"
                : "bg-gray-700 group-hover:bg-gray-600"
            }`}
          >
            <Icon size={20} className={isActive || isCompleted ? "text-black" : "text-white"} />
          </div>
        </div>
        
        <div className="mt-8 text-center flex-grow">
          <h3
            className={`text-xl font-bold mb-2 transition-colors duration-300 ${
              isActive
                ? "bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent"
                : isCompleted
                ? "text-yellow-400"
                : "text-gray-300 group-hover:text-gray-200"
            }`}
          >
            {title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300">
            {xpRequired} XP
          </p>
          <div className="text-sm flex-grow">
            <ul className="space-y-1">
              {rewards.map((reward, idx) => (
                <li key={idx} className="text-gray-500 group-hover:text-gray-400 transition-colors text-xs">
                  • {reward}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Connection line for larger screens */}
      {index < 4 && (
        <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
          <ArrowRight 
            size={20} 
            className={`${isCompleted ? "text-yellow-400" : "text-gray-600"} transition-colors duration-300`}
          />
        </div>
      )}
       {/* Vertical connection line for smaller screens */}
      {index < 4 && (
        <div className="lg:hidden absolute left-1/2 -bottom-5 transform -translate-x-1/2 h-5 w-px bg-gray-600 z-0">
            {isCompleted && <div className="h-full w-full bg-yellow-400"></div>}
        </div>
      )}
    </motion.div>
  );

  const levels = [
    { title: "Novice", xpRequired: "0", rewards: ["Basic Profile Badge"], icon: Gamepad2 },
    { title: "Apprentice", xpRequired: "100", rewards: ["New Avatar Frame"], icon: Code },
    { title: "Adept", xpRequired: "300", rewards: ["Special Emotes"], icon: Shield },
    { title: "Expert", xpRequired: "500", rewards: ["Unique Badge"], icon: Sword },
    { title: "Master", xpRequired: "1000", rewards: ["Elite Status"], icon: Trophy },
  ];

  const getCurrentLevelIndex = () => {
    for (let i = levels.length - 1; i >= 0; i--) {
      if (xp >= parseInt(levels[i].xpRequired)) return i;
    }
    return 0;
  };
  
  const currentLevelIndex = getCurrentLevelIndex();
  const nextLevelXP = currentLevelIndex < levels.length - 1 ? parseInt(levels[currentLevelIndex + 1].xpRequired) : 1000;
  const progressToNextLevel = Math.min(((xp - parseInt(levels[currentLevelIndex].xpRequired)) / (nextLevelXP - parseInt(levels[currentLevelIndex].xpRequired))) * 100, 100);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="flex-1 bg-[#111111]/80 backdrop-blur-sm border border-gray-800 rounded-2xl shadow-2xl"
    >
      <div className="p-6 sm:p-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent mb-2">
            Your Progression
          </h2>
          <p className="text-gray-400">The journey to mastery awaits.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 relative mb-10">
          {levels.map((levelData, index) => (
            <LevelNode
              key={index}
              {...levelData}
              index={index}
              isActive={currentLevelIndex === index}
              isCompleted={xp >= parseInt(levelData.xpRequired)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-[#1a1a1a]/50 hover:bg-[#1a1a1a]/80 transition-all duration-300 p-6 rounded-xl border border-gray-800 hover:border-yellow-400/30"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-400/20 rounded-lg">
                <Zap className="text-yellow-400" size={18} />
              </div>
              <div>
                <span className="font-semibold text-gray-200">Current Progress</span>
                <div className="text-xs text-gray-400">
                  {currentLevelIndex < levels.length - 1 ? `${nextLevelXP - xp} XP to next level` : "You are at the max level!"}
                </div>
              </div>
            </div>
            <span className="text-yellow-400 font-bold text-lg">{xp} XP</span>
          </div>
          <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressToNextLevel}%` }}
              transition={{ duration: 1.5, delay: 1, ease: "circOut" }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FlowDiagram;
