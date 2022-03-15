const User = require('./models/User')
const Transactions = require('./models/Transactions')
const Role = require('./models/Role')
const Tokens = require('./models/Tokens')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator')
const {secret} = require("./config")

class transactionController {
    async getTransactions(req ,res) {
        try {
            const transactions = await Transactions.find().populate('giveToken')
            res.json(transactions)
        } catch (e) {
            console.log(e)
        }
    }
    async addTransaction(req, res) {
        try {
            const transaction = await Transactions.create({...req.body})
            res.json(transaction)
        } catch (e) {
            console.log(e)
        }
    }
    async deleteTransaction(req, res) {
        try {
            const deletedToken = await Tokens.deleteMany({_id: req.body.ids})
            res.json(deletedToken)
        } catch (e) {
            console.log(e)
        }
    }
    async changeStatusTransaction(req, res) {
        try { 
        console.log(req.body.id, req.body.status)
        const transaction = await Transactions.findOneAndUpdate({"_id": req.body.id}, {status: req.body.status})
            res.json(transaction)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new transactionController()
