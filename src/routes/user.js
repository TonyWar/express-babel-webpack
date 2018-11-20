import express from 'express'

const router = express.Router()

import mongoose from 'mongoose'
import User from '../models/user'
import validate from '../libs/validator'
import errorHandler from '../middlewares/error-handler'

const validateUser = (email, password) => {
  return validate(email).is.email
    && validate(password).is.password
}

const beforeSignUp = (req, res, next) => {
  const { email, password } = req.body
  if (!validateUser(email, password)) {
    return res.status(400).json({
      message: 'wrong data'
    })
  }
  next();
}

router.post('/sign-up', beforeSignUp, errorHandler(async (req, res, next) => {
  const { email, password } = req.body

  const user = new User({ _id: new mongoose.Types.ObjectId(), email, password });
  await user.save()

  res.status(201).json({
    success: 'New user has been created'
  });
}));

module.exports = router;

/* 
const jwt = require('jsonwebtoken');

if(result) {
   const JWTToken = jwt.sign({
        email: user.email,
        _id: user._id
      },
      'secret',
       {
         expiresIn: '2h'
       });
       return res.status(200).json({
         success: 'Welcome to the JWT Auth',
         token: JWTToken
       });
  }
*/