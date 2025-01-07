import { useState } from "react";
import { getProfile, onLogout } from "../api/auth";
import { useStore } from "../ContextAPi/store/ContextProvide";
import Layout from "../components/Layout";
import GetProfile from "../components/get-profile";
import Logout from "../components/logout";

export const Dashboard = () => {
  return (
    <Layout>
      <div className="bg-black h-screen">
        <div className="flex justify-evenly gap-5">
          <div className="mt-10 border border-gray-600  bg-blue-500 h-60 w-60">
            Card
          </div>

          <div className="mt-10 border h-60 w-60 border-gray-600  bg-blue-500">
            Card
          </div>
        </div>
      </div>
    </Layout>
  );
};
