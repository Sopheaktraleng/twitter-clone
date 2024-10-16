const expressAsyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");
const jwt = require('jsonwebtoken');

const validationErrorHandler = async(req,res,next) => {
    const result = validationResult(req);
    if(result.isEmpty()){
        next()
    } else
    return res.send({error: result.array()});
}
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
module.exports = {verifyToken, validationErrorHandler}