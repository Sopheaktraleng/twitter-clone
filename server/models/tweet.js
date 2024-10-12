const mongoose = require('mongoose');
// Define a schema
const tweetSchema = new mongoose.Schema({
    byUser: { type: mongoose.Types.ObjectId, ref: 'users'},
    text: { type: String, require: true },
    createdDate: { type: Date, require: true},
})
  // Create a model
  const tweetModel = mongoose.model('tweets', tweetSchema);
module.exports = tweetModel