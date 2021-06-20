const express = require("express");
const router  = express.Router();
 router.get("/" , (req,res) => {
     res.json({taskList : [
          {
             id : 2,
             title : "planning",
             task : "elaborating"
         }
     ]})
 })

module.exports = router;
//executed in cmd only
//in backend ,reloading doesn't alter the changes made here in editor,you have to re-run it again.