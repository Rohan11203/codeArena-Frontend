import { NavLink } from "react-router-dom";
import { Layers, Star, Trophy, Zap } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { motion } from "framer-motion";

import CodeSimonImg from "../assets/codeSimon.png";

import FlexBoxImg from "../assets/QuizArena.png";

import GridBoxImg from "../assets/gridGame.png";

import QuizArenaImg from "../assets/QuizArena.png";

const GameCard = ({ to, image, title, description, isFeatured = false }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-full sm:w-80"
    >
      <NavLink
        to={to}
        className="group block relative overflow-hidden rounded-2xl bg-[#111111] border border-gray-800 hover:border-yellow-400/50 transition-all duration-300 shadow-lg hover:shadow-yellow-400/20"
      >
        <img
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
          src={image}
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-5">
          {isFeatured && (
            <div className="inline-block mb-2 px-3 py-1 text-xs font-semibold text-yellow-900 bg-yellow-400 rounded-full">
              Featured
            </div>
          )}
          <h3 className="text-white font-bold text-xl">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 backdrop-blur-sm">
          <div className="text-center">
            <p className="text-yellow-400 font-bold text-lg">Play Now</p>
            <p className="text-white text-sm">Challenge your skills!</p>
          </div>
        </div>
      </NavLink>
    </motion.div>
  );
};

export function SinglePlayersCard() {
  const featuredGames = [
    {
      to: "/codeSimon",
      image: CodeSimonImg,
      title: "Code Simon Arena",
      description: "Memory & coding skills",
    },
    {
      to: "/quizarena",
      image: QuizArenaImg,
      title: "Quiz Arena",
      description: "Compete in knowledge",
    },
  ];

  const classicPuzzles = [
    {
      to: "/gridBox",
      image: GridBoxImg,
      title: "Grid Box Arena",
      description: "Master CSS Grid",
    },
    {
      to: "/flexbox",
      image: FlexBoxImg,
      title: "Flex Arena",
      description: "Learn flexible layouts",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white px-4 sm:px-6 lg:px-8 pb-20">
      <div className="pt-6 z-20 relative">
        <Navbar />
      </div>

      <main className="max-w-6xl mx-auto mt-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent mb-4"
          >
            Single Player Arena
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Hone your skills and climb the ranks with our collection of solo
            challenges.
          </motion.p>
        </div>

        {/* Featured Games */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Featured Games
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {featuredGames.map((game) => (
              <GameCard key={game.to} {...game} isFeatured={true} />
            ))}
          </div>
        </section>

        {/* Classic Puzzles */}
        <section className="mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Classic Puzzles
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {classicPuzzles.map((game) => (
              <GameCard key={game.to} {...game} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
