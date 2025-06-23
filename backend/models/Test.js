const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

module.exports = mongoose.model('Test', TestSchema);