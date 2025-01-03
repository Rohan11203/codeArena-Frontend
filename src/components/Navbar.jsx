import { Link, NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import { PulsingNavLink } from "./PulseLeaderBoard"

export const Navbar = () => {
  return (
    <nav className="bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <div className="w-1/3">
            <NavLink 
              to="/" 
              className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-300 hover:to-pink-300 transition-all duration-300"
            >
              CodeArena
            </NavLink>
          </div>

          <PulsingNavLink />

          {/* Auth Buttons */}
          <div className="w-1/3 flex justify-end space-x-4">
            <NavLink 
              to="/login"
              className="px-5 py-2.5 text-sm font-medium text-gray-300 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-200"
            >
              Login
            </NavLink>
            <NavLink 
              to="/register"
              className="px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg shadow-purple-900/20"
            >
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}