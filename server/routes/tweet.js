const express = require('express');
const tweetRouter = express.Router();
const {createTweet, getAllTweet, getTweetById, deleteById,updateById } = require('../controllers/tweets');

tweetRouter.post('/', createTweet)
tweetRouter.get('/',getAllTweet)
tweetRouter.get('/:id',getTweetById)
tweetRouter.put('/:id',updateById)
tweetRouter.delete('/:id',deleteById)

module.exports = tweetRouter;
