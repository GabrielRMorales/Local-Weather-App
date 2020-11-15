import path from "path";
//changed from const express = require("express");
//added "type": "module" to package.json to allow import statements
import express from "express";

const app=express();
const __dirname=path.resolve();
const publicPath = path.join(__dirname,"..", "public");
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get("*",(req,res)=>{
    res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, ()=>{
    console.log(`server is up on ${port}`);
});
//after setting this up and the rest of the files...
//run: npm run build (this line is instructed but may not be necessary 1/2)
//then: node server/server.js (this line is instructed but may not be necessary 2/2)
//the following two commands on the terminal are what got it to work-node server/server.js caused errors
//do: npm install -g server
//then: serve -s build
//go to localhost:5000 (not 3000)


