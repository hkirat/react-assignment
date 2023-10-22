const express =require('express')
const routes =require('./Routes/index')
const app =express();
const mongose= require('mongoose')
const port=5402;
const bodyParser =require("body-parser")
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


app.use("/",routes);


mongose.connect(
  'mongodb://localhost:27017/leetcode',
  {
    useNewUrlParser:true,
    useUnifiedTopology:true,
  }
).then(success=>
  {console.log("connected to mongodb")
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}
).catch(error=>{
  console.log("error")
})


