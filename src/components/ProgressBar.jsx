import { useEffect, useState } from "react"
import { getProfile } from "../api/auth";

export default function ProgressBar(){

  const [data, setData] = useState(null);
 
  const fetchInfo = async () => {
    const response = await getProfile();
    setData(response.data);
    console.log(data);
  }
  return (
    <div className="bg-gray-700 h-3/4 w-3/4 ">
          <h1 className="text-white">Player Progress/
          Progress Bar
          </h1>
      </div>
  )
} 