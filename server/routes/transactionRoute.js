const express = require("express");
const router= express.Router();

const transactionController= require("../controllers/transactionController");


router.post("/amountsave",  transactionController.amountSave);
router.post("/displayearning",  transactionController.displayEarning);
router.post("/expensesave", transactionController.expenseSave);
router.post("/studentsave", transactionController.studentSave);

// router.get("/display", transactionController.Display);


module.exports=router;
