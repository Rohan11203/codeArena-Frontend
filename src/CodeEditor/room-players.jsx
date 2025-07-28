import React from 'react';
import { User } from "lucide-react";
import { useStore } from "../ContextAPi/store/ContextProvide";
import { motion } from "framer-motion";

export default function PlayersInRoom() {
  const { users } = useStore();

  // Handle cases where users might not be in the expected format
  const validUsers = Array.isArray(users) ? users.filter(u => u && typeof u === 'string') : [];

  return (
    <div className="p-4 h-full">
      <h2 className="text-xl font-bold text-white mb-4">Players in Room</h2>
      <div className="space-y-3 overflow-y-auto h-[calc(100%-2rem)]">
        {validUsers.length > 0 ? (
          validUsers.map((user, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center p-3 rounded-lg bg-[#1C1C1C] border border-gray-700"
            >
              <div className="w-8 h-8 rounded-full bg-yellow-400/20 flex items-center justify-center mr-3">
                <User size={16} className="text-yellow-300" />
              </div>
              <span className="font-medium text-white">{user}</span>
            </motion.div>
          ))
        ) : (
          <div className="text-center text-gray-500 pt-8">
            <p>No other players in the room.</p>
          </div>
        )}
      </div>
    </div>
  );
}
