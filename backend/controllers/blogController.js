const mongoose = require('mongoose')
const BlogSchema  = require('../models/blogModel')
const mongodb = require('mongodb')
const ObjectId = mongodb.ObjectId
var db = mongoose.connection

const addBlog = async (req , res) =>{
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

const getBlog = (req , res) =>{
    BlogSchema.findById(ObjectId(req.body.id)).then(
        doc =>{
            console.log(doc)
        } 
    )
    res.status(201).json({message:'Success'})
}


const getAllBlogs =(req , res)=>{
    BlogSchema.find({} , function(err, blogs){
        res.send(blogs)
    })
}


module.exports = {addBlog , getBlog , getAllBlogs}

