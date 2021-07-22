const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    numberplate: {
        type:String,
        trim: true
    },
    color: {
        type:String,
        trim: true
    },
    doa: {
        type:String,
        trim: true
    },
    toa: {
        type:String,
        trim: true
    },
    make: {
        type:String,
        trim: true
    },
    washer: {
        type:String,
        trim: true
    },
    package: {
        type:String,
        trim: true
    },
});

module.exports = mongoose.model('Vehicle',vehicleSchema);

