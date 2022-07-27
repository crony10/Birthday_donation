const mongoose  = require('mongoose');


const donationSchema = mongoose.Schema({
    amount : { type:Number},
    creator : {type:mongoose.Schema.Types.ObjectId, ref: "User", required: true}
});
module.exports = mongoose.model('Donation',donationSchema);