import { useState } from "react";
import { onLogout } from "../api/auth";
import { useStore } from "../ContextAPi/store/ContextProvide";

export default function Logout() {
  const [error, setError] = useState(false);
  const { isAuth, setIsAuth } = useStore();

  const logout = async (e) => {
      e.preventDefault();
      try {
        setIsAuth(false);
        localStorage.setItem('isAuth', 'false');
        await onLogout();
        
        localStorage.removeItem('isAuth')
        
      } catch (error) {
        setError(error.response.data.message);
      }
    };

  return (
    <div>
    <h1>{error}</h1>
    <button onClick={logout}>Logout</button>
    </div>
  )
}