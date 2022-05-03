

const express = require("express");

require("dotenv").config();

const app = express();

//images
app.use(express.static("public"))

app.get("/",(req, res) =>
res.sendFile(__dirname + "/views/index.html"))

app.get("/about", (req, res)=>
res.sendFile(__dirname + "/views/about.html"))

app.get("/works", (req, res)=>
res.sendFile(__dirname + "/views/works.html"))

app.get("/photos", (req, res)=>
res.sendFile(__dirname + "/views/photos.html"))

const PORT = 3000;
app.listen(PORT, ()=>console.log("it works"))