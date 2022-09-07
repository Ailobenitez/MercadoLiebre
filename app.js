const express = require ("express");
const app = express();
const path = require("path");

app.use(express.static("./public"));

app.listen(3030, ()=> 
    console.log("esta funcionando http://localhost:3030")
);

app.get("/", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.get("/register", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});

app.post("/register", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.get("/login", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});
const path = require('path')

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true
  }
}