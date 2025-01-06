import React, { useState } from "react";
import { motion } from "framer-motion";

const PricingCards = () => {
  const [isMiddleHovered, setIsMiddleHovered] = useState(false);

  const cardHoverEffect = {
    hover: (direction) => ({
      rotate: direction === "left" ? -10 : direction === "right" ? 10 : 0,
      scale: direction === "middle" ? 1.1 : 1.05,
      transition: { duration: 0.4, ease: "easeInOut" },
    }),
    initial: (direction) => ({
      rotate: direction === "left" ? -5 : direction === "right" ? 5 : 0,
      scale: 1,
    }),
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="flex -space-x-10">
        {/* Left Card */}
        <motion.div
          className="w-70 h-80 opacity-60 bg-blue-900 rounded-xl shadow-lg shadow-blue-900/40 pt-6 pl-2"
          variants={cardHoverEffect}
          animate={isMiddleHovered ? cardHoverEffect.hover("left") : cardHoverEffect.initial("left")}
        >
          <h2 className="text-2xl text-white font-semibold">Basic Plan</h2>
          <p className="mt-4 text-gray-300">Some details about the basic plan.</p>
          <div className="absolute bottom-6 text-gray-300">$</div>
        </motion.div>

        {/* Middle Card */}
        <motion.div
          className="w-80 h-96 bg-blue-700 rounded-xl shadow-lg shadow-blue-700/40 pt-6 pl-2 z-10"
          variants={cardHoverEffect}
          initial={cardHoverEffect.initial("middle")}
          whileHover="hover"
          custom="middle"
          onHoverStart={() => setIsMiddleHovered(true)}
          onHoverEnd={() => setIsMiddleHovered(false)}
        >
          <h2 className="text-2xl text-white font-semibold">Pro Plan</h2>
          <p className="mt-4 text-gray-300">Some details about the pro plan.</p>
          <div className="absolute bottom-6 text-gray-300">₹</div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          className="w-70 h-96 opacity-60 bg-blue-900 rounded-xl shadow-lg shadow-blue-900/40 pt-6 pl-2"
          variants={cardHoverEffect}
          animate={isMiddleHovered ? cardHoverEffect.hover("right") : cardHoverEffect.initial("right")}
        >
          <h2 className="text-2xl text-white font-semibold">Premium Plan</h2>
          <p className="mt-4 text-gray-300">Some details about the premium plan.</p>
          <div className="absolute bottom-6 text-gray-300">€</div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingCards;
