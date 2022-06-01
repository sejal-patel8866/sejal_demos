const { application } = require('express');
const express=require('express');
const routeUrl=require('./routes/routes')
const cors=require('cors');
const mongoose=require('mongoose');
const dotenv=require('dotenv')

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS,()=>console.log("database connected"))

const app=express();
app.use(express.json());
app.use(cors());
app.use('/app',routeUrl);

app.listen(3000,()=>console.log("server is up and runing"))