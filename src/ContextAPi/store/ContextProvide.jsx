import React, {
  createContext,
  useContext,
  useRef,
  useState
} from "react";
import { getProfile } from "../../api/auth";

const MyContext = createContext(null);
export const StoreProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return localStorage.getItem("isAuth") === "true";
  });
  const [xp, setXp] = useState(null);
  const [level, setLevel] = useState(null);
  const [achievments, setAchievments] = useState(null);
  const [name, setName] = useState("");
  const roomId = 123;
  const wsRef = useRef(null);
  const [users, setUsers] = useState([]);
  const [problemDetails, setProblemDetails] = useState({});
  const fetchInfo = async () => {
    try {
      const { data } = await getProfile();
      setXp(data.user.totalScore);
      setName(data.user.name);
      setLevel(data.user.level);
      setAchievments(data.user.achivements);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <MyContext.Provider
      value={{
        isAuth,
        setIsAuth,
        xp,
        level,
        achievments,
        name,
        setXp,
        fetchInfo,
        roomId,
        wsRef,
        users,
        setUsers,
        problemDetails,
        setProblemDetails,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};
