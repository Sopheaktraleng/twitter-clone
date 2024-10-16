const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const userModel = require('../../models/user')
require('dotenv').config(); //Load .env variables

// Set up options for JWT Strategy
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extract token form the Authorization header
    secretOrKey: process.env.JWT_SECRET, // Secret key for verifying the token
}
// Configure JWT Strategy
const jwtStrategy = new JwtStrategy(opts, async function (jwt_payload, done) {
    const user = await userModel.findById(jwt_payload.id)
    if(!user){
        done(null, false)
    }
    done(null,user)
})
module.exports = jwtStrategy