const mongoose = require('mongoose');


// creating a schema
const washerSchema = new mongoose.Schema({
    firstname: {
      type: String,
      trim: true,
    },
    lastname: {
        type: String,
        trim: true,
      },
    date: {
        type: Date,
        trim: true,
      },
    nin: {
        type: String,
        trim: true,
    },                 
    phonenumber: {
      type: String,
      trim: true,
    },
    gender: {
        type: String,
        trim: true,
    },
    residence: {
        type: String,
        trim: true,
    }      
  });

  module.exports = mongoose.model('Washer',washerSchema);
