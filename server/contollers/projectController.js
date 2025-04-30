import Project from "../models/Project.js";

export const createProject = async (req, res) => {
    const { title } = req.body;
    const userId = req.user.id;

    try{
        const exisitngProjects = await Project.find({ user: userId});
        if (exisitngProjects.length >= 4) {
            return res.status(400).json({ message: "Max 4 projects allowed per user"})
        }

        const project = await Project.create({ user: userId, title});
        res.status(201).json(project);
    } catch( err ){
        res.status(500).json({ message: err.message});
    }
};

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find({ user: req.user.id});
        res.json(projects);
    } catch (err){
        res.status(500).json({message: err.message});
    }
};

export const deleteProject = async (req,res) => {
    try{
        await Project.findOneAndDelete({ _id: req.params.id, user: req.user.id});
        res.json ({ mesaage: "Project deleted"});
    } catch (err){
        res.status(500).json({ message: err.message});
    }
};