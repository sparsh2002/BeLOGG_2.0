const express = require('express')
const router = express.Router()
const {addUser , getUser , getAllUsers} = require('../controllers/userController')

router.post("/adduser" , addUser)
router.get("/getuser" , getUser)
router.get("/getallusers" , getAllUsers)
module.exports = router