console.log("My name is Manasa,learning JS");
const fs = require('fs');
//fs.writeFileSync("bts.html" , "Welcome to bts world")
fs.writeFileSync("mns.txt" , "From mns.txt : HIIII!!!!")
fs.appendFileSync("mns.txt" , "\n Adding some more text , by appending into mns.txt")
//on doing this displays hexadecimalformat of String
//node has another data type called bufferdata ,stores binary data(hex)
console.log(fs.readFileSync("mns.txt"))
//to convert  from BYTE CODE to normal data typeor string use method
console.log(fs.readFileSync("mns.txt").toString())
fs.renameSync("mns.txt" , "mns1013.txt")