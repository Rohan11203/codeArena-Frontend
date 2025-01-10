import { useState } from "react";
import { getProfile, onLogout } from "../api/auth";
import { useStore } from "../ContextAPi/store/ContextProvide";
import Layout from "../components/Layout";
import GetProfile from "../components/get-profile";
import Logout from "../components/logout";
import PlayerStats from "../components/PlayerStats";
import ProgressBar from "../components/ProgressBar";

export const Dashboard = () => {
  return (
    <Layout>
      <div className="bg-black h-screen p-10 flex justify-between gap-5" >
        <ProgressBar />
        <PlayerStats />
      </div>
    </Layout>
  );
};
