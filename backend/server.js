const express = require("express");

const app = express();

//Routes
app.get("/", (req, res) => {
    res.send("Home Page");
} );

const PORT = process.env.PORT || 5000;
app.listen("5000", () => {
    console.log(`Server running on port ${PORT}`)
} );