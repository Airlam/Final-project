const mongoose = require('mongoose');

// creating a schema
const expenseSchema = new mongoose.Schema({
    item:{
        type: String,
        trim: true,
    },
    amount: {
        type: Number,
        trim: true,
    }

  });


module.exports = mongoose.model('Expense',expenseSchema);

