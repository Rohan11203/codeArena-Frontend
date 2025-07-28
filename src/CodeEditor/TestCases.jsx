import React, { useState, useEffect } from "react";
import { useStore } from "../ContextAPi/store/ContextProvide";
import { submitCode, updateInfo } from "../api/auth";
import {
  Loader2,
  Play,
  Upload,
  CheckCircle2,
  XCircle,
  AlertTriangle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ToastNotification = ({ message, status, onDismiss }) => {
  const statusStyles = {
    success: {
      icon: <CheckCircle2 className="text-green-400" />,
      bg: "bg-green-400/10",
      border: "border-green-400/30",
    },
    error: {
      icon: <AlertTriangle className="text-red-400" />,
      bg: "bg-red-400/10",
      border: "border-red-400/30",
    },
  };

  useEffect(() => {
    const timer = setTimeout(onDismiss, 3000);
    return () => clearTimeout(timer);
  }, [onDismiss]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      className={`fixed bottom-5 right-5 z-50 p-4 rounded-lg shadow-lg flex items-center gap-3 ${statusStyles[status].bg} ${statusStyles[status].border}`}
    >
      {statusStyles[status].icon}
      <span className="text-white font-medium">{message}</span>
    </motion.div>
  );
};

export default function TestCases({ problemDetails }) {
  const { editorRef, language, xp, setXp } = useStore();
  const [results, setResults] = useState(null);
  const [isLoadingRun, setIsLoadingRun] = useState(false);
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const [error, setError] = useState(null);
  const [notification, setNotification] = useState(null); // { message: string, status: 'success' | 'error' }

  const navigate = useNavigate("");
  const handleRunCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) {
      setNotification({ message: "Code editor is empty.", status: "error" });
      return;
    }

    setIsLoadingRun(true);
    setError(null);
    setResults(null);

    const testCases = problemDetails.problem.testCases;
    const problemId = problemDetails.problemId;

    try {
      const response = await submitCode({
        code: sourceCode,
        language,
        testCases,
        problemId,
      });
      setResults(response.data);
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred while running tests."
      );
      setResults(null);
    } finally {
      setIsLoadingRun(false);
    }
  };

  const handleSubmitCode = async () => {
    if (!results || results.passed !== results.total) {
      setNotification({
        message: "Please run and pass all test cases before submitting.",
        status: "error",
      });
      return;
    }

    setIsLoadingSubmit(true);
    try {
      const newXp = (xp || 0) + 50;
      await updateInfo({ totalScore: newXp });
      setXp(newXp); // Update state locally
      setNotification({
        message: "Code submitted successfully! +50 XP",
        status: "success",
      });
      navigate("/dashboard");
    } catch (err) {
      setNotification({
        message: "Failed to submit. Please try again.",
        status: "error",
      });
      console.error(err);
    } finally {
      setIsLoadingSubmit(false);
    }
  };

  return (
    <div className="p-4 text-white h-full flex flex-col">
      <AnimatePresence>
        {notification && (
          <ToastNotification
            {...notification}
            onDismiss={() => setNotification(null)}
          />
        )}
      </AnimatePresence>

      <div className="flex justify-end gap-4 mb-4 flex-shrink-0">
        <button
          onClick={handleRunCode}
          disabled={isLoadingRun || isLoadingSubmit}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-black bg-yellow-400 font-semibold hover:bg-yellow-300 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          {isLoadingRun ? (
            <Loader2 className="animate-spin" />
          ) : (
            <Play size={16} />
          )}
          <span>{isLoadingRun ? "Running..." : "Run Tests"}</span>
        </button>
        <button
          onClick={handleSubmitCode}
          disabled={
            isLoadingSubmit || !results || results.passed !== results.total
          }
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-green-600 font-semibold hover:bg-green-500 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          {isLoadingSubmit ? (
            <Loader2 className="animate-spin" />
          ) : (
            <Upload size={16} />
          )}
          <span>{isLoadingSubmit ? "Submitting..." : "Submit"}</span>
        </button>
      </div>

      <div className="flex-grow overflow-y-auto">
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 p-3 rounded-lg text-red-300">
            <p>
              <span className="font-bold">Error:</span> {error}
            </p>
          </div>
        )}
        {results && (
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="bg-green-500/10 p-3 rounded-lg w-full text-center">
                <span className="text-green-400 font-bold">
                  Passed: {results.passed} / {results.total}
                </span>
              </div>
              <div className="bg-red-500/10 p-3 rounded-lg w-full text-center">
                <span className="text-red-400 font-bold">
                  Failed: {results.failed} / {results.total}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              {results.details?.map((detail, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg border ${
                    detail.passed
                      ? "border-green-500/30 bg-green-500/10"
                      : "border-red-500/30 bg-red-500/10"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-white">
                      Test Case #{detail.testCase}
                    </h3>
                    {detail.passed ? (
                      <span className="flex items-center gap-1 text-green-400 text-sm">
                        <CheckCircle2 size={16} /> Passed
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-red-400 text-sm">
                        <XCircle size={16} /> Failed
                      </span>
                    )}
                  </div>
                  {!detail.passed && (
                    <div className="mt-2 pt-2 border-t border-gray-700 font-mono text-xs space-y-1">
                      <p>
                        <span className="text-gray-400">Input: </span>{" "}
                        <span className="text-yellow-300">
                          {JSON.stringify(detail.input)}
                        </span>
                      </p>
                      <p>
                        <span className="text-gray-400">Expected: </span>{" "}
                        <span className="text-green-300">
                          {JSON.stringify(detail.expected)}
                        </span>
                      </p>
                      <p>
                        <span className="text-gray-400">Got: </span>{" "}
                        <span className="text-red-300">
                          {detail.error || JSON.stringify(detail.actual)}
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {!isLoadingRun && !results && !error && (
          <div className="text-center text-gray-500 pt-10">
            <p>Run the code to see test case results.</p>
          </div>
        )}
      </div>
    </div>
  );
}
