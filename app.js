const express=require('express');

const app=express();
const morgan=require('morgan');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

const dotenv=require('dotenv')
dotenv.config();
const postroutes=require('./routes/post');
mongoose.connect(process.env.MONGO_URI).then(()=>console.log('db connected'))
mongoose.connection.on('error',err=>{
	console.log('db connection error : ${err.message}');
});
app.use(morgan('dev'));


app.use(bodyParser.json());
app.use('/',postroutes);

const port =process.env.PORT||8080;
app.listen(port,()=>{
	console.log('a nodejs application is running!');
})