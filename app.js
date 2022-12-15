
const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use (express.static("public"));
app.get ("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
});


const port = process.env.PORT || 3000;
app.listen (port, () => 
console.log("Esta corriendo el puerto " + port));