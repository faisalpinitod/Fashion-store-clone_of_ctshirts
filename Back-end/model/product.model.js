const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    title:String,
    price:Number,
    img:String,
    brand:String
},{
    versionKey:false
})
const ProductModel=mongoose.model("product",productSchema)

module.exports={
    ProductModel
}