import { NavLink } from "react-router-dom";
import { Layers, Star, Trophy, Zap } from "lucide-react";
import { Navbar } from "../components/Navbar";

import CodeSimonImg from "../assets/codeSimon.png";
import FlexBoxImg from "../assets/QuizArena.png";
import GridBoxImg from "../assets/gridGame.png";
import QuizArenaImg from "../assets/QuizArena.png";

export function SinglePlayersCard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 px-12 pb-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="pt-6 z-20 relative">
        <Navbar />
      </div>

      {/* Featured Games Section */}
      <div className="relative z-10 mt-12">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Featured Games
          </h1>
          <p className="text-gray-300 text-lg">Challenge yourself with our premium gaming experiences</p>
        </div>

        <div className="flex justify-center gap-8 mb-16">
          <NavLink to="/codeSimon" className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-green-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
            <div className="relative h-80 w-96">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={CodeSimonImg}
                alt="Code Simon Arena"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/60 backdrop-blur-sm">
                <div className="glass-card bg-gradient-to-br from-green-600/90 to-emerald-700/90 p-6 rounded-2xl border border-green-400/30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex gap-3 items-center mb-2">
                    <Zap className="w-6 h-6 text-green-300" />
                    <h2 className="font-bold text-2xl text-white">Code Simon Arena</h2>
                  </div>
                  <p className="text-green-100 font-light">Master coding patterns and earn XP</p>
                  <div className="flex items-center gap-2 mt-3">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm text-green-200">Premium Experience</span>
                  </div>
                </div>
              </div>

              {/* Game info overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-bold text-xl mb-1">Code Simon Arena</h3>
                <p className="text-gray-300 text-sm">Challenge your memory and coding skills</p>
              </div>
            </div>
          </NavLink>

          <NavLink to="/quizarena" className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
            <div className="relative h-80 w-96">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={QuizArenaImg}
                alt="Quiz Arena"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/60 backdrop-blur-sm">
                <div className="glass-card bg-gradient-to-br from-purple-600/90 to-violet-700/90 p-6 rounded-2xl border border-purple-400/30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex gap-3 items-center mb-2">
                    <Trophy className="w-6 h-6 text-purple-300" />
                    <h2 className="font-bold text-2xl text-white">Quiz Arena</h2>
                  </div>
                  <p className="text-purple-100 font-light">Test your knowledge and compete</p>
                  <div className="flex items-center gap-2 mt-3">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm text-purple-200">Brain Challenge</span>
                  </div>
                </div>
              </div>

              {/* Game info overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-bold text-xl mb-1">Quiz Arena</h3>
                <p className="text-gray-300 text-sm">Compete in knowledge battles</p>
              </div>
            </div>
          </NavLink>
        </div>
      </div>

      {/* Classic Puzzles Section */}
      <div className="relative z-10">
        <div className="mb-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
            Classic Puzzles
          </h2>
          <p className="text-gray-300 text-lg">Perfect your skills with algorithmic challenges</p>
          <div className="flex items-center gap-2 mt-2">
            <div className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30">
              <span className="text-green-300 text-sm font-medium">Easy Level</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-8">
          <NavLink to="/gridBox" className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
            <div className="relative h-60 w-80">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={GridBoxImg}
                alt="Grid Box Arena"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/60 backdrop-blur-sm">
                <div className="glass-card bg-gradient-to-br from-blue-600/90 to-indigo-700/90 p-4 rounded-xl border border-blue-400/30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex gap-3 items-center mb-1">
                    <Layers className="w-5 h-5 text-blue-300" />
                    <h3 className="font-bold text-lg text-white">Grid Box Arena</h3>
                  </div>
                  <p className="text-blue-100 font-light text-sm">Master CSS Grid layouts</p>
                </div>
              </div>

              {/* Game info overlay */}
              <div className="absolute bottom-3 left-3 right-3">
                <h4 className="text-white font-bold text-lg mb-1">Grid Box Arena</h4>
                <p className="text-gray-300 text-xs">Learn grid positioning</p>
              </div>
            </div>
          </NavLink>

          <NavLink to="/flexbox" className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25">
            <div className="relative h-60 w-80">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={FlexBoxImg}
                alt="Flex Arena"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/60 backdrop-blur-sm">
                <div className="glass-card bg-gradient-to-br from-emerald-600/90 to-green-700/90 p-4 rounded-xl border border-emerald-400/30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex gap-3 items-center mb-1">
                    <Layers className="w-5 h-5 text-emerald-300" />
                    <h3 className="font-bold text-lg text-white">Flex Arena</h3>
                  </div>
                  <p className="text-emerald-100 font-light text-sm">Master Flexbox layouts</p>
                </div>
              </div>

              {/* Game info overlay */}
              <div className="absolute bottom-3 left-3 right-3">
                <h4 className="text-white font-bold text-lg mb-1">Flex Arena</h4>
                <p className="text-gray-300 text-xs">Learn flexible layouts</p>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
