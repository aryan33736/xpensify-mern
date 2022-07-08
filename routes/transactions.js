const express = require('express');
const router = express.Router();
const { getTransactions,addTransaction,deleteTransaction } = require('../controllers/transactions');

router.route('/')
.get(getTransactions)   // This will get executed if get request is sent by user
.post(addTransaction);  // This will get executed if post request is sent by user

router.route('/:id').delete(deleteTransaction);   // This will get executed if delete request is sent by user

module.exports = router;