const express = require('express')
const router = express.Router()

router.get("/" , (req , res) => {
    res.send("This api is reserved for BELOGG App")
})


module.exports = router