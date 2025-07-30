import { useEffect } from "react";
import Layout from "../components/Layout";
import PlayerStats from "../components/PlayerStats";
import FlowDiagram from "../components/FlowDiagram";
import { useStore } from "../ContextAPi/store/ContextProvide";
import { updateInfo } from "../api/auth";

export const Dashboard = () => {
  const { fetchInfo, xp, setLevel } = useStore();

  async function updateLevel() {
    let newLevel = Math.floor(xp / 100);

    const updateData = {
      level: newLevel,
    };
    await updateInfo(updateData);
    setLevel(newLevel);
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  useEffect(() => {
    try {
      updateLevel();
    } catch (e) {
      console.log("Error while updating Level", e);
    }
  }, [xp]);

  return (
    <Layout>
      <div className="bg-[#0A0A0A] min-h-screen text-white p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* PlayerStats is now responsive and adapts to screen size */}
          <PlayerStats />
          {/* FlowDiagram takes the remaining space */}
          <FlowDiagram />
        </div>
      </div>
    </Layout>
  );
};
