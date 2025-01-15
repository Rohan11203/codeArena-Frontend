import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getProblem, getProblemById } from "../api/auth";
import { useStore } from "../ContextAPi/store/ContextProvide";

const ProblemDetails = ({title}) => {
  return (
    <div className="">
    <Text fontSize="2xl">{title}</Text>        
    <Text fontSize="2xl">{title}</Text>        
</div>
  );
};

export default ProblemDetails;
