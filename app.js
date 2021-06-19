var express = require('express');
var app = express();
const port = 3000;

app.get('/', (req, res) =>{ //this is a callback fn {
  res.send(`Hello World from Manasa used port is ${port}!`);//displays on port 3000 i.e.. url http://127.0.0.1:3000 or http://localhost:3000
});

app.listen(port, function() {//this statement is to startup the server on port 3000
  console.log('Example app listening on port 3000!');//printed on console of that web page
  
});
//executed in cmd only
//in backend ,reloading doesn't alter the changes made here in editor,you have to re-run it again.