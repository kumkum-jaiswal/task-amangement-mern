const mongoose= require("mongoose");
const expenseSchema=new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer',
        index: false
    },
    email:String,
    password:String
})

module.exports=mongoose.model("expense",expenseSchema);