import React, { useEffect, useState } from "react";
import { User, Clock, Check, X, LogOut, Users, Loader2 } from "lucide-react";
import { useStore } from "../ContextAPi/store/ContextProvide";
import { useNavigate } from "react-router-dom";
import { getProblemById } from "../api/auth";
import { Navbar } from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";

const WaitingRoom = () => {
  const { users, wsRef, setProblemDetails, problemDetails } = useStore();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(15); // Start countdown from 15 seconds
  const [isFetchingProblem, setIsFetchingProblem] = useState(true);

  const onLeaveRoom = () => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.close();
    }
    navigate("/multiplayer");
  };

  useEffect(() => {
    const fetchProblemDetails = async () => {
      setIsFetchingProblem(true);
      try {
        const response = await getProblemById();
        setProblemDetails(response.data);
      } catch (error) {
        console.error("Error fetching problem details:", error);
      } finally {
        setIsFetchingProblem(false);
      }
    };

    fetchProblemDetails();
  }, [setProblemDetails]);

  useEffect(() => {
    if (!isFetchingProblem && problemDetails.problem) {
      const interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(interval);
            navigate(`/clashofcode/${problemDetails.problem._id}`);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isFetchingProblem, problemDetails, navigate]);

  const filledUsers = users.filter((u) => u.status !== "empty");
  const emptySlots = Array(4 - filledUsers.length).fill({ username: "Waiting for player...", status: "empty" });
  
  const displayUsers = [...filledUsers, ...emptySlots];

  return (
    <div className="min-h-screen w-screen bg-[#0A0A0A] text-white font-sans">
       <div className="pt-6 z-20 relative px-4">
        <Navbar />
      </div>

      <div className="flex justify-center items-center h-full py-12 px-4">
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-2xl bg-[#111111] border border-gray-800 rounded-2xl shadow-2xl shadow-yellow-400/10"
        >
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pb-6 border-b border-gray-800">
                <div>
                    <h1 className="text-2xl sm:text-3xl text-white font-bold">Waiting Room</h1>
                    <p className="text-gray-400">The clash will begin shortly...</p>
                </div>
              <div className="flex items-center space-x-2 text-yellow-400 bg-yellow-400/10 px-3 py-1.5 rounded-lg">
                <Users size={20} />
                <span className="font-semibold text-lg">
                  {filledUsers.length}/4
                </span>
              </div>
            </div>

            <div className="py-8">
              <div className="space-y-4">
                <AnimatePresence>
                    {displayUsers.map((user, index) => (
                    <motion.div
                        key={user.username + index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${user.status === 'empty' ? 'bg-gray-800/50' : 'bg-yellow-400/10 border border-yellow-400/20'}`}
                    >
                        <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${user.status === 'empty' ? 'bg-gray-700' : 'bg-yellow-400/20'}`}>
                            <User size={20} className={user.status === 'empty' ? 'text-gray-500' : 'text-yellow-300'}/>
                        </div>
                        <span className={`font-medium ${user.status === 'empty' ? 'text-gray-500 italic' : 'text-white'}`}>{user.username}</span>
                        </div>
                        {user.status !== 'empty' && <Check className="text-green-500" size={20} />}
                    </motion.div>
                    ))}
                </AnimatePresence>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-gray-800 gap-4">
              <div className="flex items-center gap-3 text-lg">
                {isFetchingProblem ? (
                    <>
                        <Loader2 className="animate-spin text-yellow-400" size={20} />
                        <span className="text-gray-400">Finding a problem...</span>
                    </>
                ): (
                    <>
                        <Clock className="text-yellow-400" size={20} />
                        <span>Starting in: <span className="font-bold text-white">{timeLeft}s</span></span>
                    </>
                )}
              </div>
              <button
                className="w-full sm:w-auto flex items-center justify-center bg-red-600/20 text-red-400 px-4 py-2 rounded-lg hover:bg-red-600/30 hover:text-red-300 transition-all duration-300"
                onClick={onLeaveRoom}
              >
                <LogOut size={16} className="mr-2" />
                Leave Room
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WaitingRoom;
