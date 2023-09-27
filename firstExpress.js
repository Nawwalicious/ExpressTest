// const dataHandler=require('./Controllers/dataHandler');
// const {welcome,doesNotExist}=require('./Controllers/defaultHandler');




const dataRouter=require('../ExpressTest/Routes/dataRouter');
const defaultRouter=require('../ExpressTest/Routes/defaultRouter');

const express = require('express');// !! Express module is assigned to const express

const app = express();// !! app is now an Instance of express and is used below to initiate a server @ port 8000

app.listen(8000,()=>{console.log("Port 8000 Running")});

app.use(dataRouter);//Test
app.use(defaultRouter);








// app.get('/',(req,res)=>
//             {
//                 res.send(welcome(req,res));
//             }
// )

// app.get('/data',(req,res)=>  ///\/[dD][aA][tT][aA]/ is regular expression to check for all posibilities...
//             {
//                 res.send(dataHandler(req,res));
//             }
// )

// app.get('/*',(req,res)=>
//             {
//                 res.send(doesNotExist(req,res));
//             }
// )