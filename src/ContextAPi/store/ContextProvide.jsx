import React,{ createContext, useContext, useState } from "react"

const MyContext = createContext(null);
export const StoreProvider = ({children}) => {
  const [isAuth, setIsAuth] = useState(() => {
    return localStorage.getItem('isAuth') === 'true';
  });
  
  return (
    <MyContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </MyContext.Provider>
  )
}

export const useStore = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}