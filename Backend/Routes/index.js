const express=require('express');
const router=express.Router();
const questioncontroler =require('../Controlers/question');
const usercontroler =require('../Controlers/user');


router.get("/", (req, res) => {
    res.send('Hello World!')
  });


  router.get("/question", questioncontroler.getquestion);
  router.get("/question/:qno", questioncontroler.getquestionbyqno);
  // router.get("/questions/:difficulty", questioncontroler.getquestionbydifficulty);
  router.post("/question/filter", questioncontroler.getquestionfilter);
  router.post("/login",usercontroler.login);
  router.post("/signup",usercontroler.signup);





module.exports=router;
