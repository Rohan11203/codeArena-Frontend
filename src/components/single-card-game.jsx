import Layout from "./Layout";
import image from "../assets/frog_flex.png";

import { NavLink } from "react-router-dom";

export function SingleCard() {
  return (
    <Layout>
      <div className="bg-black px-12 h-screen">
        <div className="flex justify-evenly  gap-5 ">
          <NavLink to="/froggy" className="relative mt-10  h-80 w-full">
            <div className="absolute  inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center">
              <div className="bg-green-600 border-1 border-green-800 p-4 rounded-2xl">
                <h2 className="font-bold text-2xl">Flex Box Arena</h2>
                <h2 className="font-light "> Play and Earn Points</h2>
              </div>
            </div>
            <img
              className="w-full h-full object-cover rounded-xl"
              src={image}
              alt="cardImage"
            />
          </NavLink>

          <NavLink to="/gridBox" className="relative mt-10  h-80 w-full">
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center">
            <div className="bg-blue-600 border-1 border-blue-800 p-4 rounded-2xl">
                <h2 className="font-bold text-2xl">GridBox Arena</h2>
                <h2 className="font-light "> Play and Earn Points</h2>
              </div>
            </div>
            <img
              className="w-full h-full rounded-xl object-cover"
              src={image}
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

            <NavLink className="relative mt-10 h-60 w-96">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center">
                <div>
                  <h2>Info Abooue the card</h2>
                  <h2>Info Abooue the card</h2>
                </div>
              </div>
              <img
                className="w-full h-full rounded-xl object-cover"
                src={image}
                alt="cardImage"
              />
            </NavLink>

            <NavLink className="relative mt-10 h-60 w-96">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center">
                <div>
                  <h2>Info Abooue the card</h2>
                  <h2>Info Abooue the card</h2>
                </div>
              </div>
              <img
                className="w-full h-full rounded-xl object-cover"
                src={image}
                alt="cardImage"
              />
            </NavLink>

          </div>
        </div>
      </div>
    </Layout>
  );
}
