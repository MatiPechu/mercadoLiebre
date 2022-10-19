const express = require("express")
const path = require ("path")
const app = express();

let Puerto = 3030;

app.listen(Puerto,() => console.log("Listen on port " + Puerto));

app.use(express.static('public'));

app.get("/",(req, res) => {
res.sendFile(path.resolve("./views/home.html"))    
})