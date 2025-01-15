import { Box, HStack } from "@chakra-ui/react";
import Editor from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";
import { getProblemById } from "../api/auth";
import { useStore } from "../ContextAPi/store/ContextProvide";
import ChatSection from "./ChatSection";
import { CODE_SNIPPETS } from "./constans";
import LanguageSelector from "./LanguageSelector";
import Output from "./Output";
import Problem from "./Problem";
const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");
  const { problemDetails } = useStore();


  console.log(problemDetails)
  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  return (
    <Box bg="#0f0a19" color="gray.500" px={6} py={8}>
      <HStack spacing={16}>
        <Box w="60%" mb={4}>
          <Problem title={problemDetails.problem.title} />            
          
        </Box>
        <ChatSection />
      </HStack>

      <HStack spacing={4}>
        <Box w="60%">
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor
            height="75vh"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            value={value}
            onMount={onMount}
            onChange={(value) => setValue(value)}
          />
        </Box>

        <Output editorRef={editorRef} language={language} />
      </HStack>
    </Box>
  );
};
export default CodeEditor;
