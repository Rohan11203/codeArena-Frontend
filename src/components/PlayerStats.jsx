import { useStore } from "../ContextAPi/store/ContextProvide";
import AvtarUi from "./ui/avtar";

export default function PlayerStats() {
  const { xp, name,level,achievments } = useStore();
  return (
    <div className="bg-gray-900 text-white rounded-lg shadow-lg p-6 h-3/4  w-1/4 flex flex-col items-center">
      <AvtarUi />
      <h1 className="pt-3">{name}</h1>
      <div className="mt-8 space-y-6 ">
        <div className="flex justify-between items-center bg-black text-white p-4 rounded-lg shadow-md">
          <progress
            className="progress progress-warning w-56"value={xp} max="100"></progress>
          <span className="font-semibold">{xp}/100XP</span>
        </div>

        <div className="flex justify-between items-center bg-black text-white p-3 rounded-lg shadow-md">
          <progress
            className="progress progress-success w-56"value={level} max="100"></progress>
          <span className="font-semibold">Level {level}</span>
        </div>

        <div className="flex justify-between items-center bg-black text-white p-3 rounded-lg shadow-md">
          <progress
            className="progress progress-primary w-56"value={achievments} max="100"></progress>
          <span className="font-semibold pl-2">Achievments</span>
        </div>

        <div className="flex justify-center">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
