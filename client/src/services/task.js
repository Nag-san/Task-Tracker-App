import API from './api.js';

export const fetchTasks = async (projectId, token) => {
    const res = await API.get(`/tasks/${projectId}`, {
        headers: {Authorization: `Bearer ${token}`}
    });
    return res.data;
};

export const createTask = async (taskData, token) => {
    const res = await API.post('/tasks', taskData, {
        headers: {Authorization: `Bearer ${token}`}
    });
    return res.data;
};

export const updateTask = async (taskId, data, token) => {
    const res = await API.put(`/tasks/${taskId}`, data, {
        headers: {Authorization: `Bearer ${token}`}
    });
    return res.data;
};

export const deleteTask = async (taskId, token) => {
    const res = await API.delete(`/tasks/${taskId}`, {
        headers: {Authorization: `Bearer ${token}`}
    });
    return res.data;
};