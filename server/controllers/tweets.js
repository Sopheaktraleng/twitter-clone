const expressAsyncHandler = require("express-async-handler");
const tweetModel = require("../models/tweet");
const { userModel } = require("../models/user");

const createTweet = (expressAsyncHandler (async(req,res)=>{
    const { byUser, text, createdDate } = req.body
    const userId = userModel.byUser
    const newTweet = new tweetModel({
        byUser: userId,
        text: text,
        createdDate: createdDate
    })
    const result = await newTweet.save()
    res.send(result)
}))
const getAllTweet = (async(req,res)=>{
    const tweets = await tweetModel.find({}).exec()
    res.send(tweets)
})
const getTweetById = (async(req,res)=>{
    const tweet = await tweetModel.findById(req.params.id)
    res.send(tweet)
})
const updateById = expressAsyncHandler(async (req, res) => {
    const { byUser, text, createdDate } = req.body;
    const updatedTweet = await tweetModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.send(updatedTweet);
});
const deleteById = (expressAsyncHandler(async(req,res)=>{
    const id = req.params.id
    const tweet = await tweetModel.deleteOne({id})
    res.send(tweet)
}))

module.exports = {createTweet, getAllTweet,getTweetById, updateById, deleteById}