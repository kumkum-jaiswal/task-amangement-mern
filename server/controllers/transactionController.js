const transModel= require("../models/transactionModel");
const expenseModel=require("../models/expenseModel");


const amountSave=async(req, res)=>{
 const {name,email, pass, id}= req.body;
  const transData= await transModel.create({
       user:id,
       name:name,
       email:email,
       pass:pass,
      
  });
  res.send(transData)
}

const displayEarning=async(req, res)=>{
  let id=req.body.id;
 
  const trnData= await expenseModel.find({user:id });
  res.status(200).send(trnData);
  
  
}
const expenseSave=async(req, res)=>{
  const {name,email,password,id }= req.body;

  const myData= new expenseModel({
    name:name,
    email:email,
    password:password,
    user:id
    
  })
  await myData.save();
  res.status(202).send(myData);
}

// const Display=async(req, res)=>{
 
//   try {
//       const studata= await transModel.find();
//       res.status(200).json(studata);
//   } catch (error) {
//        res.status(404).json("Data from MongoDB not Found!")
//   }
// }

const studentSave=async(req, res)=>{
  const {task,des}= req.body;
   try {
      const Student=await StuModel.create({
          task:task,
          des:des
      })  
      res.status(200).json(Student);
   } catch (error) {
      res.status(404).json("MongoDB Server No Strated!!!");
   }
}
  
  



module.exports={
    amountSave,
    expenseSave,

    displayEarning,
    studentSave
    
}