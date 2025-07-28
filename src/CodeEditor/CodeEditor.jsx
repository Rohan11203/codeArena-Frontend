import React, { useEffect, useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import { useStore } from "../ContextAPi/store/ContextProvide";
import { Navbar } from "../components/Navbar";
import { ALL_PROBLEM_SNIPPETS } from "../Boiler-Plate-Problems/product-array-except-self/constant.js";
import { Resizable } from 're-resizable';
import LanguageSelector from "./LanguageSelector"; 
import ProblemDetails from "./ProblemDetails";
import TestCases from "./TestCases";
import PlayersInRoom from "./room-players.jsx";

const CodeEditor = () => {
  const [value, setValue] = useState("");
  const { problemDetails, editorRef, language, setLanguage } = useStore();

  // Set the initial language and code snippet
  useEffect(() => {
    if (problemDetails?.problem?.title) {
      const initialLanguage = language || 'javascript';
      const initialSnippet = ALL_PROBLEM_SNIPPETS[problemDetails.problem.title]?.[initialLanguage] || "Your code here...";
      setLanguage(initialLanguage);
      setValue(initialSnippet);
    }
  }, [problemDetails, language, setLanguage]);

  const onSelectLanguage = (lang) => {
    setLanguage(lang);
    const newSnippet = ALL_PROBLEM_SNIPPETS[problemDetails.problem.title]?.[lang] || `// Snippet for ${lang} not available.`;
    setValue(newSnippet);
  };

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  if (!problemDetails?.problem) {
    return (
        <div className="h-screen bg-[#0A0A0A] flex flex-col items-center justify-center text-white">
            <Navbar />
            <div className="text-center">
                 <h1 className="text-2xl font-bold text-yellow-400">Loading Problem...</h1>
                 <p className="text-gray-400">Please wait while we fetch the challenge.</p>
            </div>
        </div>
    );
  }

  return (
    <div className="bg-[#0A0A0A] h-screen flex flex-col font-sans">
      <div className="pt-6 z-20 relative px-4">
        <Navbar />
      </div>
      
      <div className="flex-grow flex flex-col md:flex-row p-4 gap-4 overflow-hidden">
        
        {/* Left Panel */}
        <Resizable
          defaultSize={{ width: '50%', height: '100%' }}
          minWidth="20%"
          maxWidth="70%"
          enable={{ right: true }}
          className="hidden md:flex flex-col gap-4"
        >
          <div className="bg-[#111111] border border-gray-800 rounded-2xl flex-1 overflow-y-auto">
            <ProblemDetails {...problemDetails.problem} />
          </div>
          <div className="bg-[#111111] border border-gray-800 rounded-2xl h-1/3 overflow-y-auto">
            <PlayersInRoom />
          </div>
        </Resizable>

        {/* Right Panel */}
        <div className="flex-1 flex flex-col gap-4 overflow-hidden">
           <div className="bg-[#111111] border border-gray-800 rounded-2xl flex-grow flex flex-col">
              <div className="p-3 border-b border-gray-800 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">Code Editor</h2>
                 <LanguageSelector language={language} onSelect={onSelectLanguage} />
              </div>
              <div className="flex-grow">
                 <Editor
                    height="100%"
                    theme="vs-dark"
                    language={language}
                    value={value}
                    onMount={onMount}
                    onChange={(val) => setValue(val)}
                    options={{
                        minimap: { enabled: false },
                        fontSize: 14,
                        wordWrap: 'on',
                        scrollBeyondLastLine: false,
                    }}
                />
              </div>
           </div>
           <div className="bg-[#111111] border border-gray-800 rounded-2xl h-2/5 overflow-y-auto">
                <TestCases problemDetails={problemDetails} />
           </div>
        </div>

         {/* Mobile View */}
        <div className="flex flex-col md:hidden gap-4 h-full">
            <div className="bg-[#111111] border border-gray-800 rounded-2xl p-4 overflow-y-auto">
                 <ProblemDetails {...problemDetails.problem} />
            </div>
             <div className="bg-[#111111] border border-gray-800 rounded-2xl flex-grow flex flex-col">
              <div className="p-3 border-b border-gray-800 flex items-center justify-between">
                 <h2 className="text-lg font-semibold text-white">Code Editor</h2>
                 <LanguageSelector language={language} onSelect={onSelectLanguage} />
              </div>
              <div className="h-64">
                 <Editor
                    height="100%"
                    theme="vs-dark"
                    language={language}
                    value={value}
                    onMount={onMount}
                    onChange={(val) => setValue(val)}
                 />
              </div>
           </div>
            <div className="bg-[#111111] border border-gray-800 rounded-2xl p-4 overflow-y-auto">
                <TestCases problemDetails={problemDetails} />
            </div>
             <div className="bg-[#111111] border border-gray-800 rounded-2xl p-4 overflow-y-auto">
                 <PlayersInRoom />
            </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
