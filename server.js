const express = require("express");
const cors = require("cors");

require("dotenv").config();
const app = express();

const port = process.env.PORT || 5000;
const db_uri = process.env.DATABASE_URI;
app.use(cors());

app.get('/', (req, res) =>{ //this is a callback fn {
    res.send(`Hello keepnotes World from ${port}!`);
    res.json({
      taskList : [ 
        {
          id : 1,
          title : "reading book",
          task : "elaborating",
        }
      ]//displays on port 3000 i.e.. url http://127.0.0.1:3000 or http://localhost:3000
  });

app.listen(port, function() {//this statement is to startup the server on port 3000
    console.log(`Example app listening on port ${port}`);//printed on console of that web page
    
  });

let mongoose  = require("mongoose");

mongoose.connect(db_uri, 
{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("successfull"))
.catch(e => console.error("something is fishy with mongoose"))