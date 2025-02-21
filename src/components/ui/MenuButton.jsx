import React, { useState } from "react";
import { MenuIcon } from "./MenuIcon";
import { useStore } from "../../ContextAPi/store/ContextProvide";
export const MenuButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { xp, level } = useStore();
  const experienceXp = xp / 10;
  const levelProgress = level * 10;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="">
      {/* Menu Button */}
      <button
        className="p-2 text-white rounded-md focus:outline-none"
        onClick={toggleMenu}
      >
        <MenuIcon />
      </button>

      {/* Navigation Links (displayed when menu is open) */}
      {isMenuOpen && (
        <nav className="absolute z-50 top-14 right-8 mt-4 bg-gray-800 text-white w-48 rounded-lg shadow-lg">
          <ul className="p-4">
            <li className="py-2 hover:bg-gray-600">
              <div className="relative group">
                <div className="cursor-pointer px-5  rounded-2xl transition-all duration-300  text-white flex items-center gap-2  group-hover:rounded-2xl">
                  Profile
                </div>

                <ul className="absolute right-0 mt-2 w-52 bg-black rounded-xl text-white font-medium shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300">
                  <li>
                    <a className="block px-4 py-2 hover:bg-[#b8d93a] rounded-t-xl">
                      Xp {xp}
                      <progress
                        className=" progress progress-success w-full bg-gray-800"
                        value={experienceXp}
                        max="100"
                      />
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 hover:bg-[#b8d93a] rounded-t-xl">
                      Level {level}
                      <progress
                        className=" progress progress-success w-full bg-gray-800"
                        value={level}
                        max="100"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="py-2 hover:bg-gray-600">
              <a href="/" className="block px-4">
                Home
              </a>
            </li>
            <li className="py-2 hover:bg-gray-600">
              <a href="#about" className="block px-4">
                About
              </a>
            </li>
            <li className="py-2 hover:bg-gray-600">
              <a href="/dashboard" className="block px-4">
                Dashboard
              </a>
            </li>
            <li className="py-2 hover:bg-gray-600">
              <a href="/singleplayer" className="block px-4">
                Singleplayer
              </a>
            </li>
            <li className="py-2 hover:bg-gray-600">
              <a href="/multiplayer" className="block px-4">
                Mulitiplayer
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};
