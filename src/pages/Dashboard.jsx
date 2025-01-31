import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import PlayerStats from "../components/PlayerStats";
import FlowDiagram from "../components/ui/FlowDiagram";
import { useStore } from "../ContextAPi/store/ContextProvide";
import { updateInfo } from "../api/auth";

export const Dashboard = () => {
  const { fetchInfo,xp,setLevel } = useStore();

  async function updateLevel () {
    let newLevel = Math.floor(xp/100)
    
    const updateData = {
      level: newLevel,
    };
  await updateInfo(updateData)
  setLevel(newLevel);
  }

  useEffect(() => {
    
    fetchInfo();
  },[]);

  useEffect (() => {
    try{
      updateLevel();
    }catch(e){
      console.log("Error while updating Level", e);
    }
  },[xp])
  
  return (
    <Layout>
      <div className="bg-black h-screen p-10 flex justify-between gap-5" >
        <PlayerStats />
      <FlowDiagram />
      </div>
    </Layout>
  );
};
