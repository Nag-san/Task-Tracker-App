import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import {
  createTask,
  getTasks,
  deleteTask,
  updateTask,
} from "../contollers/taskController.js";

const router = express.Router();

router.post("/", protect, createTask);
router.get("/:projectId", protect, getTasks);
router.put("/:id", protect, updateTask);
router.delete("/:id", protect, deleteTask);

export default router;
