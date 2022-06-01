const jwt = require('jsonwebtoken');
const User = require('../models/userModel')
const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, 'touch cookies secret', (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect('/login');
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect('/login');
  }
};

// check current user
const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
      jwt.verify(token, process.env.SECRET, async (err, decodedToken) => {
        if (err) {
          res.locals.user = null;
          res.clearCookie('user')
          next();
        } else {
          let user = await User.findById(decodedToken.id);
          res.locals.user = user;
          res.cookie('user', user);
          next();
        }
      });
    } else {
      res.locals.user = null;
      res.clearCookie('user')
      next();
    }
  };
  

module.exports = { requireAuth  , checkUser};