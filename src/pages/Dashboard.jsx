import { useState } from "react";
import { getProfile, onLogout } from "../api/auth";
import { useStore } from "../ContextAPi/store/ContextProvide";
import Layout from "../components/Layout";
import GetProfile from "../components/get-profile";
import Logout from "../components/logout";

export const Dashboard = () => {
  return (
    <Layout>
      <div>
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard</p>
      </div>
    </Layout>
  );
};
