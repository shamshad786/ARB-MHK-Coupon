const mongoose = require('mongoose');
const SubscriberSchema = new mongoose.Schema({

    email:{
        type: String,
        required: false
    },
    coupon: {
        type: String,
        required: false
    },


    
},{timestamps: true});

const SubscriberModel = mongoose.model('subscriber',SubscriberSchema);
module.exports = SubscriberModel; 