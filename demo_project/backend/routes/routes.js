const express=require("express");

const router=express.Router();
const templateCopy=require('../models/signup_models')
const bcrypt=require('bcrypt')
router.post("/signup",async(req,resp)=>{
    // resp.send("send")
    const saltPassword= await bcrypt.genSalt(10)
    const securePassword= await bcrypt.hash(req.body.password,saltPassword)

    
    const user=new templateCopy({
        Name:req.body.Name,
        userName:req.body.userName,
        email:req.body.email,
        password:securePassword,
    })
    user.save()
    .then(data=>{
        resp.json(data)
    })
    .catch(error=>{
        resp.json(error)
    })
})
module.exports=router