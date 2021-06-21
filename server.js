const express = require("express");
const cors = require("cors");
const tasks = require("./routes/tasks");
const bodyParser = require("body-parser");
const app = express();
const { initializeDBConnection }= require("./connection.mongo");
initializeDBConnection();

const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());

app.use("/tasks" , tasks);
app.get('/', (req, res) =>{ //this is a callback fn {
    // res.send(`Hello keepnotes World from ${port}!`);
    res.json({
       task : {
          id : 1,
          title : "reading book",
          task : "elaborating",
        }
      //displays on port 3000 i.e.. url http://127.0.0.1:3000 or http://localhost:3000
  });
})
app.listen(port, () => {//this statement is to startup the server on port 3000
    console.log(`Example app listening on port ${port}`);//printed on console of that web page
    
  });
