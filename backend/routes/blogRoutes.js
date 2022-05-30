const express = require('express')
const router = express.Router()
const {addBlog , getBlog , getAllBlogs} = require('../controllers/blogController')
router.post('/addblog' , addBlog)
router.get('/getblog' , getBlog )
router.get('/getallblogs' ,getAllBlogs)
module.exports = router