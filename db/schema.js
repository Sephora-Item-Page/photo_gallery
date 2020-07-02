const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  _id: Number,
  productId: String,
  itemName: String,
  type: String,
  lowRes: [String],
  highRes: [String]
});

module.exports = { itemSchema };