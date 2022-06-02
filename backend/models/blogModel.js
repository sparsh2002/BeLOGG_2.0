const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    authorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "users"
    },
    title:String,
    content:String,
    

},{timestamps: {
    createdAt:true,
    updatedAt:true
}})

module.exports = mongoose.model("Blog" , BlogSchema)