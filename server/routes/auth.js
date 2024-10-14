const express = require('express');
const { loginUser } = require('../controllers/users');
const authRouter = express.Router();


authRouter.post('/login', loginUser)

module.exports = authRouter;
