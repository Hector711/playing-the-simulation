import axios from 'axios';

const levelsApi = axios.create({
  baseURL: 'http://localhost:3003/levels',
});

export const getLevels = async () => {
  const res = await levelsApi.get('/');
  return res.data;
};
