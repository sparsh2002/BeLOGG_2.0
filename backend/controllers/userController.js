const mongoose = require('mongoose')
const UserSchema  = require('../models/userModel')
var db = mongoose.connection
// console.log(db)

const addUser = async (req , res) =>{
    try{
        // console.log(req.body)
        const user = new UserSchema(req.body);
        console.log(user)
        await db.collection('users').insertOne(user).then(()=>{
            console.log('user inserted')
        })
        res.status(201).json({message:'Success'})
    }
    catch(e){
        res.status(500).json({error:e.message})
    }
}

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
}



module.exports = {addUser , getUser , getAllUsers}