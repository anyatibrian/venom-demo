import mongoose from 'mongoose'
const Schema = mongoose.Schema

const TransationSchema = new Schema({

})

const  Transactions = mongoose.model('Transactions', TransationSchema)
export  default Transactions