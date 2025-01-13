import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { getProblem } from "../api/auth";
import { useStore } from "../ContextAPi/store/ContextProvide";

const Problem = () => {

  const { getRandomProblem } = useStore()

    useEffect(() => {
      getRandomProblem();
    },[])

  return (
    <Box minH="80vh" border="1px solid">
      <Box>
        <Text>Hello</Text>
      </Box>
    </Box>
  );
};

export default Problem;
