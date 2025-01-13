import axios from 'axios'
axios.defaults.withCredentials = true

export async function onRegistrtaion(registrationData){
  return await axios.post('http://localhost:3000/api/user/register', registrationData)
}

export async function onLogin(loginData){
  return await axios.post('http://localhost:3000/api/user/login', loginData)
}

export async function onLogout(){
  return await axios.get('http://localhost:3000/api/user/logout')
}

export async function getProfile(){
  return await axios.get('http://localhost:3000/api/user/profile')
}

export async function submitCode(submitCodeData){
  return await axios.post('http://localhost:3000/api/submit', submitCodeData)
}

export async function updateInfo(updateData){
  return await axios.put('http://localhost:3000/api/user/update', updateData)
}