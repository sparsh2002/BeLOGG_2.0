const express = require('express')
const router = express.Router()
const userRouter = require('./userRoutes')
const blogRouter = require('./blogRoutes')
const commentRouter = require('./commentRoutes')
router.get("/" , (req , res) => {
    res.send("This api is reserved for BELOGG App")
})

router.use("/user" , userRouter)
router.use("/blog" , blogRouter)
router.use("/comment" , commentRouter)
module.exports = router