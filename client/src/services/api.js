import axios from "axios";

const API = axios.create({
    baseURL: 'https://task-tracker-app-1l08.onrender.com/api',
});

export default API;