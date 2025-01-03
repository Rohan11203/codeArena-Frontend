import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export const PulsingNavLink = () => {
  return (
    <div className="flex justify-center">
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <NavLink 
          to="/leaderboard" 
          className="relative px-6 py-2 text-lg font-semibold text-gray-300 hover:text-white transition-all duration-200 group"
        >
          <motion.span
            className="absolute inset-0 rounded-lg border border-gray-700 bg-gray-800/50 shadow-lg backdrop-blur-sm"
            initial={{ opacity: 0.5 }}
            animate={{
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <span className="relative">Leaderboard</span>
          
          {/* Glow effect */}
          <motion.span 
            className="absolute inset-0 rounded-lg bg-blue-500/20 blur-sm"
            animate={{
              opacity: [0, 0.2, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </NavLink>
      </motion.div>
    </div>
  );
};

