const express = require ("express");
const app = express();
const path = require("path");

app.use(express.static("./public"));


;app.get("/", (req, res)=> {
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
app.listen(process.env.PORT||3000,function(){
  console.log('servidor corriendo en puerto 3000')
})
