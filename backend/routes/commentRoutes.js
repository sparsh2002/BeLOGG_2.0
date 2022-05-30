const express = require('express')
const CommentController = require('../controllers/commentController')
const router = express.Router()

router.post('/addcomment' , CommentController.addComment)

module.exports = router