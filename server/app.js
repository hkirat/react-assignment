const express=require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');

const app=express();
dotenv.config();
app.use(express.json());

// config database

mongoose.connect(`mongodb://127.0.0.1:27017/leetcodeapp`)
.then(()=>console.log('connected to the database'))
.catch((err)=>console.log(err))

// importing routes
const problemRoute=require('./routes/problem');
const userRoute=require('./routes/user');

// using routes
app.use('/',problemRoute);
app.use('/user',userRoute);


const port=process.env.PORT;

app.listen(port,()=>console.log(`Server running at the port ${port}`))