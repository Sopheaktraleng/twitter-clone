const express = require('express');
const { loginUser, createUser } = require('../controllers/users');
const {verifyToken, validationErrorHandler} = require('../midderware');
const { createUserValidator } = require('../common/validators/user');
const passport = require('passport');
const authRouter = express.Router();

authRouter.post('/register', createUserValidator,validationErrorHandler,createUser)
authRouter.post('/login', validationErrorHandler,loginUser)
authRouter.get('/me',verifyToken)
// // Initiates the Google OAuth 2.0 authenicationn flow
// authRouter.get('/google', passport.authenticate('google', {scope: ['profile','email']}));
// // CallBack URL for handling the Oauth 2.0 response
// authRouter.get('/google/callback', passport.authenticate('google'),(req,res)=>{
//     res.redirect('/api/v1/auth');
// })
module.exports = authRouter;
