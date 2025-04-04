import axios from "axios";
axios.defaults.withCredentials = true;

export async function onRegistrtaion(registrationData) {
  return await axios.post(
    "https://codearena-server.onrender.com/api/user/register",
    registrationData
  );
}

export async function onLogin(loginData) {
  return await axios.post("https://codearena-server.onrender.com/api/user/login", loginData);
}

export async function OnGoogle() {
  try {
    window.location.href = "https://codearena-server.onrender.com/api/user/auth/google";
  } catch (error) {
    console.error("Google Login Error : ", error) 
  }
}

export async function onLogout() {
  return await axios.get("https://codearena-server.onrender.com/api/user/logout");
}

export async function getProfile() {
  return await axios.get("https://codearena-server.onrender.com/api/user/profile");
}

export async function submitCode(submitCodeData) {
  return await axios.post("https://codearena-server.onrender.com/api/submit", submitCodeData);
}

export async function updateInfo(updateData) {
  return await axios.put("https://codearena-server.onrender.com/api/user/update", updateData);
}

export async function getProblem() {
  return await axios.get("https://codearena-server.onrender.com/api/problem/random");
}

export async function getProblemById(id) {
  return await axios.get(`https://codearena-server.onrender.com/api/problem/${id}`);
}

export async function getLeaderBoardData() {
  return await axios.get(`https://codearena-server.onrender.com/api/leaderboard`);
}