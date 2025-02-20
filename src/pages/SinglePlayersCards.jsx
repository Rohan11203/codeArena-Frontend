import Layout from "../components/Layout";
import CodeSimonImg from "../assets/codeSimon.png";
import FlexBoxImg from "../assets/flexGame.png";
import GridBoxImg from "../assets/gridGame.png";

import { NavLink } from "react-router-dom";
import { Layers } from "lucide-react";
import { Navbar } from "../components/Navbar";
import QuizArenaImg from "../assets/QuizArena.png"
export function SinglePlayersCard() {
  return (
    <div className="h-full bg-black px-12">
      <div className="pt-6 z-10 relative">
        <Navbar />
      </div>
      <div className="flex justify-evenly  gap-5 ">
        <NavLink to="/codeSimon" className="relative mt-10  h-80 w-full">
          <div className="absolute  inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center">
            <div className="bg-gray-600 border-1 border-green-800 p-4 rounded-2xl">
              <div className="flex gap-4 items-center">
                <Layers className="w-6 h-6" />
                <h2 className="font-bold text-2xl">Code Simon Arena</h2>
              </div>
              <h2 className="font-light "> Play and Earn Points</h2>
            </div>
          </div>
          <img
            className="w-full h-full object-cover rounded-xl"
            src={CodeSimonImg}
            alt="cardImage"
          />
        </NavLink>

        <NavLink to="/flexBox" className="relative mt-10  h-80 w-full">
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center">
            <div className="bg-green-600 border-1 border-blue-800 p-4 rounded-2xl">
              <div className="flex gap-4 items-center">
                <Layers className="w-6 h-6" />
                <h2 className="font-bold text-2xl">Flex Box Arena</h2>
              </div>
              <h2 className="font-light "> Play and Earn Points</h2>
            </div>
          </div>
          <img
            className="w-full h-full rounded-xl object-cover"
            src={FlexBoxImg}
            alt="cardImage"
          />
        </NavLink>
      </div>

      <div>
        <h1 className="text-white font-poppins text-2xl pt-5">
          Classic Puzzle - Easy
        </h1>
        <p className="text-white">
          Improve your skills by solving algorithmic puzzles
        </p>

        <div className="flex justify-evenly gap-5">
          <NavLink to={"/gridBox"} className="relative mt-10 h-60 w-96">
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center">
              <div className="bg-blue-600 border-1 border-blue-800 p-2 rounded-xl">
                <div className="flex gap-4 items-center">
                  <Layers className="w-6 h-6" />
                  <h2 className="font-bold text-xl">Grid Box Arena</h2>
                </div>
                <h4 className="font-light "> Play and Earn Points</h4>
              </div>
            </div>
            <img
              className="w-full h-full rounded-xl object-cover"
              src={GridBoxImg}
              alt="cardImage"
            />
          </NavLink>

          <NavLink to={"/quizarena"} className="relative mt-10 h-60 w-96">
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center">
              <div className="bg-purple-600 border-1 border-purple-800 p-2 rounded-xl">
                <div className="flex gap-4 items-center">
                  <Layers className="w-6 h-6" />
                  <h2 className="font-bold text-xl">Quiz  Arena</h2>
                </div>
                <h4 className="font-light "> Play and Earn Points</h4>
              </div>
            </div>
            <img
              className="w-full h-full rounded-xl object-cover"
              src={QuizArenaImg}
              alt="cardImage"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
