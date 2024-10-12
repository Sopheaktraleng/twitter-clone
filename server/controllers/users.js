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
module.exports = { createUser, getUserById, getAllUser, updateById, deleteById};
