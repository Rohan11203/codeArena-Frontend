import { Star } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useStore } from "../ContextAPi/store/ContextProvide";
import { updateInfo } from "../api/auth";
import { Navbar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const codeRounds = [
  `console.log("Start");`,
  `let a = 10;`,
  `if (a > 5) console.log("Big");`,
  `for (let i = 0; i < 3; i++) console.log(i);`,
  `const double = (n) => n * 2;\nconsole.log(double(a));`,
  `let arr = [1, 2, 3];\nconsole.log(arr.map(double));`,
  `function greet(name) {\n  return \`Hello, \${name}!\`;\n}\nconsole.log(greet("CodeArena"));`,
  `let obj = { x: 1, y: 2, z: 3 };\nconsole.log(Object.keys(obj).join(", "));`,
];

export default function CodeSimonSays() {
  const [round, setRound] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [showCode, setShowCode] = useState(true);
  const { xp, setXp, fetchInfo } = useStore();
  const [points, setPoints] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchInfo();
  }, []);

  useEffect(() => {
    setShowCode(true);
    setTimeout(() => setShowCode(false), 8000); // Show code for 4 seconds
    setUserInput(""); // Clear input for the new round
  }, [round]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const IncreaseXp = async () => {
    const newXp = (xp || 0) + points;
    const updateData = { totalScore: newXp };

    // Call API after updating XP
    updateInfo(updateData).catch(console.error);
  };

  const checkAnswer = () => {
    const correctCode = codeRounds.slice(0, round + 1).join("\n");
    if (userInput.trim() === correctCode.trim()) {
      if (round < codeRounds.length - 1) {
        setRound(round + 1);
        setPoints(points + 5);
      } else {
        alert("🎉 You won! You're the Code Champion!");
      }
    } else {
      setGameOver(true);
    }
  };

  const CollectPoints = () => {
    IncreaseXp();
    navigate("/dashboard")
    
  }

  const restartGame = () => {
    IncreaseXp();
    setRound(0);
    setUserInput("");
    setGameOver(false);
    setShowCode(true);
  };

  return (
    <div className="bg-[#121212] h-screen">
      <div className="pt-8">
        <Navbar />
      </div>
      <div className="flex flex-col items-center  justify-center h-full bg-[#121212] text-white">
        <div className="flex gap-8">
          <h2 className="text-2xl font-bold mb-4">🕹️ Code Simon Says</h2>
          <div className="flex h-10 w-42 items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-medium">
              Points : {points}
            </span>
          </div>
        </div>

        {gameOver ? (
          <div className="bg-red-600 p-8 rounded-lg text-center border">
            <h3 className="text-xl font-bold">❌ Game Over!</h3>
            <p className="mb-3">You made a mistake. Try again!</p>
            <button
              onClick={restartGame}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
            >
              🔄 Restart
            </button>

            <button
              onClick={CollectPoints}
              className="px-4 py-2 mx-4 bg-green-600 text-white rounded-md hover:bg-green-500"
            >
              Collect Points
            </button>
          </div>
        ) : (
          <>
            <div className="bg-gray-800 p-4 rounded-lg max-w-md w-full text-center mb-4">
              <h3 className="text-lg font-semibold">Round {round + 1}</h3>
              {showCode ? (
                <pre
                  onCopy={(e) => e.preventDefault()} // Prevent copying
                  className="bg-gray-700 p-2 rounded-md text-green-400"
                >
                  {codeRounds.slice(0, round + 1).join("\n")}
                </pre>
              ) : (
                <p className="text-yellow-400">
                  Code is now hidden! Enter it below:
                </p>
              )}
            </div>

            <textarea
              rows={8}
              placeholder="Repeat the code exactly..."
              value={userInput}
              onChange={handleInputChange}
                onPaste={(e) => e.preventDefault()} // Prevent pasting
                onCopy={(e) => e.preventDefault()} // Prevent copying
              className="w-full max-w-md bg-gray-800 text-white p-2 rounded-md border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500"
            />

            <button
              onClick={checkAnswer}
              className="px-4 py-2 bg-green-600 text-white rounded-md mt-3 hover:bg-green-500"
            >
              ✅ Submit
            </button>
          </>
        )}
      </div>
    </div>
  );
}
