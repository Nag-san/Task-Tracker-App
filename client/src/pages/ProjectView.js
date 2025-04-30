import React, {useEffect, useState, useContext} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.js';
import { fetchTasks, createTask, deleteTask, updateTask } from '../services/task.js';

function ProjectView() {
    const {token} = useContext(AuthContext);
    const {projectId} = useParams();
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({title: '', description: ''});
    const [error, setError] = useState('');

    useEffect(()=> {
        if(!token) return navigate("/");
        loadTasks();
    }, [token]);

    const loadTasks = async () => {
        try{
            const data = await fetchTasks(projectId, token);
            setTasks(data);
        } catch (err){
            setError('Failed to load tasks');
        }
    };

    const handleCreate =  async (e) => {
        e.preventDefault();

        try{
            const task = await createTask({...newTask, projectId}, token);
            setTasks([...tasks, task]);
            setNewTask({ title: '', description: ''});    
        } catch (err){
            setError("Task Creation failed");
        }
    };

    const handleStatusUpdate = async (id, status) => {
        try{
            const updated = await updateTask(id, { status }, token);
            setTasks(tasks.map( t => t._id === id ? updated : t));
        } catch (err) {
            setError('Status update failed');
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteTask(id, token);
            setTasks(tasks.filter(t => t._id !== id));
        } catch (err) {
            setError('Delete failed');
        }
    };

    return (
        <div>
            <h2>Project Tasks</h2>
            {error && <p style={{color:'red'}}>{error}</p>}

            <form onSubmit={handleCreate}>
                <input
                placeholder='Task title'
                value={newTask.title}
                onChange={(e)=> setNewTask({...newTask, title: e.target.value})}
                required
                />

                <input 
                placeholder='Task Description'
                value={newTask.description}
                onChange={(e)=> setNewTask({...newTask, description: e.target.value})}
                />
                <button type="submit">Add Task</button>
            </form>

           <ul>
            {tasks.map(task => (
                <li key={task._id}>
                    <strong>{task.title}</strong>: {task.description} | Status: {task.status}
                    <select value={task.status} onChange={(e) => handleStatusUpdate(task._id, e.target.value)}>
                        <option value="pending">Pending</option>
                        <option value="in progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                    <button onClick={() => handleDelete(task._id)}>Delete</button>
                </li>
            ))}
           </ul> 
        </div>
    );
}

export default ProjectView;