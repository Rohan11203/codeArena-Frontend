import { Trophy, Medal, Award } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { useEffect, useState } from "react";
import { getLeaderBoardData } from "../api/auth";

const getRankIcon = (rank) => {
  switch (rank) {
    case 1:
      return <Trophy size={24} className="text-yellow-400 fill-yellow-400" />;
    case 2:
      return <Medal size={24} className="text-gray-300 fill-gray-300" />;
    case 3:
      return <Award size={24} className="text-orange-400 fill-orange-400" />;
    default:
      return null;
  }
};


const Leaderboard = () => {
  const [players1, setPlayers] = useState([]);

  async function fetchLeaderBoardData() {
    try {
      const res = await getLeaderBoardData();
      setPlayers(res.data.Users);
    } catch (error) {
      console.error('Failed to fetch leaderboard data:', error);
    }
  }

  useEffect(() => {
    fetchLeaderBoardData();
  }, []);

  const sortedPlayers = [...players1].sort((a, b) => b.totalScore - a.totalScore);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 px-12 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="pt-6 z-20 relative">
        <Navbar />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto pt-10">
        <div className="text-center mb-8">
          <h1 className="sm:text-5xl text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            CodeArena Leaderboard
          </h1>
          <p className="text-gray-300 text-lg">Top performers in our coding challenges</p>
        </div>

        <div className="glass-card bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl md:p-8 p-0 hover-lift">
          <div className="overflow-hidden rounded-xl">
            <div className="w-full">
              <div className="border-b border-gray-700/50 bg-gray-800/30 px-6 py-4">
                <div className="grid grid-cols-3 gap-4 font-bold text-lg text-[#cef241]">
                  <div>Rank</div>
                  <div>Player</div>
                  <div className="text-right">Score</div>
                </div>
              </div>
              <div>
                {sortedPlayers.map((player, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-700/30 hover:bg-gradient-to-r hover:from-gray-800/50 hover:to-gray-700/50 transition-all duration-300 group px-6 py-6"
                  >
                    <div className="grid grid-cols-3 gap-4 items-center">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8">
                          {getRankIcon(index + 1)}
                        </div>
                        <span className={`text-xl font-bold ${
                          index === 0 ? 'text-yellow-400' : 
                          index === 1 ? 'text-gray-300' : 
                          index === 2 ? 'text-orange-400' : 
                          'text-white'
                        }`}>
                          #{index + 1}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full border-2 overflow-hidden ${
                          index === 0 ? 'border-yellow-400 shadow-lg shadow-yellow-400/30' : 
                          index === 1 ? 'border-gray-300 shadow-lg shadow-gray-300/30' : 
                          index === 2 ? 'border-orange-400 shadow-lg shadow-orange-400/30' : 
                          'border-gray-600'
                        } transition-all duration-300 group-hover:scale-110 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center`}>
                          {player.Avtar ? (
                            <img 
                              src={player.Avtar} 
                              alt={player.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="text-white font-semibold">
                              {player.name.charAt(0).toUpperCase()}
                            </span>
                          )}
                        </div>
                        <span className="text-white font-semibold text-lg group-hover:text-[#cef241] transition-colors duration-300">
                          {player.name}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className={`text-2xl font-bold ${
                          index === 0 ? 'text-yellow-400' : 
                          index === 1 ? 'text-gray-300' : 
                          index === 2 ? 'text-orange-400' : 
                          'text-white'
                        } group-hover:scale-110 transition-transform duration-300`}>
                          {player.totalScore?.toLocaleString() || 0}
                        </div>
                        <div className="text-gray-400 text-sm">points</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Empty state */}
          {sortedPlayers.length === 0 && (
            <div className="text-center py-12">
              <Trophy className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No players yet</h3>
              <p className="text-gray-500">Be the first to join the leaderboard!</p>
            </div>
          )}
        </div>

        {/* Top 3 Podium Section */}
        {sortedPlayers.length >= 3 && (
          <div className="mt-12 mb-8">
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-8">
              Top Champions
            </h2>
            <div className="flex justify-center items-end gap-8">
              {/* Second Place */}
              <div className="text-center">
                <div className="glass-card bg-gradient-to-br from-gray-700/30 to-gray-800/30 p-6 rounded-2xl border border-gray-600/50 hover-lift">
                  <div className="relative mb-4">
                    <div className="w-20 h-20 rounded-full border-4 border-gray-300 shadow-lg shadow-gray-300/30 mx-auto overflow-hidden bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center">
                      {sortedPlayers[1]?.Avtar ? (
                        <img 
                          src={sortedPlayers[1]?.Avtar} 
                          alt={sortedPlayers[1]?.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-white text-xl font-bold">
                          {sortedPlayers[1]?.name.charAt(0).toUpperCase()}
                        </span>
                      )}
                    </div>
                    <div className="absolute -top-2 -right-2">
                      <Medal className="w-8 h-8 text-gray-300 fill-gray-300" />
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">{sortedPlayers[1]?.name}</h3>
                  <p className="text-gray-300 font-semibold">{sortedPlayers[1]?.totalScore?.toLocaleString()} pts</p>
                </div>
              </div>

              {/* First Place */}
              <div className="text-center transform scale-110">
                <div className="glass-card bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-8 rounded-2xl border border-yellow-400/50 hover-lift pulse-glow">
                  <div className="relative mb-4">
                    <div className="w-24 h-24 rounded-full border-4 border-yellow-400 shadow-lg shadow-yellow-400/50 mx-auto overflow-hidden bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                      {sortedPlayers[0]?.Avtar ? (
                        <img 
                          src={sortedPlayers[0]?.Avtar} 
                          alt={sortedPlayers[0]?.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-white text-2xl font-bold">
                          {sortedPlayers[0]?.name.charAt(0).toUpperCase()}
                        </span>
                      )}
                    </div>
                    <div className="absolute -top-2 -right-2">
                      <Trophy className="w-10 h-10 text-yellow-400 fill-yellow-400" />
                    </div>
                  </div>
                  <h3 className="text-yellow-400 font-bold text-xl mb-1">{sortedPlayers[0]?.name}</h3>
                  <p className="text-yellow-300 font-bold text-lg">{sortedPlayers[0]?.totalScore?.toLocaleString()} pts</p>
                  <div className="mt-2 px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-400/30">
                    <span className="text-yellow-300 text-sm font-medium">Champion</span>
                  </div>
                </div>
              </div>

              {/* Third Place */}
              <div className="text-center">
                <div className="glass-card bg-gradient-to-br from-gray-700/30 to-gray-800/30 p-6 rounded-2xl border border-gray-600/50 hover-lift">
                  <div className="relative mb-4">
                    <div className="w-20 h-20 rounded-full border-4 border-orange-400 shadow-lg shadow-orange-400/30 mx-auto overflow-hidden bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                      {sortedPlayers[2]?.Avtar ? (
                        <img 
                          src={sortedPlayers[2]?.Avtar} 
                          alt={sortedPlayers[2]?.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-white text-xl font-bold">
                          {sortedPlayers[2]?.name.charAt(0).toUpperCase()}
                        </span>
                      )}
                    </div>
                    <div className="absolute -top-2 -right-2">
                      <Award className="w-8 h-8 text-orange-400 fill-orange-400" />
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">{sortedPlayers[2]?.name}</h3>
                  <p className="text-orange-300 font-semibold">{sortedPlayers[2]?.totalScore?.toLocaleString()} pts</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;