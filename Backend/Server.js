const http = require("http")
const server = http.createServer((req,res)=>{
  if(req.url==="/about"){
    res.end("you are in about page");
  }
})