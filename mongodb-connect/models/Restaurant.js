 const mongoose = require('mongoose');

 const menuItemSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String},
    isAvailable: {type: Boolean, default: true},
    imageUrl: {type: String},
 });

 const restaurantSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String},
    address: {type: String, required: true},
    cuisineType: {type:String},
    imageUrl: {type: String},
    isOpen: { type: Boolean, default: true},
    menu: [menuItemSchema],
    owner: { type:mongoose.Schema.Types.ObjectId, ref:'User'},

 }, {timestamps: true});

 module.exports = mongoose.model('Restaurant', restaurantSchema);