const mongoose = require("mongoose");
require('dotenv').config();
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@jackop.y8za5sk.mongodb.net/testingdb1`)
.then(()=>{
    console.log("DAtabase in Connected");
}).catch(err=>{
    console.log("Error is :",err);
})

const Users = mongoose.model('users',new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    fullTime:Boolean
}))

module.exports = Users;