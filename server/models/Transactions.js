const {Schema, model, Mongoose} = require('mongoose')
const Tokens = require('./Tokens')


const Transactions = new Schema({
    senderAddress: {type: String, required: true},
    receiveAddress: {type: String, required: true},
    giveToken: {type: Schema.Types.ObjectId, ref: Tokens, required: true},
    status: {type: String, default: null},
    percentComission: {type: Number, required: true},
    creationDate: {type: Date, default: Date.now()}
})

module.exports = model('Transactions', Transactions)
