import axios from 'axios';

const postsApi = axios.create({
  baseURL: 'http://localhost:3003/posts',
});

export const getPosts = async () => {
  const res = await postsApi.get('/');
  return res.data;
};

export const createPost = async post => {
  postsApi.post('/', post);
};

export const deletePost = async id => {
  postsApi.delete(`/${id}`);
};
