const CustModel= require("../models/customerModel");
const customerSave=async(req, res)=>{
    const {name, city, email, password}= req.body;
    try {
        const Customer= await CustModel.create({
                     name:name,
                     city:city,
                     email:email,
                     password:password
        })
        res.status(200).send(Customer);
    } catch (error) {
         res.status(400).send(error);
    }
}
const customerCheck=async(req, res)=>{
      try {
         
        const {email, password}= req.body;
        const data= await  CustModel.findOne({email:email});  
          if(!data)
          {
             return res.status(404).send("Email not Found")
          }
          if (data.password==password)
          {
             res.status(200).send(data);
          }
          else 
          {
             return res.status(404).send("password dose not match")
          }

      } catch (error) {
        
        res.status(404).send("server not work")
      }
    }

module.exports={
    customerSave,
    customerCheck
}