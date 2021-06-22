const express = require("express");
const router = express.Router();
const { Task } = require("../models/task.model");
const { extend } = require("lodash");
const assert = require("assert");
// const tasks = [
//     {
//         id : 1,
//         title : "reading book",
//         task : "divide into deadlines and complete reading the part,have summary of each part",
//         isEdited : false,
//         isArchived : false,
//         isDeleted : false,
//         isPinned : false,
//         background : "inherit",
//         sortId : Date.now()
//     },
//     {
//         id : 2,
//         title : "planning tasks",
//         task : "divide into deadlines and complete each part,have summary of each part",
//         isEdited : false,
//         isArchived : false,
//         isDeleted : false,
//         isPinned : true,
//         background : "inherit",
//         sortId : Date.now()
//     },
//     {
//         id : 3,
//         title : "keep-notes backend",
//         task : "divide into deadlines and complete reading the part,have summary of each part",
//         isEdited : false,
//         isArchived : false,
//         isDeleted : false,
//         isPinned : true,
//         background : "inherit",
//         sortId : Date.now()
//     }
// ]

router.route("/")
    .post(async (req,res,next) => {
        try{
            const task =  req.body;
            const newTaskCreated = new Task(task);
            // console.log(newTaskCreated.path('title'), "from try block,title value");
            // let errorInTryForTask = newTaskCreated.validateSync();
            // console.log(errorInTryForTask,"error in task title");
            const savedTask =  await newTaskCreated.save();
            console.log(savedTask,"task from post request");
            res.json({isSucess : "success", message : savedTask});
        }
        catch(err){
            res.status(500).json({isSucess : "failure", message : "unable to save the task" , errorMessage : err.message})
        }
    })
    .get(async (req, res,next) => {
        try{
            const tasks = await Task.find({});
            if(tasks.length === 0){
                res.json({message : "No items found "});
            }
            res.json({isSucess : "success" , tasks})
        }
        catch(err){
            res.json(500).json({isSucess : "failure" , message : "unable to fetch products"})
        }
    })

    module.exports = router;