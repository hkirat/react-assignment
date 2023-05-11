const router = require('express').Router();
const Problem = require('../model/problem');
const auth=require('../middleware/auth');

router.get('/problems',auth, async(req, res) => {
    const data=await Problem.find();
    res.json({ "problems": data })
})

router.post('/problem', async (req, res) => {
    try {
        const data = req.body;
        const newData = await new Problem(data).save();
        res.status(200).json(newData);
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)
    }
})

module.exports = router;