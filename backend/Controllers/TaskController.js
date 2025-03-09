const express = require("express");
const router = express.Router();
const Task = require("../Models/Task");
const TaskAssignment = require("../Models/TaskAssignment");

// Create a New Task and Assign it to a User
const createTask = async (req, res) => {
	try {
		const { title, description, dueDate, priority, assignedTo } = req.body;

		// Create New Task
		const newTask = new Task({ title, description, dueDate, priority });
		const savedTask = await newTask.save();

		// Assign Task to User
		const taskAssignment = new TaskAssignment({ task: savedTask._id, assignedTo });
		await taskAssignment.save();

		res.status(201).json({ success: true, message: "Task Created Successfully!" });
	} catch (error) {
		console.error("Task Creation Error:", error);
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

module.exports = { createTask };
