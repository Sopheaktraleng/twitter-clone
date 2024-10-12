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
module.exports = createTweet