const express = require("express");
const Task = require("../model/taskModel");
const { createTask, getTasks } = require("../controllers/taskController");
const router = express.Router();

//Routes
router.get("/", (req, res) => {
    res.send("Home Page");
} );

//Create Task
router.post("/api/tasks", createTask)

//Get/Read Data
router.get("/api/tasks", getTasks);

module.exports = router;