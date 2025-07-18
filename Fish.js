const mongoose = require('mongoose');

const FishSchema = new mongoose.Schema({
  name_en: { type: String, required: true },
  name_sw: { type: String, required: true },
  scientific_name: { type: String, required: true },
  image_url: { type: String, required: true },
  description: String,
  habitat: String,
  distribution: String,
  facts: [String],
});

module.exports = mongoose.model('Fish', FishSchema);