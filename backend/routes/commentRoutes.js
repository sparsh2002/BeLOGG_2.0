const express = require('express')
const {getComment , addComment , updateCommentById, deleteCommentById}= require('../controllers/commentController')
const router = express.Router()

router.post('/addcomment' , addComment)
router.get('/getcomment/:id' , getComment)
router.put('/updatecommentbyid/:id' , updateCommentById)
router.delete('/:id' , deleteCommentById)
module.exports = router