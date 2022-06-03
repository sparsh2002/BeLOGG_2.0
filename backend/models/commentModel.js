const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    blogId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Blogs",
    },
    authorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Users",
    },
    title:String,
    content:String,
    createdAt :{
        type:Date,
        default:Date.now()
    }
    
})

module.exports = mongoose.model("Comment" ,CommentSchema)