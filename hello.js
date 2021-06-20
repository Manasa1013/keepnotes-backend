const http = require("http");
const hostname = "127.0.0.1";
const port = 8000;
//create http server 
const server = http.createServer((req,res) =>{
    res.writeHead(200,{'Content-Type': 'text-plain'});
    
    res.end("Hello World\nfrom Manasa")
});
//Prints 
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})
//prints when typed on terminal - .\node hello
//on clicking gives link to website at given hostname and port 
