import axios from 'axios';
import { User, UserCredentials, RegisterData, Task, TaskFormData } from '../types';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add authorization header for protected requests
api.interceptors.request.use(
  (config) => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      const user = JSON.parse(userInfo);
      if (user.token) {
        config.headers.Authorization = `Bearer ${user.token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth API
export const login = async (credentials: UserCredentials): Promise<User> => {
  const { data } = await api.post<User>('/users/login', credentials);
  localStorage.setItem('userInfo', JSON.stringify(data));
  return data;
};

export const register = async (userData: RegisterData): Promise<User> => {
  const { data } = await api.post<User>('/users', userData);
  localStorage.setItem('userInfo', JSON.stringify(data));
  return data;
};

export const logout = (): void => {
  localStorage.removeItem('userInfo');
};

export const getUserProfile = async (): Promise<User> => {
  const { data } = await api.get<User>('/users/profile');
  return data;
};

// Tasks API
export const getAllTasks = async (): Promise<Task[]> => {
  const { data } = await api.get<Task[]>('/tasks');
  return data;
};

export const createTask = async (taskData: TaskFormData): Promise<Task> => {
  const { data } = await api.post<Task>('/tasks', taskData);
  return data;
};

export const getTaskById = async (id: string): Promise<Task> => {
  const { data } = await api.get<Task>(`/tasks/${id}`);
  return data;
};

export const updateTask = async (id: string, taskData: TaskFormData): Promise<Task> => {
  const { data } = await api.put<Task>(`/tasks/${id}`, taskData);
  return data;
};

export const deleteTask = async (id: string): Promise<{ message: string }> => {
  const { data } = await api.delete<{ message: string }>(`/tasks/${id}`);
  return data;
};

export default api;