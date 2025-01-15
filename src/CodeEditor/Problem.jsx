import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getProblem, getProblemById } from "../api/auth";
import { useStore } from "../ContextAPi/store/ContextProvide";

const Problem = ({title}) => {
  return (
    <Box minH="80vh" border="1px solid">
      <Box>
        <Text fontSize="2xl">{title}</Text>        
      </Box>
    </Box>
  );
};

export default Problem;
