const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");

const app = express();

//Routes
app.get("/", (req, res) => {
    res.send("Home Page");
} );

connectDB();

const PORT = process.env.PORT || 5000;
app.listen("5000", () => {
    console.log(`Server running on port ${PORT}`)
} );

//mongodb+srv://tyaldous:mern_test@mern.7bmxa.mongodb.net/?retryWrites=true&w=majority&appName=mern