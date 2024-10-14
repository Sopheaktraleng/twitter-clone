const express = require('express');
const { loginUser } = require('../controllers/users');
const verifyToken = require('../midderware');
const authRouter = express.Router();


authRouter.post('/login', loginUser)
authRouter.get('/me',verifyToken)

module.exports = authRouter;
