import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    project: {type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true},
    title: {type: String, required: true},
    description: {type: String},
    status: {
        type: String,
        enum: ["pending", "in progress", "completed"],
        default: "pending"
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    completedAt: {
        type: Date
    }
});

export default mongoose.model('Task', taskSchema);