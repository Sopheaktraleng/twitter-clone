const mongoose = require('mongoose');
// Define a schema
const userSchema = new mongoose.Schema({
    email: { type: String, require: true, unique: true },
    username: String,
    dateOfBirth: Date,
    password: String,
  })
  // Create a model
  const userModel = mongoose.model('users', userSchema);
module.exports = { userModel, userSchema }