const express=require("express")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const {ProductModel}=require("../model/product.model")

const productRouter=express.Router()

productRouter.use(express.json())


productRouter.post("/add",async(req,res)=>{
    const data=req.body
    try{
        const product=new ProductModel(data)
        await product.save()
        console.log(data)
        res.send("The data is added")
    }catch(err){
        console.log("err")
        console.log({"msg":"Something went wrong"})
    }
})


productRouter.get("/",async(req,res)=>{
    const data=req.query
    try{
        const product=await ProductModel.find({data})
        console.log(product)
        res.send(product)
    }catch(err){
        console.log("err")
        console.log({"msg":"Something went wrong"})
    }
})



productRouter.patch("/update/:id",async(req,res)=>{
    const Id=req.params.id
    const data=req.body
    try{
        const product=await ProductModel.findByIdAndUpdate({_id:Id},data)
        console.log(product)
        res.send("The data is updated")
    }catch(err){
        console.log("err")
        console.log({"msg":"Something went wrong"})
    }
})



productRouter.delete("/delete/:id",async(req,res)=>{
    const Id=req.params.id
    try{
        const product=await ProductModel.findByIdAndDelete({_id:Id})
        console.log(product)
        res.send("The data is deleted")
    }catch(err){
        console.log("err")
        console.log({"msg":"Something went wrong"})
    }
})




module.exports={
    productRouter
}