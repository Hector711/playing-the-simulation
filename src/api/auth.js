import axios from 'axios';

const serverURL = import.meta.env.VITE_SERVER_URL

const instance = axios.create({
  baseURL: serverURL,
  withCredentials: true,
});

export const registerRequest = user => instance.post(`/register`, user);

export const loginRequest = user => instance.post(`/login`, user);

export const verifyTokenRequest = () => instance.get('/verify');
