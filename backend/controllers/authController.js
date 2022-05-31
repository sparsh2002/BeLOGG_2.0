const UserSchema = require('../models/userModel')
const jwt = require('jsonwebtoken');
// handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '' };
  
  
    // incorrect email
    if(err.message==='incorrect email'){
      errors.email = 'that email is not registered'
    }
  
    // incorrect password
    if(err.message==='incorrect password'){
      errors.password = 'that password is incorrect'
    }
  
    // duplicate email error
    if (err.code === 11000) {
      errors.email = 'that email is already registered';
      return errors;
    }
  
    // validation errors
    if (err.message.includes('user validation failed')) {
      // console.log(err);
      Object.values(err.errors).forEach(({ properties }) => {
        // console.log(val);
        // console.log(properties);
        errors[properties.path] = properties.message;
      });
    }
  
    return errors;
  }

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, {
    expiresIn: maxAge
  });
};

const singupGet = (req , res) =>{
    console.log(req.body)
    res.status(200).json({message:'signup get'})
}

const singupPost = async (req , res) =>{

  try {
    const user = await UserSchema.create(req.body);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
  }
  catch(err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
}

const loginGet  = (req , res) =>{
    console.log(req.body)
    res.status(200).json({message:'login get'})
}

const loginPost = async (req , res) =>{
    const { email, password } = req.body;

  try {
    const user = await UserSchema.login(email, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id });
  } 
  catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
}

const logoutGet = (req , res) =>{
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/');
}

module.exports = {singupGet,singupPost , loginGet , loginPost , logoutGet}