const mongoose = require('mongoose')
const BlogSchema  = require('../models/blogModel')
const mongodb = require('mongodb')
const ObjectId = mongodb.ObjectId
var db = mongoose.connection

class BlogController{
    static async addBlog(req , res , next){
        try {
            const blog = new BlogSchema(req.body);
            console.log(blog)
            await db.collection('blogs').insertOne(blog).then(()=>{
                console.log('blog inserted')
            })
            res.status(201).json({message:'Success'})
        } catch (e) {
            res.status(500).json({error:e.message})
        }
    }

    static getBlog(req , res , next){
        BlogSchema.findById(ObjectId(req.body.id)).then(
            doc =>{
                console.log(doc)
            } 
        )
        res.status(201).json({message:'Success'})
    }

    static getAllBlogs(req , res , next){
        BlogSchema.find({} , function(err, blogs){
            res.send(blogs)
        })
    }
}

module.exports = BlogController

