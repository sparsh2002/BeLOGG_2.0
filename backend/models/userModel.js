const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
    },
    firstName:String,
    lastName:String,
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    mobileNumber:Number,
    // timestamps: { createdAt: true, updatedAt: true }
} , {timestamps :true })

module.exports = mongoose.model("User" , UserSchema)