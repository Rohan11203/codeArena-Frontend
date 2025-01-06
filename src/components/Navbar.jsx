import { Link, NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import { PulsingNavLink } from "./PulseLeaderBoard"
import { useStore } from "../ContextAPi/store/ContextProvide"
import GetProfile from "./get-profile"
import Logout from "./logout"
import GetProfileInfo from "./get-profile"

export const Navbar = () => {
  const { isAuth } = useStore();
  return (
    <div className="bg-black">
      <nav className="pt-5 ">
      <div className=" max-w-7xl mx-auto px-6">
        <div className="border border-gray-500 flex items-center justify-between rounded-xl h-16">
          {/* Logo/Brand */}
          <div className="pl-5 w-1/3">
            <NavLink 
              to="/" 
              className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r text-white transition-all duration-300"
            >
              CodeArena
            </NavLink>
          </div>

          <PulsingNavLink />

          {/* Auth Buttons */}
          <div className="w-1/3 pr-5 flex justify-end space-x-4">
            <NavLink 
              to="/login"
              className="px-5 py-2.5 text-sm font-medium text-gray-300 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-200"
            >
              { isAuth ? <GetProfileInfo /> : "Login" }
            </NavLink>
            <NavLink 
              to="/register"
              className="px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-blue-800 to-blue-400 rounded-lg hover:from-blue-500 hover:to-blue-500 transition-all duration-200 shadow-lg shadow-purple-900/20"
            >
              { isAuth ? <Logout /> : "Register"  }
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

