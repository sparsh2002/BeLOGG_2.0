const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    authorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "users"
    },
    title:String,
    content:String,
    createdAt:{
        type:Date,
        default:Date.now()
    }

})

module.exports = mongoose.model("Blog" , BlogSchema)