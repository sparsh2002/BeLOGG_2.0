const mongoose = require('mongoose')
const UserSchema  = require('../models/userModel')
var db = mongoose.connection
// console.log(db)
class UserController {
    static async addUser(req , res , next){
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

    static async getUser(req , res , next){
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

    static  getAllUsers(req , res , next){
        UserSchema.find({} , function(err, users){
            res.send(users)
        })
        // res.status(201).json({message:'Recieved All Users'})
    }
}

module.exports = UserController