import { useState } from "react";
import { onLogout } from "../api/auth"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { Boxes } from "../components/ui/background-boxes";
import { LandingPage } from "../components/LandingPage";
import Layout from "../components/Layout";

export const Home = () => {

  
  return (
    <Layout>
      <LandingPage />
    </Layout>
  )
}