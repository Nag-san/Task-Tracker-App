import React, {useState, useEffect, useContext} from 'react';
import { AuthContext } from '../context/AuthContext.js';
import { fetchProjects, createProject, deleteProject } from '../services/project.js';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
const {token, logout} = useContext(AuthContext);
const [projects, setProjects] = useState([]);
const [title, setTitle] = useState('');
const [error, setError] = useState('');
const navigate = useNavigate();

useEffect(()=> {
    if(!token){
        navigate('/');
    } else {
        loadProjects();
    }
}, [token]);

const loadProjects = async () => {
    try {
        const data = await fetchProjects(token);
        setProjects(data);
    } catch (err){
        setError('Failed to load projects');
    }
};

const handleCreate = async (e) => {
    e.preventDefault();
    try{
       const newProject = await createProject(title, token);
       setProjects([...projects, newProject]);
       setTitle(''); 
    } catch (err){
        setError(err.response?.data?.message || "Project creation failed");
    }
};

const handleDelete = async (id) => {
    try{
        await deleteProject(id, token);
        setProjects([projects.filter(p => p._id !== id)]);
    } catch (err) {
        setError('Failed to delete project');
    }
};

return(
    <div>
        <h2>Dashboard</h2>
        <button onClick={logout}> Logout </button>

        {error && <p style={{color:'red'}}>{error}</p>}

        <form onSubmit={handleCreate}>
            <input
            placeholder='Project Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required />

            <button type='submit' disabled={projects.length>=4}>
            Create Project
            </button>
        </form>

        <ul>
            {projects.map((project)=> (
                <li key={project._id}>
                    {project.title}
                    <button onClick={() => handleDelete(project._id)}> Delete </button>
    
                </li>
            ))}
        </ul>

        {projects.length >= 4 && <p>You've reached the max (4 projects)</p>}
    </div>
);
}

export default Dashboard;