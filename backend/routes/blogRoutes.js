const express = require('express')
const router = express.Router()
const BlogController = require('../controllers/blogController')
router.post('/addblog' , BlogController.addBlog)
router.get('/getblog' , BlogController.getBlog )
router.get('/getallblogs' , BlogController.getAllBlogs)
module.exports = router