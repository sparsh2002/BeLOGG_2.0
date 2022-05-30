const mongoose = require('mongoose')
const UserSchema  = require('../models/userModel')
const mongodb = require('mongodb')
const ObjectId = mongodb.ObjectId
var db = mongoose.connection


// Create

const addUser = async (req , res) =>{
    try{
        // console.log(req.body)
        const user = new UserSchema(req.body);
        console.log(user)
        await db.collection('users').insertOne(user).then(()=>{
            console.log('user inserted')
        }).then(()=>{
            res.status(201).json({message:'Success'})
        }).catch(e=>{
            res.status(400).json({error:e.message})
        })
        
    }
    catch(e){
        res.status(500).json({error:e.message})
    }
}

// Read

const getUser = async (req , res) =>{
    try{
        // console.log(req.body)
        await db.collection('users').findOne(req.body).then((doc)=>{
            // console.log(res)
            res.send(doc)
        })
        // res.status(201).json({message:'Recieved User'})
    }
    catch(e){
        res.status(500).json({error:e.message})
    }
}

const getAllUsers = (req , res) =>{
    UserSchema.find({} , function(err, users){
        res.send(users)
    })
    // res.status(201).json({message:'success'})
}

const getUserById =  async (req , res ) =>{
    try {
        // console.log(req.params)
        const user = await UserSchema.findById(ObjectId(req.params.id)).then(()=>{
            res.status(201).send(user)
        })
        .catch(e =>{
            res.status(400).json({error:e.message})
        })
    } catch (e) {
        res.status(500).json({error:e.message})
    }
}


// Update

const updateUserById = async (req , res) =>{
    
    try{
        await UserSchema.findByIdAndUpdate(req.params.id , req.body).then(()=>{
            res.status(201).json({message:"Success"})
        }).catch(e =>{
            res.status(400).json({ message: e.message});     
        })
        
    } catch (error){
        res.status(500).json({ message: error.message});     
    }
}

// Delete

const deleteUserById = async (req , res) =>{
    try {
        await UserSchema.findByIdAndDelete(req.params.id).then(()=>{
            res.status(201).json({message:"Successfully deleted the user"})
        }).catch(e=>{
            res.status(400).json({ message: error.message});   
        })
        
    } catch (e) {
        res.status(500).json({ message: error.message});     
    }
}

module.exports = {addUser , getUser , getAllUsers , getUserById , updateUserById , deleteUserById}