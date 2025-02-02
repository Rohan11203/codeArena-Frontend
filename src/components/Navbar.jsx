import { Link, NavLink } from "react-router-dom";
import { useStore } from "../ContextAPi/store/ContextProvide";
import Logout from "./logout";
import GetProfileInfo from "./get-profile";
import { useState } from 'react'
export const Navbar = () => {
  const { isAuth } = useStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

const toggleMenu = () => {
  setIsMobileMenuOpen(!isMobileMenuOpen);
};
  return (
    <div className="bg-black  h-fit ">
  <nav className="pt-5 pb-2">
    <div className="max-w-7xl mx-auto px-6">
      <div className="border border-gray-800 flex items-center justify-between rounded-xl h-16">
        {/* Logo */}
        <div className="pl-5 w-1/3">
          <NavLink
            to="/"
            className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r text-white transition-all duration-300 lg:text-3xl"
          >
            CodeArena
          </NavLink>
        </div>

        {/* Menu Button for Mobile */}
        <div className="lg:hidden flex items-center pr-5">
          <button className="text-white" onClick={toggleMenu}>
            ☰
          </button>
        </div>

        <div className="hidden lg:flex pr-2 justify-end space-x-4">
          <NavLink
            to="/login"
            className="p-2 ml-2 text-sm font-medium text-gray-300 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-200 lg:px-5 lg:py-2.5"
          >
            {isAuth ? <GetProfileInfo /> : "Login"}
          </NavLink>
          <NavLink
            to="/register"
            className="px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg hover:from-blue-500 hover:to-blue-500 transition-all duration-200 shadow-lg shadow-purple-900/20"
          >
            {isAuth ? <Logout /> : "Register"}
          </NavLink>

          {isAuth && (
            <div className="dropdown dropdown-bottom z-30">
              <div
                tabIndex={0}
                role="button"
                className="px-5 py-2.5 text-sm font-bold text-black bg-white rounded-lg shadow-lg shadow-purple-900/20"
              >
                Play
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <NavLink
                  to="/singleplayer"
                  className="px-5 py-2.5 mb-2 text-sm font-bold text-white bg-gradient-to-r from-gray-800 to-black rounded-lg hover:from-gray-900 hover:to-black transition-all duration-200 shadow-lg shadow-purple-900/20"
                >
                  SinglePlayer
                </NavLink>
                <NavLink
                  to="/multiplayer"
                  className="px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-gray-800 to-black rounded-lg hover:from-gray-900 hover:to-black transition-all duration-200 shadow-lg shadow-purple-900/20"
                >
                  MultiPlayer
                </NavLink>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <NavLink
          to="/login"
          className="block text-sm font-medium text-gray-300 bg-gray-900 rounded-lg hover:bg-gray-800 px-5 py-2.5 my-2"
        >
          {isAuth ? <GetProfileInfo /> : "Login"}
        </NavLink>
        <NavLink
          to="/register"
          className="block text-sm font-bold text-white bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg hover:from-blue-500 hover:to-blue-500 px-5 py-2.5 my-2"
        >
          {isAuth ? <Logout /> : "Register"}
        </NavLink>

        {isAuth && (
          <div className="dropdown dropdown-bottom z-30">
            <div
              tabIndex={0}
              role="button"
              className="block text-sm font-bold text-black bg-white rounded-lg px-5 py-2.5 my-2"
            >
              Play
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <NavLink
                to="/singleplayer"
                className="block text-sm font-bold text-white bg-gradient-to-r from-gray-800 to-black rounded-lg hover:from-gray-900 hover:to-black px-5 py-2.5 my-2"
              >
                SinglePlayer
              </NavLink>
              <NavLink
                to="/multiplayer"
                className="block text-sm font-bold text-white bg-gradient-to-r from-gray-800 to-black rounded-lg hover:from-gray-900 hover:to-black px-5 py-2.5 my-2"
              >
                MultiPlayer
              </NavLink>
            </ul>
          </div>
        )}
      </div>
    </div>
  </nav>
</div>

  );
};
