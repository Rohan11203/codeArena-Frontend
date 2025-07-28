import { Trophy, Medal, Award } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { useEffect, useState } from "react";
import { getLeaderBoardData } from "../api/auth";
import { motion } from "framer-motion";

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
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderBoardData = async () => {
      try {
        const res = await getLeaderBoardData();
        // Sort players by totalScore in descending order
        const sortedData = res.data.Users.sort(
          (a, b) => (b.totalScore || 0) - (a.totalScore || 0)
        );
        setPlayers(sortedData);
      } catch (error) {
        console.error("Failed to fetch leaderboard data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLeaderBoardData();
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white px-4 sm:px-6 lg:px-8 pb-20 font-sans">
      <div className="pt-6 z-20 relative">
        <Navbar />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto pt-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-4">
            CodeArena Leaderboard
          </h1>
          <p className="text-gray-400 text-lg">
            See who's dominating the coding challenges.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-yellow-400"></div>
          </div>
        ) : players.length > 0 ? (
          <>
            {/* Top 3 Podium Section */}
            {players.length >= 3 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center items-end gap-4 sm:gap-8 mb-16"
              >
                {/* Second Place */}
                <PodiumCard player={players[1]} rank={2} />
                {/* First Place */}
                <PodiumCard player={players[0]} rank={1} />
                {/* Third Place */}
                <PodiumCard player={players[2]} rank={3} />
              </motion.div>
            )}

            {/* Leaderboard Table */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#111111] border border-gray-800 rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="w-full">
                {/* Table Header */}
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 font-bold text-sm text-gray-400 uppercase px-6 py-4 border-b border-gray-800">
                  <div className="col-span-1">Rank</div>
                  <div className="col-span-1">Player</div>
                  <div className="hidden sm:block text-right">Level</div>
                  <div className="col-span-1 text-right">Score</div>
                </div>
                {/* Table Body */}
                <div>
                  {players.map((player, index) => (
                    <PlayerRow
                      key={player._id || index}
                      player={player}
                      rank={index + 1}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        ) : (
          <div className="text-center py-16 bg-[#111111] border border-gray-800 rounded-2xl">
            <Trophy className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              The Leaderboard is Empty
            </h3>
            <p className="text-gray-500">Be the first to make your mark!</p>
          </div>
        )}
      </div>
    </div>
  );
};

const PodiumCard = ({ player, rank }) => {
  const styles = {
    1: {
      scale: "scale-110",
      borderColor: "border-yellow-400",
      shadow: "shadow-yellow-400/30",
      bgColor: "bg-yellow-400/10",
      textColor: "text-yellow-300",
    },
    2: {
      scale: "scale-100",
      borderColor: "border-gray-400",
      shadow: "shadow-gray-400/20",
      bgColor: "bg-gray-400/10",
      textColor: "text-gray-300",
    },
    3: {
      scale: "scale-90",
      borderColor: "border-orange-400",
      shadow: "shadow-orange-400/20",
      bgColor: "bg-orange-400/10",
      textColor: "text-orange-300",
    },
  };

  const rankStyle = styles[rank];

  if (!player) return null;

  return (
    <div
      className={`text-center transition-transform duration-300 transform ${rankStyle.scale} overflow-x-hidden`}
    >
      <div
        className={`bg-[#1C1C1C] ${rankStyle.bgColor} p-4 sm:p-6 rounded-t-2xl border-t-4 ${rankStyle.borderColor} shadow-2xl ${rankStyle.shadow}`}
      >
        <div className="relative mb-3">
          <div
            className={`w-16 h-16 sm:w-20 sm:w-20 rounded-full border-4 ${rankStyle.borderColor} mx-auto overflow-hidden bg-gray-800 flex items-center justify-center`}
          >
            <img
              src={
                player.Avtar ||
                `https://api.dicebear.com/6.x/initials/svg?seed=${player.name}`
              }
              alt={player.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-3 -right-3">{getRankIcon(rank)}</div>
        </div>
        <h3
          className={`font-bold text-md sm:text-lg mb-1 truncate max-w-[120px] ${rankStyle.textColor}`}
        >
          {player.name}
        </h3>
        <p className={`font-semibold text-sm ${rankStyle.textColor}`}>
          {player.totalScore?.toLocaleString() || 0} pts
        </p>
      </div>
    </div>
  );
};

const PlayerRow = ({ player, rank }) => (
  <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 items-center px-6 py-4 border-b border-gray-800/50 hover:bg-gray-800/50 transition-colors duration-200">
    <div className="flex items-center gap-4">
      <span
        className={`text-lg font-bold w-6 text-center ${
          rank <= 3 ? "text-yellow-400" : "text-gray-400"
        }`}
      >
        {rank}
      </span>
    </div>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-700 flex-shrink-0">
        <img
          src={
            player.Avtar ||
            `https://api.dicebear.com/6.x/initials/svg?seed=${player.name}`
          }
          alt={player.name}
          className="w-full h-full object-cover"
        />
      </div>
      <span className="font-semibold truncate">{player.name}</span>
    </div>
    <div className="hidden sm:block text-right font-medium text-gray-300">
      {player.level || 1}
    </div>
    <div className="text-right font-bold text-yellow-400 text-lg">
      {player.totalScore?.toLocaleString() || 0}
    </div>
  </div>
);

export default Leaderboard;
