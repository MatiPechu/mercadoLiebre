const express = require("express")
const path = require ("path")
const app = express();
const mainRouters = require("./routers/mainRouters")

/*let PORT = 3030;*/
let PORT= process.env.PORT ||3030
app.listen(PORT,() => console.log("Listen on port " + PORT));


app.use(express.static('public'));

app.set("view engine","ejs")

app.use("/",mainRouters)