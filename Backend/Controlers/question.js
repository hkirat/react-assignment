const question =require('../Models/question')

exports.getquestion =(req,res)=>{
    
    question.find().then(
        result=> res.send({questions:result})
    ).catch(error => res.send(error))
}


exports.getquestionbyqno =(req,res)=>{
    const qno=req.params.qno
    // console.log(qno)
    question.find({
        question_no:qno
    }).then(
        result=> res.send({questions:result})
    ).catch(error => res.send(error))
}

exports.getquestionbydifficulty =(req,res)=>{
    const difficulty=req.params.difficulty
    question.find({
        difficulty:difficulty
    }).then(
        result=> res.send({questions:result})
    ).catch(error => res.send(error))
}

exports.getquestionfilter =(req,res)=>{
    const {
        topic,
        difficulty
    }=req.body;

    let filter={};

    if(topic){
        filter.topic=topic
    }
    if(difficulty){
        filter.difficulty=difficulty
    }

    question.find(filter).then(
        result=> res.send({questions:result})
    ).catch(error => res.send(error))
}

















