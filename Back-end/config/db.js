const mongoose=require("mongoose")


const connection=mongoose.connect("mongodb+srv://faisalp:faisal@cluster0.bsjdyfg.mongodb.net/cwproject?retryWrites=true&w=majority")

module.exports={
    connection
}
