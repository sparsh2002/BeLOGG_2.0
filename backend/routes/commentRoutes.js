const express = require('express')
const {getComment , addComment}= require('../controllers/commentController')
const router = express.Router()

router.post('/addcomment' , addComment)

module.exports = router