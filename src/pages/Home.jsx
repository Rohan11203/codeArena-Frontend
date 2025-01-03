import { useState } from "react";
import { onLogout } from "../api/auth"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"

export const Home = () => {

  
  return (
    <>
      <Navbar />
      <h1>Hello</h1>
      
      <Footer />
    </>
  )
}