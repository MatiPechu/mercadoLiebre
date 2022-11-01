const express = require("express")
const path = require ("path")
const app = express();

/*let PORT = 3030;*/
let PORT= process.env.PORT ||3030
app.listen(PORT,() => console.log("Listen on port " + PORT));



app.get("/",(req, res) => {
res.sendFile(path.resolve("./views/home.html"))    
})
app.get("/login",(req, res) => {
res.sendFile(path.resolve("./views/login.html"))    
})
app.get("/register",(req, res) => {
res.sendFile(path.resolve("./views/register.html"))    
})

app.use(express.static('public'));