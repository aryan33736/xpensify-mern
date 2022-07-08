const TransactionModel = require('../models/Transaction');

// @description Get all transactions
// @route GET Request at /api/v1/transactions
// @access public
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await TransactionModel.find();

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

// @description Add transaction
// @route POST Request at /api/v1/transactions
// @access public
exports.addTransaction = async (req, res, next) => {
    try {
        const transaction = await TransactionModel.create(req.body); // req.body is an object that contains _id,text,amount etc.. of any transaction  

        return res.status(201).json({
            success: true,
            data: transaction
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);

            res.status(400).json({
                success: false,
                error: messages
            });
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
}

// @description DELETE transaction
// @route DELETE Request at /api/v1/transactions
// @access public
exports.deleteTransaction = async (req, res, next) => {
    try {
        const transaction = await TransactionModel.findById(req.params.id);

        if (!transaction) {
            return res.status(404).json({
                success: false,
                error: 'No transaction found'
            });
        }

        await transaction.remove();

        return res.status(200).json({
            success: true,
            data: {}
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}