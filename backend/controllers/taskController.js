const Task = require("../models/taskModel");

//Create a Task
const createTask = async (req, res) => {
    try {
        //console.log("Writing to Database");
        const task = await Task.create(req.body);
        res.status(200).json(task);
        //console.log("Database Write Successful");

    } catch (error) {
        res.status(500).json({msg: error.message})
        //console.log(error);
    }
}

//Get all Tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch {
        res.status(500).json({msg: error.message});
    }
}

//Get Single Task
const getTask = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findById(id);
        if (!task) {
            return res.status(400).json(`Task with id ${id} not found.`);
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

//Delete a Single Task
const deleteTask = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            return res.status(400).json(`Task with id ${id} not found.`)
        }
        res.status(200).send(`Task Deleted.`)
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

//Update a Task
const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate(
            {_id: id}, req.body, {new: true}
        )
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
};

module.exports = {
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask,
}