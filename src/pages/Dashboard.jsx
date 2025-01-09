import { useState } from "react";
import { getProfile, onLogout } from "../api/auth";
import { useStore } from "../ContextAPi/store/ContextProvide";
import Layout from "../components/Layout";
import GetProfile from "../components/get-profile";
import Logout from "../components/logout";

export const Dashboard = () => {
  return (
    <Layout>
      <div className="bg-black h-screen p-10 flex justify-between gap-5" >
        <div className="bg-gray-700 h-3/4 w-3/4 ">
          <h1 className="text-white">Player Progress/
          Progress Bar
          </h1>
        </div>
        <div className="bg-gray-700 h-3/4 w-1/4 ">
        <h1 className="text-white">Player Stats</h1>
        </div>
      </div>
    </Layout>
  );
};
