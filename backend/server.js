const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const Task = require("./model/taskModel");

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//const logger = (req, res, next) => {
//    console.log("Middleware running")
//    console.log(req.method)
//    next();



//Routes
app.get("/", (req, res) => {
    res.send("Home Page");
} );

//Create Task
app.post("/api/tasks", async(req, res) => {
    //console.log(req.body);
    //res.send("Task Created");
    try {
        //console.log("Writing to Database");
        const task = await Task.create(req.body);
        res.status(200).json(task);
        //console.log("Database Write Successful");

    } catch (error) {
        res.status(500).json({msg: error.message})
        //console.log(error);
    }
});

//Get/Read Data
app.get("/api/tasks", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch {
        res.status(500).json({msg: error.message});
    }
});


const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try{
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        } );
    } catch(error) {
        console.log(error);
    }
};

startServer();