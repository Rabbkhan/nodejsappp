const http = require("http");
const fs = require("fs");

const PORT =2000;
const hostname = "localhost";
const Home = fs.readFileSync('./index.html','utf-8')


const server = http.createServer( (req,res)=>{
    if(req.url === "/"){
        res.end(Home)
    }
    if(req.url === "/about"){
        res.end("about page")
    }
    if(req.url === "/contact"){
        res.end("Contact page")
    }
    if(req.url === "/service"){
        res.end("Service page")
    }
})

server.listen(PORT, hostname,()=>{
    console.log(`Server is working on http://${hostname}:${PORT}`)
});