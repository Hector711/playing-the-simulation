import axios from 'axios';

const tasksApi = axios.create({
  baseURL: 'http://localhost:3003/tasks',
  withCredentials: true,
});

export const getTasks = async () => {
  const res = await tasksApi.get('/');
  return res.data;
};
