const express = require('express')
const router = express.Router()
const UserController = require('../controllers/userController')
// const bodyParser = require('body-parser')
// router.use(bodyParser.json())
router.post("/adduser" , UserController.addUser)
router.get("/getuser" , UserController.getUser)
router.get("/getallusers" , UserController.getAllUsers)
module.exports = router