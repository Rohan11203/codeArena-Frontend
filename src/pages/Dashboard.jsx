import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import PlayerStats from "../components/PlayerStats";
import FlowDiagram from "../components/ui/FlowDiagram";
import { useStore } from "../ContextAPi/store/ContextProvide";

export const Dashboard = () => {
  const { fetchInfo } = useStore();
  useEffect(() => {
    fetchInfo();
  },[]);
  
  return (
    <Layout>
      <div className="bg-black h-screen p-10 flex justify-between gap-5" >
        <FlowDiagram/>
        <PlayerStats/>
      </div>
    </Layout>
  );
};
