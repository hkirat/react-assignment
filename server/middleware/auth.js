const jwt = require('jsonwebtoken');


module.exports = auth = (req, res, next) => {
    try {
        const authHeader=req.headers["authorization"];

        if (!authHeader) return res.json({"message":"missing auth header"});

        const verified=jwt.verify(authHeader,process.env.JWT_SECRET);

        if(verified){
            req.userId=verified.id;
            next()
        }
        else return res.status(403).json({"message":"Invalid Token"});
    }
    catch (err) {
        res.status(400).json(err);
    }
}
