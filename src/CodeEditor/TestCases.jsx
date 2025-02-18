import { useEffect, useState } from "react";
import { useStore } from "../ContextAPi/store/ContextProvide";
import { submitCode, updateInfo } from "../api/auth";

import { Toast } from "@chakra-ui/react";
import { blue, green } from "@mui/material/colors";

export default function TestCases({ problemDetails }) {
  const { editorRef, language, xp, setXp } = useStore();
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const [error, setError] = useState(null);
  const [IsSubmitAnswer, setIsSubmitAnswer] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;

    const testCases = problemDetails.problem.testCases;
    const problemId = problemDetails.problemId;
    console.log(`problem iD ${problemId}`);

    const value = {
      code: sourceCode,
      language,
      testCases,
      problemId,
    };

    try {
      setIsLoading(true);
      setError(null);
      setIsSubmitAnswer(false)
      const response = await submitCode(value);
      setResults(response.data);
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
      setResults(null);
    } finally {
      setIsLoading(false);
    }
  };

  const submitCode1 = () => {
    try {
      console.log(results);
      setIsLoadingSubmit(true);
      try {
        if (results.passed === results.details.length) {
          IncreaseXp();
          setIsSubmitAnswer(true);

          console.log(xp);
        } else {
          alert("Please test all Test Cases then submit");
          setIsLoadingSubmit(false);
        }
      } catch (error) {
        console.log(error);
      }
      setIsLoadingSubmit(false);
    } catch (e) {
      console.log(e);
    }
  };

  const IncreaseXp = async () => {
    try {
      const newXp = (xp || 0) + 50;
      const updateData = { totalScore: newXp };
      await updateInfo(updateData).catch(console.error);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4 space-y-4 relative">
      {/* Header section */}

      {IsSubmitAnswer && (
        <div className="w-96 bg absolute">
          <Toast
            status="success"
            className="bg-gray-300"
            title="Code submitted susscesfully"
          />
        </div>
      )}
      <div className="flex justify-end gap-4">
        <div className="">
          <button
            onClick={runCode}
            disabled={isLoading}
            className={`px-4 py-2 rounded-lg text-white ${
              isLoading
                ? "bg-blue-200 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isLoading ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Running...
              </span>
            ) : (
              "Run Test Cases"
            )}
          </button>
        </div>

        <div className="flex">
          <button
            onClick={submitCode1}
            disabled={isLoading}
            className={`px-4 py-2 rounded-lg text-white ${
              isLoadingSubmit
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {isLoadingSubmit ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submiting...
              </span>
            ) : (
              "Submit Code"
            )}
          </button>
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 text-red-700">
          {error}
        </div>
      )}

      {/* Results section */}
      {results && (
        <div className="space-y-4">
          {/* Summary */}
          <div className="flex space-x-4">
            <div className="bg-green-50 p-3 rounded-lg">
              <span className="text-green-700 font-medium">
                Passed: {results.passed}
              </span>
            </div>
            <div className="bg-red-50 p-3 rounded-lg">
              <span className="text-red-700 font-medium">
                Failed: {results.failed}
              </span>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <span className="text-gray-700 font-medium">
                Total: {results.total}
              </span>
            </div>
          </div>

          {/* Individual test cases */}
          <div className="space-y-2">
            {results.details?.map((detail, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border ${
                  detail.passed
                    ? "border-green-200 bg-green-50"
                    : "border-red-200 bg-red-50"
                }`}
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-black">
                    Test Case {detail.testCase}
                  </h3>
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      detail.passed
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {detail.passed ? "Passed" : "Failed"}
                  </span>
                </div>

                <div className="mt-2 space-y-1">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Input:</span>{" "}
                    {JSON.stringify(detail.input)}
                  </p>
                  {detail.passed ? (
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Output:</span>{" "}
                      {JSON.stringify(detail.actual)}
                    </p>
                  ) : (
                    <>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Expected:</span>{" "}
                        {JSON.stringify(detail.expected)}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Got:</span>{" "}
                        {detail.error || JSON.stringify(detail.actual)}
                      </p>
                    </>
                  )}
                  {/* {detail.executionTime && (
                    <p className="text-xs text-gray-500">
                      Execution time: {detail.executionTime}ms
                    </p>
                  )} */}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
