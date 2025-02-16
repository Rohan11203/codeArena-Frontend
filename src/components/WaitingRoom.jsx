import React, { useEffect, useState } from "react";
import { User, Clock, Check, X } from "lucide-react";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import { useStore } from "../ContextAPi/store/ContextProvide";
import { useNavigate } from "react-router-dom";
import { getProblemById } from "../api/auth";

const WaitingRoom = () => {
  const { users, wsRef } = useStore();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(10);
  const { problemDetails, setProblemDetails } = useStore();

  const onLeaveRoom = () => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.close();
    }
    navigate("/multiplayer");
  };

  useEffect(() => {
    const fetchProblemDetails = async () => {
      try {
        const response = await getProblemById();
        setProblemDetails(response.data);
      } catch (error) {
        console.error("Error fetching problem details:", error);
      }
    };

    fetchProblemDetails();
  }, []);
  useEffect(() => {
    if (problemDetails.problem) {
      const interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(interval);
            navigate(`/clashofcode/${problemDetails.problem._id}`);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
  }, [problemDetails.problem, navigate]);

  const getStatusIcon = (status) => {
    switch (status) {
      case "ready":
        return <Check className="text-green-500" size={20} />;
      case "waiting":
        return <Clock className="text-yellow-500" size={20} />;
      case "empty":
        return <X className="text-gray-400" size={20} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-screen h-screen bg-black  ">
      <div className="w-full  h-full flex justify-center items-center">
        <div className="max-w-xl px-8 py-4 bg-gray-800 rounded-xl">
          <div className="space-y-1">
            <div className="flex gap-4 items-center justify-between">
              <div className="text-2xl text-white font-semibold p-4">Waiting Room</div>
              <div className="flex items-center space-x-2">
                <User size={20} />
                <span className="font-medium">
                  {users.filter((p) => p.status !== "empty").length}/4
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className="space-y-4">
              {users.map((user, index) => (
                <div
                  key={index}
                  className="flex items-center  justify-between p-4 rounded-xl bg-[#F2E741] "
                >
                  <div className="flex items-center  space-x-4">
                    <div className="w-10 h-10 rounded-full border flex items-center justify-center">
                      <User size={20} />
                    </div>
                    <span className="font-medium">{user}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center py-4">
            <button
              className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={onLeaveRoom}
            >
              Leave Room
            </button>
          </div>

          <div>
            <div className="flex items-center justify-between p-4 text-gray-400">
              <span>Time left: {timeLeft} seconds</span>
              <div>{getStatusIcon("waiting")}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingRoom;
