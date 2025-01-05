import { useState } from "react";
import { getProfile, onLogout } from "../api/auth";
import { useStore } from "../ContextAPi/store/ContextProvide";

export const Dashboard = () => {

  const [error, setError] = useState(false);
  const { isAuth, setIsAuth } = useStore();
  const [userInfo, setUserInfo] = useState({})

  const fetchProfileData = async () => {
    try {

      const response = await getProfile(); // sending the backend request

      const finalData = await response.data.user;
      setUserInfo(finalData)
      console.log(userInfo.email);
      // console.log(response.data.user)
    } catch (error) {
      console.log(error)
    }
  }

  const logout = async (e) => {
      e.preventDefault();
      try {
        setIsAuth(false);
        await onLogout();
        
        localStorage.removeItem('isAuth')
        
      } catch (error) {
        console.log(error.response.data.message);
        setError(error.response.data.message);
      }
    };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard</p>

      <h1>{error}</h1>

      <div className="bg-green-400 rounded-lg w-16 h-10 p-2"
      onClick={fetchProfileData}
      >
        Profile
      </div>
      <button onClick={logout}>Logout</button>

    </div>
  )
} 