const jwt = require('jsonwebtoken')
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
module.exports = signToken