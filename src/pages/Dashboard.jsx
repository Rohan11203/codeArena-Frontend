import { useEffect, useState } from "react";
import { getProfile, onLogout } from "../api/auth";
import Layout from "../components/Layout";
import PlayerStats from "../components/PlayerStats";
import FlowDiagram from "../components/ui/FlowDiagram";

export const Dashboard = () => {

  const [xp, setXp] = useState(null);
  const [level, setLevel] = useState(null);
  const [achievments, setAchievments] = useState(null);
  const [name, setName] = useState("");

  const fetchInfo = async () => {
    try {
      const { data } = await getProfile();
      setXp(data.user.totalScore);
      setName(data.user.name)
      setLevel(data.user.level);
      setAchievments(data.user.achivements);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
  
  useEffect(() => {
    fetchInfo();
  },[]);
  return (
    <Layout>
      <div className="bg-black h-screen p-10 flex justify-between gap-5" >
        <FlowDiagram xp={xp}/>
        <PlayerStats xp={xp} name={name} level={level} achievments={achievments}/>
      </div>
    </Layout>
  );
};
