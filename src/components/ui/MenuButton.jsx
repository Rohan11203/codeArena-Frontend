import React, { useState } from "react";
import { MenuIcon } from "./MenuIcon";
import { useStore } from "../../ContextAPi/store/ContextProvide";
import { onLogout } from "../../api/auth";
import { useNavigate } from "react-router-dom";
export const MenuButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { xp, level } = useStore();
  const experienceXp = xp / 10;
  const levelProgress = level * 10;
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () =>{
    onLogout();
    navigate("/");
  }


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
            <li className="py-2 hover:bg-gray-600 px-4">
              <div className="dropdown dropdown-left">
                <div tabIndex={0} role="button" className="">
                  Profile
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-black rounded-box z-[1] w-52 p-2"
                >
                  <li>
                    <a>Xp {xp}</a>
                  </li>
                  <progress
                    className="progress progress-warning w-full bg-gray-800"
                    value={experienceXp}
                    max="100"
                  />
                  <li>
                    <a>Level {levelProgress}</a>
                  </li>
                  <progress
                      className="progress progress-success w-full bg-gray-800"
                      value={levelProgress}
                      max="100"
                    />
                    <li className="p-2">
                      <button onClick={handleLogout} className="bg-[#cef241] text-black hover:bg-yellow-200">Logout</button>
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
