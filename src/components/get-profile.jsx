import { useState } from "react";
import { getProfile } from "../api/auth";

export default function GetProfileInfo() {
  const [userInfo, setUserInfo] = useState("");

  const fetchProfileData = async () => {
    try {
      const response = await getProfile(); // sending the backend request

      const finalData = await response.data.user;
      setUserInfo(finalData.email);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className=""
      onClick={fetchProfileData}
    >
      Profile
    </div>
  );
}
