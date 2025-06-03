import { useStore } from "../ContextAPi/store/ContextProvide";
import { Trophy, Swords, Gamepad2, PencilIcon, Star } from 'lucide-react';
import { motion } from "framer-motion"
import { Button } from "./ui/Button";

export default function PlayerStats() {
  const { xp, name,level,setLevel,achievments, Avtar } = useStore();
  const experienceXp  = xp / 10;
  const levelProgress = level * 10;

  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-96 bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-gray-700/50 rounded-2xl shadow-2xl backdrop-blur-sm"
    >
      <div className="p-6">
        {/* Header with Avatar */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#cef241] to-green-400 p-0.5">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                <img src={Avtar} alt={name} className="w-full h-full object-cover rounded-full" />
              </div>
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-[#cef241] to-green-400 rounded-full flex items-center justify-center">
              <Star className="w-3 h-3 text-black" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold bg-gradient-to-r from-[#cef241] to-green-400 bg-clip-text text-transparent mt-3">
            {name}
          </h2>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-sm text-gray-400">Level</span>
            <span className="text-lg font-bold text-[#cef241]">{level}</span>
          </div>
        </div>
        
        <div className="space-y-4">
          {/* XP Progress */}
          <div className="group bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300 p-4 rounded-xl border border-gray-700/30 hover:border-orange-500/30">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-500/20 rounded-lg">
                  <Gamepad2 className="text-orange-400" size={18} />
                </div>
                <div>
                  <span className="font-semibold text-gray-200">Experience</span>
                  <div className="text-xs text-gray-400">Next level in {1000 - xp} XP</div>
                </div>
              </div>
              <span className="text-orange-400 font-bold">{xp}/1000</span>
            </div>
            <div className="w-full bg-gray-700/50 rounded-full h-2.5 overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${experienceXp}%` }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </div>
          </div>

          {/* Level Progress */}
          <div className="group bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300 p-4 rounded-xl border border-gray-700/30 hover:border-green-500/30">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Swords className="text-green-400" size={18} />
                </div>
                <div>
                  <span className="font-semibold text-gray-200">Power Level</span>
                  <div className="text-xs text-gray-400">Combat effectiveness</div>
                </div>
              </div>
              <span className="text-green-400 font-bold">{levelProgress}%</span>
            </div>
            <div className="w-full bg-gray-700/50 rounded-full h-2.5 overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${levelProgress}%` }}
                transition={{ duration: 1, delay: 0.4 }}
              />
            </div>
          </div>

          {/* Achievements Progress */}
          <div className="group bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300 p-4 rounded-xl border border-gray-700/30 hover:border-purple-500/30">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Trophy className="text-purple-400" size={18} />
                </div>
                <div>
                  <span className="font-semibold text-gray-200">Achievements</span>
                  <div className="text-xs text-gray-400">Collection progress</div>
                </div>
              </div>
              <span className="text-purple-400 font-bold">{achievments}%</span>
            </div>
            <div className="w-full bg-gray-700/50 rounded-full h-2.5 overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${achievments}%` }}
                transition={{ duration: 1, delay: 0.6 }}
              />
            </div>
          </div>

          {/* Action Button */}
          <motion.div 
            className="pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button />
          </motion.div>
        </div>       
      </div>
    </motion.div>
  );
}
