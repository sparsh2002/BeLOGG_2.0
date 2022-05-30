const express = require('express')
const router = express.Router()
const {addBlog , getBlog , getAllBlogs, getCommentsForBlogs, updateBlogById , deleteBlogById} = require('../controllers/blogController')
router.post('/addblog' , addBlog)
router.get('/' , getCommentsForBlogs)
router.get('/getblog' , getBlog )
router.get('/getallblogs' ,getAllBlogs)
router.put('/:id' , updateBlogById)
router.delete('/:id' , deleteBlogById)
module.exports = router