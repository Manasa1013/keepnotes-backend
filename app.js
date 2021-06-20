const express = require("express");
const index = express();
const router  = express.Router();
 router.route("/" , (req,res) => {
     res.json({taskList : [
          {
             id : 2,
             title : "planning",
             task : "elaborating"
         }
     ]})
 })

module.exports = index;
//executed in cmd only
//in backend ,reloading doesn't alter the changes made here in editor,you have to re-run it again.