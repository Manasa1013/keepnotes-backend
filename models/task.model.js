const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
    title : { type : 'String' , required : [true, 'title required']},
    taskName : { type : 'String' , required : [true, 'taskName required']},
    isEdited : { type : Boolean, default : true},
    isArchived : {type : Boolean, default : false},
    isDeleted :  {type : Boolean, default : false},
    isPinned :  {type : Boolean, default : true},
    background : { type : 'String' , required : [true, 'background color required']},
    sortId : { type : Date, default : Date.now() },
    user_Id : mongoose.Schema.Types.ObjectId
})

const Task = mongoose.model("Task" , taskSchema);
module.exports = { Task };