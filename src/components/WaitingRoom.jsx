import React, { useEffect, useState } from 'react';
import { User, Clock, Check, X } from 'lucide-react';
import { Card, CardBody, CardFooter } from '@chakra-ui/react';
import { useStore } from '../ContextAPi/store/ContextProvide';
import { useNavigate } from 'react-router-dom';
import { getProblemById } from '../api/auth';

const WaitingRoom = () => {
  const { users,wsRef,problemId } = useStore();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft ] = useState(10);
  const { problemDetails,setProblemDetails } = useStore();



  const onLeaveRoom = () => {
    if(wsRef.current?.readyState === WebSocket.OPEN){
      wsRef.current.close();
    }
    navigate("/multiplayer")
  }



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
  let interval;

  if (problemDetails.problem) {

    interval = setInterval(() => {
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

  return () => clearInterval(interval); // Cleanup interval on component unmount
}, []);


  const getStatusIcon = (status) => {
    switch (status) {
      case 'ready':
        return <Check className="text-green-500" size={20} />;
      case 'waiting':
        return <Clock className="text-yellow-500" size={20} />;
      case 'empty':
        return <X className="text-gray-400" size={20} />;
      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardBody className="space-y-1">
        <div className="flex items-center justify-between">
          <CardFooter className="text-2xl font-bold">Waiting Room</CardFooter>
          <div className="flex items-center space-x-2">
            <User size={20} />
            <span className="font-medium">
              {users.filter(p => p.status !== 'empty').length}/4
            </span>
          </div>
        </div>
      </CardBody>
      <CardBody>
        <div className="space-y-4">
          {users.map((user,index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-lg bg-gray-100"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <User size={20} />
                </div>
                <span className="font-medium">{user}</span>
              </div>
            </div>
          ))}
        </div>
      </CardBody>
      <CardFooter className="flex items-center justify-end p-4">
        <button className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600" onClick={onLeaveRoom}>
          Leave Room
        </button>
      </CardFooter>

      <CardFooter>
        <div className="flex items-center justify-between p-4 text-gray-400">
          <span>Time left: {timeLeft} seconds</span>
          <div>{getStatusIcon('waiting')}</div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default WaitingRoom;