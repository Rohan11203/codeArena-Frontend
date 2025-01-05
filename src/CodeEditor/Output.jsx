import { Box, Button, Text, useToast } from "@chakra-ui/react"
import { submitCode } from "../api/auth";
import { useState } from "react";

const Output = ({editorRef,language}) =>{

  const toast = useToast();
  const [output,setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () =>{
    const sourceCode = editorRef.current.getValue();
    if(!sourceCode) return;

    const problemId = "676a362b91b7d910095b2907"
    const value = {
      sourceCode,
      language,
      problemId,
    }
    
    try{
      setIsLoading(true);
      const response = await submitCode(value);
      setOutput(response.data.output.split("\n"));
      response.data.errorOutput? setIsError(true) : setIsError(false);
      // console.log(response.data);
    }
    catch(error){
      toast({
        title: 'AN error occurred',
        description: error.response.data.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
      console.log(error.response.data.message);
    }
    finally{
      setIsLoading(false);
    }
  }
  return (
    <Box w='50vh'>
      <Text mb={2} fontSize='lg'>Output</Text>
      <Button
        variant='outline'
        colorScheme="green"
        mb={4}
        isLoading={isLoading}
        onClick={runCode}
      >
        Run Code
      </Button>
      <Box
        height='75vh'
        p={2}
        color={isError? 'red.500' : ""}
        border='1px solid'
        borderRadius={4}
        borderColor={
          isError? 'red.500' : '#333'
        }
      >
        {output
        ? output.map((line,i) => <Text key={i}>{line}</Text>) : "Click 'Run Code to see the output here'"
        }
      </Box>
    </Box>
  )
}

export default Output;