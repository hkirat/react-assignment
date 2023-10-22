
const mongoose =require('mongoose');

const Schema =mongoose.Schema;


const questionscheema = new Schema({
    question: {
        type:String,
        required: false,
    },
    difficulty: {
        type:String,
        required: false,
    },
    acceptence: {
        type:String,
        required: false,
    },
    question_no: {
        type:String,
        required: false,
    },
    question_title: {
        type:String,
        required: false,
    },
    examples: {
        type:Array,
        required: false,
    }
})

module.exports=mongoose.model('question',questionscheema,'Questions');
















// mpngo db data format
// {
//     "question-no":"01"
//     "question-title":"nqueens",
//     "question":"a kmrjnfjnfjcimrfirmimg",
//     "difficulty":"1",
//     "acceptence":"50%"
//   }