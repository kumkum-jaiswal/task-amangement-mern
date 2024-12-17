const express = require("express");
const mongoose=require("mongoose");
const app= express();
const dotenv=require('dotenv');
const bodyparser = require('body-parser');
dotenv.config();
var cors = require('cors');
const port=process.env.PORT || 8000
app.use(cors());
mongoose.connect(process.env.DATABASE).then(()=>{
    console.log("MongoDB connected!!!");
})
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
const customerRoute= require("./routes/customerRoutes");
const transactionRoute= require("./routes/transactionRoute");
app.use("/customer", customerRoute);
app.use("/transactions", transactionRoute);
app.listen(port, ()=>{
    console.log(`Server run on port: ${port}`)
})