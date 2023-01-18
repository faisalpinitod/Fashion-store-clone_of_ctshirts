const express=require("express")
const { connection } = require("./config/db")
const cors=require("cors")

const {userRouter}=require("./Routes/user.router")


const app=express()
app.use(cors())


app.get("/",async(req,res)=>{
    try{
        res.send("Welcome")
    }catch(err){
        console.log(err)
        console.log({"MSG":"Something went wrong"})
    }
})


app.use("/users",userRouter)



app.listen(8080,async()=>{
    try{
        await connection
        console.log("The DB is connected")
    }catch(err){
        console.log(err)
        console.log({"MSG":"DB is not connected"})
    }
    console.log("The server is running at 8080")
})