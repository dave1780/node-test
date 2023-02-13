// run `node index.js` in the terminal
import * as fs from "fs"
import http from "http"
import * as dns from "dns"
import express from "express"
const server = express();
server.get('/',(req,res)=>{
  res.send("you are listening to port 3000")
})
server.listen(3000,()=>{
  console.log("listening to port 3000")
})