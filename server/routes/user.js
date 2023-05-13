const router = require('express').Router();
const User=require('../model/user');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

router.get('/all', (req, res) => {
    res.json({ "user": "hey hello user" })
})

router.post('/register', async (req, res) => {
    try {
        const data=req.body;

        const email=await User.findOne({email:data.email});

        if(email) return res.status(403).json({"message":"email already in use"});
        const hashPassword=await bcrypt.hash(data.password,10);
        data.password=hashPassword;

        const newUser=await new User(data).save();
        res.status(200).json(newUser)


    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
})

router.post('/login', async(req, res) => {
    try{
        const data=req.body;
        const user=await User.findOne({"email":data.email});
        console.log(user)

        if (!user) return res.status(403).json({"message":"User not found"});

        const validPass=await bcrypt.compare(data.password,user.password);

        if (validPass){
            console.log("valid pass")
            const token=jwt.sign({"_id":data._id},process.env.JWT_SECRET);
            res.status(200).json({"token":token})
        }
        else{
            res.json({message:"Failed"})
        }
    }
    catch(err){
        res.status(400).json(err);
    }

})

module.exports = router;