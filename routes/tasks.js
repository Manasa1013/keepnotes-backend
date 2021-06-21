const express = require("express");
const router = express.Router();
const { Task } = require("../models/task.model");
const { extend } = require("lodash");
const tasks = [
    {
        id : 1,
        title : "reading book",
        task : "divide into deadlines and complete reading the part,have summary of each part",
        isEdited : false,
        isArchived : false,
        isDeleted : false,
        isPinned : false,
        background : "inherit",
        sortId : Date.now()
    },
    {
        id : 2,
        title : "planning tasks",
        task : "divide into deadlines and complete each part,have summary of each part",
        isEdited : false,
        isArchived : false,
        isDeleted : false,
        isPinned : true,
        background : "inherit",
        sortId : Date.now()
    },
    {
        id : 3,
        title : "keep-notes backend",
        task : "divide into deadlines and complete reading the part,have summary of each part",
        isEdited : false,
        isArchived : false,
        isDeleted : false,
        isPinned : true,
        background : "inherit",
        sortId : Date.now()
    }
]

router.route("/")
    .post(async (req,res,next) => {
        try{
            const task = req.body;
            const newTaskCreated = new Task(task);
            const savedTask = await newTaskCreated.save();
            console.log(savedTask,"task from post request");
            res.json({isSucess : "success", message : savedTask});
        }
        catch(err){
            res.status(500).json({isSucess : "failure", message : "unable to save the task" , errorMessage : err.message})
        }
    })

    module.exports = router;