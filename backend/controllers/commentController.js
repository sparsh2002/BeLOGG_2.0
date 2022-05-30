const mongoose = require('mongoose')
const CommentSchema  = require('../models/commentModel')
const mongodb = require('mongodb')
const ObjectId = mongodb.ObjectId
var db = mongoose.connection

// Create
const addComment = async (req , res) =>{
    try {
        const comment= new CommentSchema(req.body);
        await db.collection('comments').insertOne(comment).then(()=>{
            console.log('comment inserted')
            res.status(201).json({message:'Success'})
        }).catch(e=>{
            res.status(400).json({error:e.message})
        })
        
    } catch (e) {
        res.status(500).json({error:e.message})
    }
}

// Read

const getComment = async (req , res) =>{
    try {
        await CommentSchema.findById(ObjectId(req.params.id)).then(
            doc =>{
                console.log(doc)
            } 
        ).then(()=>{
            res.status(201).json({message:'Success'})
        })
        .catch(e =>{
            res.status(400).json({error:e.message})
        })
    } catch (e) {
        res.status(500).json({error:e.message})
    }
    
    
}



// Update

const updateCommentById = async (req , res) =>{
    try {
        await CommentSchema.findByIdAndUpdate(req.params.id , req.body).then(()=>{
            res.status(201).json({message:'success'})
        }).catch(e =>{
            res.status(400).json({error:e.message})
        })
    } catch (e) {
        res.status(500).json({error:e.message})
    }
}

// Delete

const deleteCommentById = async(req , res) =>{
    try {
        await CommentSchema.findByIdAndDelete(req.params.id).then(()=>{
            res.status(201).json({message:'success'})
        }).catch(e =>{
            res.status(400).json({error:e.message})
        })
    } catch (e) {
        res.status(500).json({error:e.message})
    }
}

module.exports = {addComment , getComment , updateCommentById , deleteCommentById}

