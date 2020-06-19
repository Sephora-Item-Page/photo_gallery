const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  _id: Number,
  itemName: String,
  type: String,
  photos: [String]
});

module.exports = { itemSchema };