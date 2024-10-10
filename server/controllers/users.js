const { userModel } = require('../models/user.js'); // Correct import
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');

const createUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    if (!password) {
        return res.status(400).json({ message: 'Password is required.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({
        username: username,
        email: email,
        password: hashedPassword
    });

    const result = await newUser.save();
    result.password = ''; // Remove the password before sending the result
    res.send(result);
});

module.exports = createUser;
