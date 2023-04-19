// const express = require('express');
// const cors = require('cors')
// const app = express();

// app.use(cors());

// app.use('/login', (req, res) => {
//   res.send({
//     token: 'test123'
//   });
// });

// app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));

import express from 'express';
import cors from 'cors';
const app=express();
app.unsubscribe(cors());

// const allowedOrigins = ['http://localhost',
//                       'http://127.0.0.1'];

// app.use(cors({
//     origin: function(origin, callback){
//         if(!origin) return callback(null, true);
//         if(allowedOrigins.indexOf(origin) === -1){
//           const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
//           return callback(new Error(msg), false);
//         }
//         return callback(null, true);
//       },
//     credentials: true,
//     preflightContinue: true,
//     methods: ['GET', 'POST', 'PUT', 'PATCH' , 'DELETE', 'OPTIONS'],
// }));
// const whitelist = ['http://127.0.0.1', 'http://127.0.0.1:5173']
// app.use(cors({
//     origin: (origin, callback) => {
//         if (whitelist.indexOf(origin) !== -1) {
//           callback(null, true)
//         } else {
//           callback(new Error())
//         }
//       }
// }));

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Request-Method", "*");
    res.setHeader('Access-Control-Allow-Credentials', true);    
    next();
  });



app.use('/login',(req,res)=>{
    debugger;
    //res.setHeader("Access-Control-Allow-Origin", "*");
    res.send({
        token:'test123'
    })
});


app.listen(9090,()=>console.log('API is running on http://localhost:9090/login'))