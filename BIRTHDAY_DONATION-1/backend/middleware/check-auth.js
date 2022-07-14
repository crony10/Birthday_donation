const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
    try {
        // we are doing this because we expect to receive the token in form of :
        // "bearer this_is_my_token"
        const token = req.headers.authorization.split(" ")[1];

        jwt.verify(token,"secret_this_should_be_longer");
        next();
    } catch (error) {
        res.status(401).json({message:"Auth failed!!!"})
    } 

};