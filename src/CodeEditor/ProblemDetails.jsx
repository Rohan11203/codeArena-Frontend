import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getProblem, getProblemById } from "../api/auth";
import { useStore } from "../ContextAPi/store/ContextProvide";

const ProblemDetails = ({ title, description, difficulty, examples, constraints }) => {

  return (
    <div className="">
      <div>
        <Text fontSize="2xl">{title}</Text>
        <Text>{description}</Text>
      </div>

      <div>
        <div className="badge badge-warning gap-2 mt-2">{difficulty}</div>
        <div className="badge badge-success gap-2">code</div>
      </div>

      <div className=" p-2 rounded-lg my-4">
        <h1 className="font-bold p-1">Examples</h1>
        {examples.map((example, index) => (
          <div key={example._id} style={{ marginBottom: "20px" }}>
            <div className="bg-[#18181B] p-4 border rounded-lg">
              <h3>Input: {index}</h3>
              <pre>{JSON.stringify(example.input, null, 2)}</pre>
              <h3>Output:</h3>
              <div>
                {example.output !== null && example.output !== undefined ? (
                  typeof example.output === "boolean" ? (
                    <p>{example.output ? "True" : "False"}</p>
                  ) : typeof example.output === "string" ? (
                    <p>{example.output}</p>
                  ) : Array.isArray(example.output) ? (
                    <ul>
                      {example.output.map((value, index) => (
                        <li key={index}>{value}</li>
                      ))}
                    </ul>
                  ) : (
                    <pre>{JSON.stringify(example.output, null, 2)}</pre>
                  )
                ) : (
                  <p>No valid output available</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      
      <div className="bg-[#18181B] p-4 border rounded-lg">
      <h1 className="font-bold pb-2">Constrains</h1>
        { constraints.map((constraint,index) => (
          <p className="bg-gray-600 m-2 rounded-md p-1">{constraint}</p>
        )) }</div>
    </div>
  );
};

export default ProblemDetails;
