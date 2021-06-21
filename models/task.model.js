const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
    id : Number,
    title : String,
    task : String,
    isEdited : Boolean,
    isArchived : Boolean,
    isDeleted : Boolean,
    isPinned : Boolean,
    background : String,
    sortId : Date
})

const Task = mongoose.model("Task" , taskSchema);

module.exports = { Task };