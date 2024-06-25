import axios from 'axios';

const classesApi = axios.create({
  baseURL: 'http://localhost:3003/classes',
});

export const getClasses = async () => {
  const res = await classesApi.get('/');
  return res.data;
};
