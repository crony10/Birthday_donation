const mongoose  = require('mongoose');

const donationSchema = mongoose.Schema({
    amount : { type:Number }
});

module.exports = mongoose.model('Donation',donationSchema);