import { Box, HStack } from "@chakra-ui/react";
import Editor from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";
import { getProblemById } from "../api/auth";
import { useStore } from "../ContextAPi/store/ContextProvide";
import ChatSection from "./ChatSection";
import { CODE_SNIPPETS } from "./constans";
import LanguageSelector from "./LanguageSelector";
import Output from "./Output";
import Problem from "./ProblemDetails";
import ProblemDetails from "./ProblemDetails";
import TestCases from "../components/TestCases";
const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");
  const { problemDetails } = useStore();

  console.log(problemDetails);
  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  return (
    <div className="bg-[#0f0a19] h-screen w-full flex">
    {/* Left Panel */}
    <div className="text-white py-2 px-2 grid gap-2 h-full w-[50%] overflow-hidden">
  <div className="border p-4 flex-1 min-h-0 overflow-auto">
    {/* Problem Component */}
    <div>
      <ProblemDetails 
      title={problemDetails.problem.title}
      />
      hadjskkj<br/>
      hadjskkj<br/>
      hadjskkj<br/>
      hadjskkj<br/>
      hadjskkj<br/>
      hadjskkj<br/>
      hadjskkj<br/>
      hadjskkj<br/>
      hadjskkj<br/>
      hadjskkj<br/>
      hadjskkj<br/>
      hadjskkj<br/>
      hadjskkj<br/>
      hadjskkj<br/>
      hadjskkj<br/>
      hadjskkj<br/>
      hadjskkj<br/>
      hadjskkj<br/>
    </div>
  </div>

  <div className="bg-pink-400 w-full p-4 flex-1 min-h-64 overflow-auto">
    {/* Players in Room */}
    Players In Room
  </div>
</div>

  
    {/* Right Panel */}
    <div className="w-2/4 flex flex-col gap-4">
      {/* Code Editor Section */}
      <div className="flex flex-col gap-2">
        <LanguageSelector language={language} onSelect={onSelect} />
        <Editor
          height="50vh"
          theme="vs-dark"
          language={language}
          defaultValue={CODE_SNIPPETS[language]}
          value={value}
          onMount={onMount}
          onChange={(value) => setValue(value)}
        />
      </div>
  
      {/* Test Cases Section */}
      <div className="bg-blue-400 p-2 h-[30vh] overflow-auto">
        <TestCases />
      </div>
    </div>
  </div>
  
  );
};
export default CodeEditor;
