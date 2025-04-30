import API from "./api.js";

export const fetchProjects = async (token) => {
    const res = await API.get("/projects", {
        headers: { Authorization: `Bearer ${token}`}
    });
    return res.data;
};

export const createProject = async (title, token) => {
    const res = await API.post('/projects', {title}, {
        headers: { Authorization: `Bearer ${token}`}
    });
    return res.data;
};

export const deleteProject = async (id, token) => {
    const res = API.delete(`/projects/${id}`, {
        headers: {Authorization: `Bearer: ${token}`}
    });
    return res.data;
};