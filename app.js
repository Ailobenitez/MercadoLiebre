const express = require ("express");
const app = express();
const path = require("path");

app.use(express.static("./public"));

app.listen(3000, ()=> 
    console.log("esta funcionando http://localhost:3000")
);app.get("/", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "./index.html"))
});

app.get("/", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "./apariencia.css"))
});
app.use(express.static(path.resolve(__dirname, "./views/apariencia.css")
))
app.get("/", (req, res)=> {
  res.sendFile(path.resolve(__dirname, "./public"))
});