require("dotenv").config();
const mongoose = require("mongoose");

const DATABASE_URI = process.env.DATABASE_URI;
async function initializeDBConnection(){
    try{
          await mongoose.connect(DATABASE_URI , {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex :true
          });
        console.log("mongoDB successfully connected!!");
    }
    catch(err){
        console.error(`something is fishy,mongoDB didn't connect ${err} , ${DATABASE_URI}`);
    }

}


module.exports = { initializeDBConnection };