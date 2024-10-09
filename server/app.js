// index.js

const express = require('express');
const app = express();
const port = 4000;
const mongoose = require('mongoose');
const mongoURL = 'mongodb://mongo-db:27017/twitterdb'; // Ensure mongo-db is the service name
const { setupSwagger } = require('./swagger/index.js');

// Middleware to parse JSON requests
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Connect to MongoDB
mongoose.connect(mongoURL)
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.error('MongoDB connection error:', err)); // Proper error handling

// Set up Swagger
setupSwagger(app);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
