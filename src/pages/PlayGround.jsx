import { ChakraProvider } from "@chakra-ui/react"
import CodeEditor from "../CodeEditor/CodeEditor"

const PlayeGround =  () => {
  return (
    <ChakraProvider>
      <CodeEditor />
      </ChakraProvider>
  )
}

export default PlayeGround