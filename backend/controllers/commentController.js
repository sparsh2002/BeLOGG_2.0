const mongoose = require('mongoose')
const CommentSchema  = require('../models/commentModel')
const mongodb = require('mongodb')
const ObjectId = mongodb.ObjectId
var db = mongoose.connection

const addComment = async (req , res) =>{
    try {
        const comment= new CommentSchema(req.body);
        console.log(comment)
        await db.collection('comments').insertOne(comment).then(()=>{
            console.log('comment inserted')
        })
        res.status(201).json({message:'Success'})
    } catch (e) {
        res.status(500).json({error:e.message})
    }
}

const getComment = (req , res) =>{
    CommentSchema.findById(ObjectId(req.body.id)).then(
        doc =>{
            console.log(doc)
        } 
    )
    res.status(201).json({message:'Success'})
}



module.exports = {addComment , getComment}

