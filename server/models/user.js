const mongoose = require('mongoose');
// Define a schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
  });
  
  // Create a model
  const User = mongoose.model('User', userSchema);
  
  // Example usage
  const newUser = new User({ name: 'John', age: 30, email: 'john@example.com' });
  newUser.save().then((user) => console.log('User created:', user)).catch(err => console.error('Error:', err));