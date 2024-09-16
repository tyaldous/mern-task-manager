const Task = require("../model/taskModel");

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

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch {
        res.status(500).json({msg: error.message});
    }
}

module.exports = {
    createTask,
    getTasks,
}