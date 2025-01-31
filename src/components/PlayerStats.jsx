import { useStore } from "../ContextAPi/store/ContextProvide";
import { Trophy, Swords, Gamepad2 } from 'lucide-react';


export default function PlayerStats() {
  const { xp, name,level,setLevel,achievments } = useStore();
  const experienceXp  = xp / 10;
  const levelProgress = level * 10;
  return (
    <div className="hidden lg:block card w-96 h-fit bg-black border border-gray-800 text-white shadow-2xl">
      <div className="card-body items-center text-center">
        {/* Avatar Section */}
        <div className="avatar placeholder">
          <div className="bg-gray-800 text-cyan-400 rounded-full w-24 ring ring-cyan-500 ring-offset-base-100 ring-offset-2">
            <span className="text-3xl">{name[0]}</span>
          </div>
        </div>
        
        {/* Player Name */}
        <h2 className="card-title text-2xl font-bold text-cyan-400 mt-4">{name}</h2>
        
        {/* Stats Grid */}
        <div className="w-full space-y-4 mt-4">
          {/* XP Progress */}
          <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
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
          <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
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
          <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
            <div className="flex items-center justify-between mb-2">
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
        </div>       
      </div>
    </div>
  );
}
