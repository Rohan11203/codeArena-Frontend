import { useStore } from "../ContextAPi/store/ContextProvide";
import { Trophy, Swords, Gamepad2, PencilIcon } from 'lucide-react';
import { motion } from "framer-motion"
import { Button } from "./ui/Button";

export default function PlayerStats() {
  const { xp, name,level,setLevel,achievments, Avtar } = useStore();
  const experienceXp  = xp / 10;
  const levelProgress = level * 10;

  return (
    <motion.div 
    initial={{ opacity:0, x:-50 }}
      animate={{ opacity:50, x:0 }}
      transition={{ duration:0.8, ease:"easeInOut" }}
    className="card w-96  bg-black border border-[#cef241] text-white shadow-2xl">
      <div className="card-body items-center text-center">
        {/* Avatar Section */}
        <div className="avatar placeholder">
          <div className=" rounded-full w-24 ring ring-[#cef241] ring-offset-[#cef241] ring-offset-2">
            <img src={Avtar}/>
           
            {/* <span className="text-3xl font-medium text-white">{name[0]}</span> */}
          </div>
        </div>
        
        <h2 className="card-title text-2xl font-bold text-[#cef241] mt-4">{name}</h2>
        
        <div className="w-full space-y-4 mt-4">
          {/* XP Progress */}
          <div className="p-4 rounded-lg border border-gray-800">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Gamepad2 className="text-orange-500" size={18} />
                <span className="font-bold text-gray-300">Experience</span>
              </div>
              <span className="text-orange-500 text-sm">{xp}/1000 XP</span>
            </div>
            <progress 
              className="progress progress-warning w-full bg-gray-800" 
              value={experienceXp} 
              max="100"
            />
          </div>

          {/* Level Progress */}
          <div className=" p-4 rounded-lg border border-gray-800">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Swords className="text-green-500" size={20} />
                <span className="font-bold text-gray-300">Level</span>
              </div>
              <span className="text-green-500">Level {level}</span>
            </div>
            <progress 
              className="progress progress-success w-full bg-gray-800" 
              value={levelProgress} 
              max="100"
            />
          </div>

          {/* Achievements Progress */}
          <div className=" p-4 rounded-lg border border-gray-800">
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-2">
                <Trophy className="text-purple-500" size={20} />
                <span className="font-bold text-gray-300">Achievements</span>
              </div>
              <span className="text-purple-500">{achievments}%</span>
            </div>
            <progress 
              className="progress w-full bg-gray-800" 
              value={achievments} 
              max="100"
              style={{ 
                '--value-percent': `${achievments}%`,
                '--color': '#8B5CF6'
              }}
            />
          </div>

          <Button />
        </div>       
      </div>
    </motion.div>
  );
}
