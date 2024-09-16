const express = require("express");
const Task = require("../models/taskModel");
const { createTask, getTasks, getTask, deleteTask, updateTask, patchTask } = require("../controllers/taskController");
const router = express.Router();

//Routes
router.get("/", (req, res) => {
    res.send("Home Page");
} );

router.post("/api/tasks", createTask)
router.get("/api/tasks", getTasks);
router.get("/api/tasks/:id", getTask);
router.delete("/api/tasks/:id", deleteTask);
router.put("/api/tasks/:id", updateTask);
router.patch("/api/tasks/:id", patchTask);

module.exports = router;