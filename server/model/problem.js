const mongoose=require('mongoose');

const problemSchema=new mongoose.Schema({
    question:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    hints:{
        type:String,
        required:true
    }
},{timestamps:true})

const Problem=mongoose.model('questions',problemSchema);
module.exports=Problem;