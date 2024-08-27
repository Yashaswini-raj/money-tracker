const express= require('express')
const cors=require("cors")
const morgan=require('morgan')
const colors=require('colors');
const dotenv=require('dotenv')
const { log } = require('console');
const connectDB = require('./config/connectDB');
const path=require('path')
//config dotenv
dotenv.config();
connectDB();

//rest object
const app=express();

//middlewares
app.use(morgan('dev'))
app.use(cors());
app.use(express.json());

//routes

//user routes
app.use('/api/v1/users',require('./routes/userRoute'))

//transection routes 
app.use('/api/v1/transection',require('./routes/transectionRoutes'))
//static files
app.use(express.static(path.join(__dirname,'./client/build')))
app.get('*',function(req,res){
    res.sendFile(path.json(__dirname,'./client/build/index.html'))
})
app.use
//port
const PORT=8080 || process.env.PORT

//listen server
app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
})