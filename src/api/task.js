import axios from 'axios';

const serverURL = import.meta.env.VITE_SERVER_URL

const instance = axios.create({
  baseURL: serverURL,
  withCredentials: true,
});

export const getTasksRequest = () => instance.get('/tasks')

export const getTaskRequest= (id) => instance.delete(`/tasks/${id}`);

export const createTaskRequest = (task) => instance.post('/tasks', task);
// export const createTaskRequest = (task) => {console.log(task)}

export const updateTaskRequest = (task) => instance.put(`/tasks/${task._id}`, task);

export const deleteTaskRequest= (id) => instance.delete(`/tasks/${id}`, id);


