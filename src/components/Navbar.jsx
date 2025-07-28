import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useStore } from "../ContextAPi/store/ContextProvide";
import { Brain, ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const { isAuth } = useStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlayDropdownOpen, setPlayDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", action: scrollToAbout },
    { name: "Leaderboard", path: "/leaderboard" },
  ];

  const playLinks = [
    { name: "Single Player", path: "/singleplayer" },
    { name: "Multiplayer", path: "/multiplayer" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, y: -20 }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    exit: { opacity: 0, y: 10, scale: 0.95, transition: { duration: 0.15, ease: "easeIn" } }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-4 z-50"
    >
      <div className="max-w-4xl mx-auto px-4">
        <nav className="bg-[#111111]/80 backdrop-blur-sm border border-gray-800 flex justify-between items-center p-3 rounded-2xl text-white shadow-lg">
          {/* Logo */}
          <NavLink to={"/"} className="text-xl font-bold flex gap-2 items-center flex-shrink-0">
            <span className="text-yellow-400">
              <Brain />
            </span>
            CodeArena
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path || "#"}
                onClick={link.action}
                className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              >
                {link.name}
              </NavLink>
            ))}

            {/* Play Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPlayDropdownOpen(true)}
              onMouseLeave={() => setPlayDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
                Play <ChevronDown className={`w-4 h-4 transition-transform ${isPlayDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isPlayDropdownOpen && (
                  <motion.ul
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute z-10 right-0 mt-2 w-48 bg-[#1A1A1A] border border-gray-700 rounded-xl shadow-2xl shadow-black/40 text-sm overflow-hidden"
                  >
                    {playLinks.map(link => (
                        <li key={link.name}>
                        <NavLink
                            to={link.path}
                            className="block w-full text-left px-4 py-3 text-gray-300 hover:bg-yellow-400 hover:text-black transition-colors"
                        >
                            {link.name}
                        </NavLink>
                        </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <NavLink
              to={isAuth ? "/dashboard" : "/login"}
              className="hidden sm:inline-block bg-yellow-400 text-black font-bold py-2 px-5 rounded-lg text-sm transition-transform transform hover:scale-105 hover:bg-yellow-300"
            >
              {isAuth ? "Dashboard" : "Login"}
            </NavLink>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden absolute top-[calc(100%+0.5rem)] left-0 w-full px-4"
          >
            <div className="bg-[#111111] border border-gray-800 rounded-2xl p-4 flex flex-col gap-2 text-white">
                {navLinks.map((link) => (
                    <motion.div variants={menuItemVariants} key={link.name}>
                        <NavLink to={link.path || "#"} onClick={link.action} className="block px-4 py-3 hover:bg-gray-800 rounded-lg">
                            {link.name}
                        </NavLink>
                    </motion.div>
                ))}
                <motion.div variants={menuItemVariants} className="border-t border-gray-700 pt-2 mt-2">
                    <h3 className="px-4 py-2 text-sm text-gray-500">Play</h3>
                     {playLinks.map((link) => (
                        <NavLink key={link.name} to={link.path} className="block px-4 py-3 hover:bg-gray-800 rounded-lg">
                            {link.name}
                        </NavLink>
                    ))}
                </motion.div>
                 <motion.div variants={menuItemVariants} className="mt-4">
                     <NavLink
                        to={isAuth ? "/dashboard" : "/login"}
                        className="block w-full text-center bg-yellow-400 text-black font-bold py-3 px-5 rounded-lg text-sm transition-transform transform hover:scale-105 hover:bg-yellow-300"
                    >
                        {isAuth ? "Dashboard" : "Login"}
                    </NavLink>
                 </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
