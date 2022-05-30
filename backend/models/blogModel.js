const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    authorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "users"
    },
    title:String,
    content:String,
    

},{timestamps: true,})

module.exports = mongoose.model("Blog" , BlogSchema)