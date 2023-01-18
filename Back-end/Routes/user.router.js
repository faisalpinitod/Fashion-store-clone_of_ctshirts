const express=require("express")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const {UserModel}=require("../model/user.model")

const userRouter=express.Router()

userRouter.use(express.json())


userRouter.post("/register",async(req,res)=>{
    const {firstName,lastName,email,password,phone}=req.body
    try{
        bcrypt.hash(password,5,async(err,hash)=>{
            if(err){
                console.log(err)
            }else{
                const user=new UserModel({firstName,lastName,email,password:hash,phone})
                await user.save()
                console.log(user)
                res.send("Registerd")
            }
        })
    }catch(err){
        console.log(err)
        console.log({"msg":"Something went wrong"})
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try{
       const user=await UserModel.find({email})
       if(user.length>0){
        bcrypt.compare(password,user[0].password,(err,result)=>{
            if(result){
                const token=jwt.sign({userID:user[0]._id},"masai")
                res.send({"msg":"Login Success","token":token})
            }else{
                res.send("Wrong Credentials")
            }
        })
       }else{
        res.send("Wrong Credentials")
    }
    }catch(err){
        console.log(err)
        console.log({"msg":"Something went wrong"})
    }
})

module.exports={
    userRouter
}







