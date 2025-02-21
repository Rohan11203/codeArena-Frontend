import React, { useState, useEffect } from "react";
import {
  Brain,
  CheckCircle2,
  XCircle,
  Trophy,
  Timer,
  ArrowRight,
  Clock,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { updateInfo } from "../api/auth";
import { useStore } from "../ContextAPi/store/ContextProvide";
import { jsQuizQuestions } from "./Levels/quizArenaLevels";
import { useNavigate } from "react-router-dom";

const QUESTION_TIME_LIMIT = 30; // Time limit in seconds per question



const QuizArena = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME_LIMIT);
  const [totalTime, setTotalTime] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(true);
  const { xp, setXp, fetchInfo } = useStore();
  const navigate = useNavigate();
  useEffect(() => {
    fetchInfo();
  }, []);

  useEffect(() => {
    let timer;
    if (isTimerActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
        setTotalTime((prev) => prev + 1);
      }, 1000);
    } else if (timeLeft === 0 && !selectedAnswer) {
      handleTimeUp();
    }

    return () => clearInterval(timer);
  }, [timeLeft, isTimerActive]);

  const handleTimeUp = () => {
    setIsTimerActive(false);
    setSelectedAnswer(-1); // Special value for timeout

    setTimeout(() => {
      if (currentQuestion < jsQuizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setTimeLeft(QUESTION_TIME_LIMIT);
        setIsTimerActive(true);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const handleAnswer = (isCorrect, optionId) => {
    setIsTimerActive(false);
    setSelectedAnswer(optionId);

    setTimeout(() => {
      if (isCorrect) {
        setScore(score + 5);
      }

      if (currentQuestion < jsQuizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setTimeLeft(QUESTION_TIME_LIMIT);
        setIsTimerActive(true);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const IncreaseXp = async () => {
    const newXp = (xp || 0) + score;
    const updateData = { totalScore: newXp };

    // Call API after updating XP
    updateInfo(updateData).catch(console.error);
  };

  const CollectPoints = () => {
    IncreaseXp();
    navigate("/dashboard");
  }

  const resetQuiz = () => {
    IncreaseXp();
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setTimeLeft(QUESTION_TIME_LIMIT);
    setTotalTime(0);
    setIsTimerActive(true);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  if (showResult) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg text-center">
          <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
          <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-xl mb-2">
            Your Score: {score} out of {jsQuizQuestions.length}
          </p>
          <p className="text-lg mb-4 text-gray-400">
            Total Time: {formatTime(totalTime)}
          </p>
          <div className="flex gap-2">
            <button
              onClick={resetQuiz}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center mx-auto gap-2"
            >
              <ArrowRight className="w-5 h-5" />
              Try Again
            </button>
            <button
              onClick={CollectPoints}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center mx-auto gap-2"
            >
              <ArrowRight className="w-5 h-5" />
              Collect Points
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 pt-4">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen  text-white ">
        <div className="flex items-center gap-2 mb-6">
          <Brain className="w-8 h-8 text-indigo-400" />
          <div className="flex gap-10">
            <h1 className="text-3xl font-bold">Quiz Arena</h1>
            <div className="mt-2 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-400" />
              <p className="text-xl">Score: {score}</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-400">
              Question {currentQuestion + 1} of {jsQuizQuestions.length}
            </span>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Timer className="w-5 h-5 text-gray-400" />
                <span
                  className={`font-mono ${
                    timeLeft <= 5 ? "text-red-400" : "text-gray-400"
                  }`}
                >
                  {formatTime(timeLeft)}
                </span>
              </div>
            </div>
          </div>

          {/* Timer bar */}
          <div className="w-full bg-gray-700 h-2 rounded mb-4">
            <div
              className="bg-indigo-600 h-2 rounded transition-all duration-1000"
              style={{ width: `${(timeLeft / QUESTION_TIME_LIMIT) * 100}%` }}
            />
          </div>

          <pre className="bg-gray-700 p-4 rounded mb-6 whitespace-pre-wrap font-mono text-sm">
            {jsQuizQuestions[currentQuestion].question}
          </pre>

          <div className="flex flex-col space-y-3">
            {jsQuizQuestions[currentQuestion].options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleAnswer(option.isCorrect, option.id)}
                disabled={selectedAnswer !== null}
                className={`flex items-center justify-between p-4 rounded-lg transition-all duration-200 ${
                  selectedAnswer === null
                    ? "bg-gray-700 hover:bg-gray-600"
                    : selectedAnswer === option.id
                    ? option.isCorrect
                      ? "bg-green-600"
                      : "bg-red-600"
                    : "bg-gray-700 opacity-50"
                }`}
              >
                <span>{option.text}</span>
                {selectedAnswer === option.id &&
                  (option.isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  ) : (
                    <XCircle className="w-5 h-5 text-white" />
                  ))}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizArena;
