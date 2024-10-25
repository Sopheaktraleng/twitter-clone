const jwt = require('jsonwebtoken');
const { userModel } = require('../models/user')

const signToken = (id, email, username) => {
    const token = jwt.sign({
        id: id,
        email: email,
        username: username
    }, process.env.JWT_SECRET, {
        expiresIn: '24h',
    })
    return token
}
const checkIfEmailExist = async (email) => {
    const user = await userModel.findOne({ email: email })
    if (!user) return false
    return true
}
module.exports = { signToken, checkIfEmailExist }