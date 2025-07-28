import { useStore } from "../ContextAPi/store/ContextProvide";
import { Trophy, Swords, Gamepad2, Star } from 'lucide-react';
import { motion } from "framer-motion";
import { Button } from "./ui/Button";

export default function PlayerStats() {
  const { xp, name, level, achievments, Avtar } = useStore();
  
  // Calculate progress percentages, ensuring they don't exceed 100%.
  const experienceProgress = Math.min((xp / 1000) * 100, 100);
  const levelProgress = Math.min(level * 10, 100);

  // Reusable component for displaying a stat with a progress bar.
  const StatBar = ({ icon: Icon, title, subtitle, value, progress }) => (
    <div className="group bg-[#1a1a1a]/50 hover:bg-[#1a1a1a]/80 transition-all duration-300 p-4 rounded-xl border border-gray-800 hover:border-yellow-400/30">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-yellow-400/20 rounded-lg">
            <Icon className="text-yellow-400" size={18} />
          </div>
          <div>
            <span className="font-semibold text-gray-200">{title}</span>
            <div className="text-xs text-gray-400">{subtitle}</div>
          </div>
        </div>
        <span className="text-yellow-400 font-bold">{value}</span>
      </div>
      <div className="w-full bg-gray-700/50 rounded-full h-2.5 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="lg:w-96 w-full flex-shrink-0 bg-[#111111]/80 backdrop-blur-sm border border-gray-800 rounded-2xl shadow-2xl"
    >
      <div className="p-6">
        {/* Header with Avatar */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 p-1">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                <img src={Avtar} alt={name} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="absolute -top-1 -right-1 w-7 h-7 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center border-2 border-gray-900">
              <Star className="w-4 h-4 text-black" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent mt-4">
            {name}
          </h2>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-sm text-gray-400">Level</span>
            <span className="text-lg font-bold text-yellow-400">{level}</span>
          </div>
        </div>
        
        <div className="space-y-4">
          <StatBar
            icon={Gamepad2}
            title="Experience"
            subtitle={`Next level in ${1000 - xp} XP`}
            value={`${xp}/1000`}
            progress={experienceProgress}
          />
          <StatBar
            icon={Swords}
            title="Power Level"
            subtitle="Combat effectiveness"
            value={`${levelProgress}%`}
            progress={levelProgress}
          />
          <StatBar
            icon={Trophy}
            title="Achievements"
            subtitle="Collection progress"
            value={`${achievments}%`}
            progress={achievments}
          />

          {/* Action Button */}
          <motion.div
            className="pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
