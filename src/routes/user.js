import express from 'express'

const router = express.Router()

import mongoose from 'mongoose'
import User from '../models/user'

router.post('/signup', function(req, res) {
    const user = new User({
        _id: new  mongoose.Types.ObjectId(),
        email: req.body.email,
        password: req.body.password    
    });
    user.save().then(function(result) {
        console.log(result);
        res.status(200).json({
          success: 'New user has been created'
        });
    }).catch(error => {
        res.status(500).json({
          error: err
        });
    });
});

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