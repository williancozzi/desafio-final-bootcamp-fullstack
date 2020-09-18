const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const TransactionModel = require("../models/TransactionModel");

const findAllDates = async (req, res) => {
  try {
    const dates = await TransactionModel.collection.distinct("yearMonth");
    res.send(dates);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getTransactionByPeriod = async (req, res) => {
  const period = req.params.period;

  if (!period) {
    return res.status(404).send({
      error: "Informe o parâmetro period, no formato yyyy-mm",
    });
  }

  try {
    const query = { yearMonth: period };
    const transactions = await TransactionModel.find(query);

    let expense = 0,
      income = 0;

    transactions.forEach((transaction) => {
      if (transaction.type === "-") {
        expense = expense + transaction.value;
      } else {
        income = income + transaction.value;
      }
    });

    let balance = income - expense;
    let allData = {
      entries: transactions.length,
      expense,
      income,
      balance,
      transactions,
    };
    res.status(200).send(allData);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const createTransaction = async (req, res) => {
  let objectTransaction = {
    description: req.body.description,
    value: req.body.value,
    category: req.body.category,
    year: req.body.year,
    month: req.body.month,
    day: req.body.day,
    yearMonth: req.body.yearMonth,
    yearMonthDay: req.body.yearMonthDay,
    type: req.body.type,
  };

  try {
    const data = new TransactionModel(objectTransaction);
    const newTransaction = await data.save();

    res.send(newTransaction);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteTransaction = async (req, res) => {
  const _id = req.params.id;

  if (!_id) {
    return res.status(400).send({
      error: "Informe o id a ser deletado",
    });
  }

  try {
    const transaction = await TransactionModel.findOneAndRemove({ _id });
    res.send(transaction);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateTransaction = async (req, res) => {
  const _id = req.params.id;

  if (!_id) {
    return res.status(400).send({
      error: "Informe o id a ser editado",
    });
  }

  try {
    const transactionUpdated = await TransactionModel.findOneAndUpdate(
      { _id: _id },
      req.body,
      { new: true }
    );

    res.send(transactionUpdated);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  findAllDates,
  getTransactionByPeriod,
  createTransaction,
  deleteTransaction,
  updateTransaction,
};
