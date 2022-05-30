const express = require('express')
const router = express.Router()
const {addUser , getUser , getAllUsers , getUserById , updateUserById , deleteUserById} = require('../controllers/userController')

router.post("/adduser" , addUser)
router.get("/getuser" , getUser)
router.get("/getallusers" , getAllUsers)
router.get("/:id" , getUserById)
router.put("/:id",updateUserById)
router.delete("/:id" , deleteUserById)
module.exports = router