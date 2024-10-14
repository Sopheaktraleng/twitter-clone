const expressAsyncHandler = require("express-async-handler");
const jwt = require('jsonwebtoken');

const verifyToken = expressAsyncHandler(async(req,res,next)=>{
    // Check Token
    let token = req.header('Authorization')
    if (!token){
        return res.status(401).json({error: "Access Denied!"})
    }
    token = token.replace("Beareer ","")
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    return res.json({ user: decoded})
})
module.exports = verifyToken