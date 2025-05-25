import { useState } from "react";
import "./App.css";
import { AppRoute } from "./routes/AppRoute";
import { StoreProvider } from "./ContextAPi/store/ContextProvide";

function App() {
  const isAuth = localStorage.getItem("isAuth");
  if (!isAuth) {
    localStorage.setItem("isAuth", "false");
  }
  return (
    <>
      <StoreProvider>
        <AppRoute />
      </StoreProvider>
    </>
  );
}

export default App;
