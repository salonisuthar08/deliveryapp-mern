 const mongoose = require('mongoose');

 const orderItemSchema = new mongoose.Schema({
    menuItem: { type: mongoose.Schema.Types.ObjectId},
    name: { type: String},
    price: {type: Number},
    quantity:{ type: Number},
 });
  const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true},
    items: [orderItemsSchema],
    totalAmount: { type: Number, required: true},
    deliveryAddress: { type: String, required: true},
    status:{
        type: String,
        enum:['pending', 'confirmed', 'preparing', 'out_for_delivery','delivery', 'cancelled'],
        default: 'pending',
    
    },
     deliveryAgent: { type:mongoose.Schema.Types.ObjectId, ref:'User'},
     deliveryLocation: {
        lat:{type:Number},
        lng:{type:Number},
     },
     estimatedTime: {type: Number},
  },{timestamps: true});

  module.exports =mongoose.model('Order',orderSchema);