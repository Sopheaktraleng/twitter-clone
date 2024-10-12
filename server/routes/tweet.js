const express = require('express');
const tweetRouter = express.Router();
const createTweet = require('../controllers/tweets');

tweetRouter.post('/', createTweet)


module.exports = tweetRouter;
4