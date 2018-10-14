const mongoose = require('mongoose');

const destinationsSchema = new mongoose.Schema({
  name: {type: String, require: true},
  fly: Boolean,
  climate: String,
  image: String
})
module.exports = mongoose.model('Destination', destinationsSchema);
