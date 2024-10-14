const { userModel } = require('../models/user.js'); // Correct import
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const signToken = require('../common/index.js')

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
const getUserById = (async (req,res)=>{
    const user = await userModel.findById(req.params.id).exec()
    user.password = '';
    res.send(user)
})
const getAllUser = (async (req,res)=>{
    const users = await userModel.find({}).exec()
    res.send(users)
})
const updateById = (asyncHandler(async (req, res)=>{
    const id = req.params.id
    const updatedUser = await userModel.findByIdAndUpdate(id, req.body,{
        new: true  
    })
    res.send(updatedUser)
}))
const deleteById = (async (req,res)=>{
    const id = req.params.id
    const user = await userModel.deleteOne({id})
    res.send(user)
})
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Ensure both email and password are provided
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required!" });
    }

    // Find user by email
    const user = await userModel.findOne({ email });
    
    // Check if user exists
    if (!user) {
        return res.status(401).json({ error: "Password or email incorrect!" });
    }

    // Compare password
    const passwordMatch = await bcrypt.compare(password, user.password);

    // If password does not match, return an error
    if (!passwordMatch) {
        return res.status(401).json({ error: "Password or email incorrect!" });
    }

    // Return JWT to client if authentication is successful
    const token = signToken(user._id, user.email, user.username);
    return res.status(200).json({ token });
});

module.exports = { createUser, getUserById, getAllUser, updateById, deleteById, loginUser};
