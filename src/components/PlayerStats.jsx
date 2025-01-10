import Image from "../assets/asus.jpg";

export default function PlayerStats() {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 h-3/4  w-1/4 flex flex-col items-center">

      <div className="relative w-32 h-32 rounded-full bg-gray-200 overflow-hidden">
        <img src={Image} alt="Player profile" className="w-full h-full object-cover" />
      </div>

      <div className="mt-8 space-y-4 w-full px-4">
        <div className="flex justify-between bg-green-600 text-white p-4 rounded-lg shadow-md">
          <span className="font-semibold">Level</span>
          <span className="font-bold">10</span>
        </div>
        <div className="flex justify-between bg-red-600 text-white p-4 rounded-lg shadow-md">
          <span className="font-semibold">XP</span>
          <span className="font-bold">1200</span>
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
