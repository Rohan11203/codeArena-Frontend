import React, { useEffect, useState } from "react";
import {
  Users,
  Share2,
  Loader2,
  Star,
  Gamepad,
  Info,
  HelpCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../ContextAPi/store/ContextProvide";
import { Navbar } from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import backImage from "../assets/backImage.jpg";

export default function ClashOfCode() {
  const [activeSection, setActiveSection] = useState("gameInfo");
  const [isConnecting, setIsConnecting] = useState(false);
  const navigate = useNavigate();
  const { wsRef, name, setUsers, roomId, fetchInfo } = useStore();

  useEffect(() => {
    fetchInfo();
  }, []);

  function handleMessage(data) {
    if (Array.isArray(data.users)) {
      setUsers(data.users);
      console.log("Updated users array:", data.users);
    } else {
      console.warn("Received data does not contain a valid users array:", data);
    }
  }

  const JoinRoom = () => {
    if (!name || !roomId) {
      console.error("Username or Room ID is missing.");
      return;
    }

    setIsConnecting(true);
    wsRef.current = new WebSocket("wss://codearena-server.onrender.com");
    wsRef.current.onopen = () => {
      console.log("Connected to the server");
      wsRef.current.send(
        JSON.stringify({
          type: "join",
          username: name,
          roomId: roomId,
        })
      );
    };

    wsRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("Received data:", data);
      if (data.type === "userList") {
        handleMessage(data);
      }
      wsRef.current.onerror = (error) => {
        console.log("WebSocket Error:", error);
        setIsConnecting(false);
      };
      navigate(`/clashofcode1/${roomId}`);
      setIsConnecting(false);
    };

    wsRef.current.onclose = () => {
      console.log("WebSocket connection closed.");
      setIsConnecting(false);
    };
  };

  const TabButton = ({ section, children }) => (
    <button
      className={`relative px-4 py-3 font-medium text-sm sm:text-base transition-colors ${
        activeSection === section
          ? "text-white"
          : "text-gray-400 hover:text-white"
      }`}
      onClick={() => setActiveSection(section)}
    >
      {children}
      {activeSection === section && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400"
          layoutId="underline"
        />
      )}
    </button>
  );

  return (
    <div className="min-h-screen bg-[#0A0A0A] font-sans text-white">
      <div className="pt-6 z-20 relative px-4">
        <Navbar />
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden mb-12"
        >
          <img
            src={backImage}
            alt="Clash of Code background"
            className="w-full h-60 sm:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col items-start justify-end p-6 sm:p-10">
            <h1 className="text-3xl sm:text-5xl font-bold text-white drop-shadow-lg">
              CLASH OF CODE
            </h1>
            <p className="flex items-center text-gray-200 mt-2">
              <Users className="mr-2" size={18} />
              124,687 Players in the leaderboard
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-grow">
            {/* Navigation */}
            <div className="flex border-b border-gray-800 mb-8">
              <TabButton section="gameInfo">
                <Info className="inline mr-2 w-4 h-4" /> Game Info
              </TabButton>
              <TabButton section="howToPlay">
                <HelpCircle className="inline mr-2 w-4 h-4" /> How to Play
              </TabButton>
            </div>
            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {activeSection === "gameInfo" && (
                  <div className="space-y-6 text-gray-300">
                    <div>
                      <h2 className="text-xl font-bold text-white mb-2">
                        WHAT'S THIS GAME?
                      </h2>
                      <p>
                        Clash of Code is a game to improve your coding
                        efficiency by solving short programming problems with
                        other people, at the same time. Players share their
                        solution at the end of a game to help other players
                        improve their coding skills.
                      </p>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white mb-2">
                        WHAT'S THE PURPOSE?
                      </h2>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Star className="text-yellow-400 mr-3 mt-1 w-4 h-4 flex-shrink-0" />{" "}
                          Improve your problem-solving skills
                        </li>
                        <li className="flex items-start">
                          <Star className="text-yellow-400 mr-3 mt-1 w-4 h-4 flex-shrink-0" />{" "}
                          Learn from other people's code
                        </li>
                        <li className="flex items-start">
                          <Star className="text-yellow-400 mr-3 mt-1 w-4 h-4 flex-shrink-0" />{" "}
                          Practice coding interview questions
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
                {activeSection === "howToPlay" && (
                  <div className="space-y-4 text-gray-300">
                    <h2 className="text-xl font-bold text-white mb-2">
                      HOW TO PLAY
                    </h2>
                    <ol className="list-decimal list-inside space-y-2">
                      <li>
                        Join a clash by clicking the "JOIN A CLASH" button.
                      </li>
                      <li>
                        Wait for other players to join (up to 8 players per
                        clash).
                      </li>
                      <li>
                        When the clash starts, read the problem statement
                        carefully.
                      </li>
                      <li>Write your code solution in the provided editor.</li>
                      <li>
                        Submit your solution before the time runs out (usually
                        5-15 minutes).
                      </li>
                      <li>
                        After the clash ends, review other players' solutions to
                        learn new approaches.
                      </li>
                    </ol>
                    <p className="pt-2 text-yellow-300/80">
                      Remember, speed and accuracy are both important in Clash
                      of Code!
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Sidebar */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6">
              <div className="text-center">
                <Gamepad className="text-yellow-400 mx-auto mb-3" size={32} />
                <h3 className="text-lg font-bold text-white">
                  Join a 5-min coding battle!
                </h3>
                <p className="text-sm text-gray-400 mb-6">
                  Starting in{" "}
                  <span className="text-yellow-400 font-semibold">00:27</span>
                </p>
                <button
                  onClick={JoinRoom}
                  disabled={isConnecting}
                  className="w-full bg-yellow-400 text-black font-bold py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-yellow-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
                >
                  {isConnecting ? (
                    <>
                      <Loader2 className="mr-2 animate-spin" size={20} />
                      Joining...
                    </>
                  ) : (
                    "JOIN A CLASH"
                  )}
                </button>
              </div>
              <div className="flex items-center justify-center gap-2 mt-6">
                <button className="flex items-center text-sm text-gray-400 hover:text-white transition-colors">
                  <Share2 className="mr-2" size={16} /> Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
