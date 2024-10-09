const User = require('../models/user.js');
const asyncHandler = require('express-async-handler');

const createUser = asyncHandler(async (req, res) => {
    const { name, age, email } = req.body;

    // Validate input data
    if (!name || !email) {
        return res.status(400).json({ message: "Name and email are required." });
    }

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: "Email already in use." });
    }

    // Create a new user
    const user = new User({
        name,
        age,
        email
    });

    // Save the user to the database
    const result = await user.save();
    console.log(result)
    // Return the created user
    return res.status(201).json(result);
    
});

module.exports = { createUser };
