import axios from 'axios';

const postsApi = axios.create({
    baseURL: "http://localhost:3003/events"
})

export const getEvents = async () => {
  const res = await postsApi.get('/')
  return res.data;
}