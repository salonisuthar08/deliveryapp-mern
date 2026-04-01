 const mongoose = require('mongoose');

 const cartItemSchema = new mongoose.Schema({
    menuItem: { type: mongoose.Schema.Types.ObjectId},
    name: { type: String},
    price: { type: Number },
    quantity: { type: Number, default: 1},

 });
 const cartSchema = new mongoose.Schema({
    user: {type:mongoose.Schema.Types.ObjectId, ref:'User', required: true},
    restaurant: {type: mongoose.Schema.Types.ObjectId, ref:'Restaurant'},
    items: [cartItemSchema],
 }, {timestamps: true});

 module.exports = mongoose.model('Cart', cartSchema);