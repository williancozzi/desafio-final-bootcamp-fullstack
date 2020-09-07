const express = require("express");
const service = require("../services/transactionService");
const transactionRouter = express.Router();

transactionRouter.get("/dates", service.findAllDates);
transactionRouter.get("/byperiod/:period", service.getTransactionByPeriod);
transactionRouter.post("/create", service.createTransaction);
transactionRouter.delete("/delete/:id", service.deleteTransaction);
transactionRouter.put("/update/:id", service.updateTransaction);

module.exports = transactionRouter;
