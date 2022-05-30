const mongoose = require('mongoose')
const BlogSchema  = require('../models/blogModel')
const mongodb = require('mongodb')
const ObjectId = mongodb.ObjectId
var db = mongoose.connection

// Create
const addBlog = async (req , res) =>{
    try {
        const blog = new BlogSchema(req.body);
        console.log(blog)
        await db.collection('blogs').insertOne(blog).then(()=>{
            console.log('blog inserted')
            res.status(201).json({message:'Success'})
        }).catch(e=>{
            res.status(400).json({error:e.message})
        })
        
    } catch (e) {
        res.status(500).json({error:e.message})
    }
}

// Read
const getBlog = async (req , res) =>{
    try {
        await BlogSchema.findById(ObjectId(req.body.id)).then(
            (doc )=>{
                console.log(doc)
                res.status(201).json({message:'Success'})
            } 
        ).catch(e =>{
            res.status(400).json({error:e.message})
        })
    } catch (e) {
        res.status(500).json({error:e.message})
    }
    
    
}


const getAllBlogs = async (req , res)=>{
    try {
        await BlogSchema.find({} , function(err, blogs){
            res.send(blogs)
        })
    } catch (error) {
        res.status(500).json({error:e.message})
    }
}

const getCommentsForBlogs = async (req , res) =>{
    try {
        await BlogSchema.aggregate([
            {
                $lookup:{
                    from :"comments",
                    localField:"_id",
                    foreignField:"blogId",
                    as:"allComments" // output field
                }
            }
        ]).exec().then((doc)=>{
            res.status(200).send(doc)
        }).catch(e =>{
            res.status(500).send({
                status:false,
                message:'unable to get the question'
            })
        })
    } catch (e) {
        res.status(500).send({
            status:false,
            message:'Unexpected error'
        })
    }
}

// Update
const updateBlogById = async (req , res) =>{
    try {
        await BlogSchema.findByIdAndUpdate(req.params.id , req.body).then(()=>{
            res.status(201).json({message:"Success"})
        }).catch(e =>{
            res.status(400).json({error:e.message})
        })
        
    } catch (e) {
        res.status(500).json({error:e.message})
    }
}

// Delete

const deleteBlogById = async (req , res) =>{
    try {
        await BlogSchema.findByIdAndDelete(req.params.id)
        res.status(201).json({message:"Success"})
    } catch (e) {
        res.status(500).json({error:e.message})
    }
}
module.exports = {addBlog , getBlog , getAllBlogs , getCommentsForBlogs ,updateBlogById , deleteBlogById}

