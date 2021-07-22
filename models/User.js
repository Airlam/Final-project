const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        trim: true,
      },
      lastname: {
          type: String,
          trim: true,
        },
      dob: {
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
      emlployeetype: {
          type: String,
          trim: true,
      }      
});

module.exports = mongoose.model('User',userSchema);

