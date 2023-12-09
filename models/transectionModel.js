const mongoose = require('mongoose')


const transectionSchema = mongoose.Schema({
    userid:{
        type:String,
        required:true
    },    
    amount: {
        type: Number,
        required: [true, 'amount is required']
    },
    type:{
        type:String,
        required:[true,'type is required']
    },
    category: {
        type: String,
        required: [true, 'cat is required']
    },
    reference: {
        type: String
    },
    description: {
        type: String,
        required: [true,'dec is required']
    },
    date: {
        type: Date,
        required: [true, 'date is required']
    }
}, { timestamps: true })


const transectionModel = mongoose.model('transection', transectionSchema);
module.exports = transectionModel;