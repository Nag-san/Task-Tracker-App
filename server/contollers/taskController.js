import Task from "../models/Task.js";

export const createTask = async (req, res) => {
    const { projectId, title, description } = req.body;
    try {
        const task = await Task.create({ project: projectId, title, description });
        res.status(201).json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getTasks = async (req,res) => {
    try {
        const tasks = await Task.find({ project: req.params.projectId});
        res.json(tasks);
    } catch (err){
        res.status(500).json({ message: err.message});
    }
};

export const updateTask = async (req, res) => {
    const { title, description, status} = req.body;
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            {
                title,
                description,
                status,
                completedAt: status === 'completed' ? new Date() : null
            },
            { new: true}
        );
        res.json(updatedTask);
    } catch(err) {
        res.status(500).json({ message: err.message});
    }
};

export const deleteTask = async (req, res) => {
    try{
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: "Task deleted" });
    } catch (err){
        res.status(500).json({message: err.message});
    }
}; 