const path =require("path");
//changed from const express = require("express");
//added "type": "module" to package.json to allow import statements
const express = require("express");

const app=express();

const publicPath = path.join(__dirname,"../", "public");
const port = 5000;

app.use(express.static(publicPath));
app.get("/",(req,res)=>{
    res.sendFile("index.html");
    //can use current config or remove publish path and uncomment out the below part
    //res.sendFile(path.join(__dirname+"./../public/index.html"));
})

/*app.get("*",(req,res)=>{
    res.sendFile(path.join(publicPath, "index.html"));
});*/

app.listen(port, ()=>{
    console.log(`server is up on ${port}`);
});
//after setting this up and the rest of the files...
//run: npm run build (this line is instructed but may not be necessary 1/2)
//then: node server/server.js (this line is instructed but may not be necessary 2/2)
//the following two commands on the terminal are what got it to work-node server/server.js caused errors
//do: npm install -g server
//then: serve -s build
//also: changed the "start" in the package.json to "serve -s build"
//also: added "server -s build" as the build for heroku in the Procfile (previously it was using node App.js by default)
//go to localhost:5000 (not 3000)


