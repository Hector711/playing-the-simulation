import axios from 'axios';

const userApi = axios.create({
  baseURL: "http://localhost:3003/users"
})

export const getUsers = async () => {
  const res = await userApi.get('/')
  return res.data;
  
}