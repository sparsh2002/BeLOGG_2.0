const express = require('express')
const router = express.Router()
const {singupGet , singupPost , loginGet , loginPost , logoutGet} = require('../controllers/authController')
router.get('/signup', singupGet);
router.post('/signup', singupPost);
router.get('/login', loginGet);
router.post('/login', loginPost);
router.get('/logout' , logoutGet)
module.exports = router;