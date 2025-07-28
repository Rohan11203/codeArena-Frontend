import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { getProfile } from "../../api/auth";
import { useNavigate } from "react-router-dom";

const MyContext = createContext(null);
export const StoreProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return localStorage.getItem("isAuth") === "true";
  });
  const [xp, setXp] = useState(null);
  const [level, setLevel] = useState(null);
  const [achievments, setAchievments] = useState(null);
  const [name, setName] = useState("");
  const [Avtar, setAvtar] = useState("");
  const roomId = 123;
  const wsRef = useRef(null);
  const [users, setUsers] = useState([]);
  const [problemDetails, setProblemDetails] = useState({});
  const editorRef = useRef();
  const [language, setLanguage] = useState("javascript");



  const fetchInfo = async () => {
    try {
      const { data } = await getProfile();
      setXp(data?.user?.totalScore || 0);
      setName(data?.user?.name || "");
      setLevel(data?.user?.level || 1);
      setAchievments(data?.user?.achievements || []);
      setAvtar(data.user.Avtar);
      setIsAuth(true); // Mark user as authenticated
    } catch (error) {
      console.error(
        "Auth error:",
        error.response?.data?.message || error.message
      );
      setIsAuth(false); // Mark user as unauthenticated

      localStorage.setItem("isAuth", "false");

      window.location.href("/");
    }
  };

  useEffect(() => {
    fetchInfo(); // Runs once when StoreProvider mounts
  }, []);

  return (
    <MyContext.Provider
      value={{
        isAuth,
        setIsAuth,
        xp,
        level,
        setLevel,
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
        editorRef,
        setLanguage,
        language,
        Avtar,
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
