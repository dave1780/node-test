// run `node index.js` in the terminal
import * as fs from "fs"
import http from "http"
import * as dns from "dns"
dns.lookup("www.w3schools.com",(err,address,family)=>{
  console.log(address)
  console.log(family)
})
dns.resolve("www.w3schools.com","A" ,(err,data)=>{
  console.log(data)

})
console.log("express ")
