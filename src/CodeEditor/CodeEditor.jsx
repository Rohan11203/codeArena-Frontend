import Editor from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";
import { useStore } from "../ContextAPi/store/ContextProvide";
import LanguageSelector from "./LanguageSelector";
import ProblemDetails from "./ProblemDetails";
import TestCases from "./TestCases.jsx";
import PlayersInRoom from "./room-players.jsx";
import Layout from "../components/Layout.jsx";
import { Navbar } from "../components/Navbar.jsx";
import { ALL_PROBLEM_SNIPPETS } from "../Boiler-Plate-Problems/product-array-except-self/constant.js";
const CodeEditor = () => {
  const [value, setValue] = useState("");

  const { problemDetails, editorRef, language, setLanguage } = useStore();

  const title = problemDetails.problem.title;
  console.log(title);

  const onSelect = (language) => {
    setLanguage(language);
    const updateSnippet =
      ALL_PROBLEM_SNIPPETS[title][language] || "Snippet not available";
    setValue(updateSnippet);
  };

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  useEffect(() => {
    if (problemDetails.problem?.title && language) {
      const updatedSnippet =
        ALL_PROBLEM_SNIPPETS[problemDetails.problem.title]?.[language] ||
        "Snippet not available";
      setValue(updatedSnippet);
    }
  }, [problemDetails.problem?.title, language]);
  console.log("Selected Language:", language);
  console.log("Problem Title:", problemDetails.problem?.title);
  console.log("Snippet Value:", value);

  return (
    <div>
      <div className="bg-[#0f0a19] pt-6"><Navbar /></div>
      <div className="bg-[#0f0a19] flex-col min-h-screen w-full flex pt-4 md:flex-row">
        {/* Left Panel */}
        <div className="text-white  py-2 px-2 grid gap-2 h-screen w-full md:w-[50%] overflow-hidden">
          <div className="border p-4 flex-1  overflow-auto">
            {/* Problem Component */}
            <div>
              <ProblemDetails
                title={problemDetails.problem.title}
                description={problemDetails.problem.description}
                difficulty={problemDetails.problem.difficulty}
                examples={problemDetails.problem.examples}
                constraints={problemDetails.problem.constraints}
              />
            </div>
          </div>

          <div className="bg-[0f0a19] w-full p-4 flex-1 min-h-16 overflow-auto border border-1 ">
            {/* Players in Room */}
            <PlayersInRoom />
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full flex flex-col gap-4">
          {/* Code Editor Section */}
          <div className="flex flex-col">
            <LanguageSelector language={language} onSelect={onSelect} />
            <Editor
              height="50vh"
              theme="vs-dark"
              language={language}
              value={value}
              onMount={onMount}
              onChange={(value) => setValue(value)}
            />
          </div>

          {/* Test Cases Section */}
          <div className="bg-[#0f0a19] border border-1 p-2 h-[40%] overflow-auto">
            <TestCases problemDetails={problemDetails} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CodeEditor;
