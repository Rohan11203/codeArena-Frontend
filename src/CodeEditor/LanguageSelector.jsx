import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LanguageSelector = ({ language, onSelect }) => {
    const languages = Object.entries({
        javascript: "18.15.0",
        python: "3.10.0",
        java: "15.0.2",
        csharp: "6.12.0",
    });
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex items-center justify-center w-full rounded-lg border border-gray-700 shadow-sm px-4 py-2 bg-[#1C1C1C] text-sm font-medium text-white hover:bg-gray-700 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {language}
                    <ChevronDown className="-mr-1 ml-2 h-5 w-5" />
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-[#1C1C1C] ring-1 ring-black ring-opacity-5 z-50"
                        onMouseLeave={() => setIsOpen(false)}
                    >
                        <div className="py-1" role="menu" aria-orientation="vertical">
                            {languages.map(([lang, version]) => (
                                <a
                                    href="#"
                                    key={lang}
                                    className={`block px-4 py-2 text-sm ${
                                        lang === language
                                            ? "bg-yellow-400/10 text-yellow-300"
                                            : "text-gray-300 hover:bg-gray-700"
                                    }`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onSelect(lang);
                                        setIsOpen(false);
                                    }}
                                    role="menuitem"
                                >
                                    {lang} <span className="text-gray-500 text-xs">({version})</span>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LanguageSelector;
