const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    phone:Number
},{
    versionKey:false
})

const UserModel=mongoose.model("user",userSchema)

module.exports={
    UserModel
}