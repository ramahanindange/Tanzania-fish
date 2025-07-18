const mongoose = require('mongoose');
const Fish = require('../models/Fish');
const data = require('../data/fish_sample.json');

mongoose.connect('mongodb://localhost:27017/tzfish', { useNewUrlParser: true, useUnifiedTopology: true });

(async () => {
  await Fish.deleteMany({});
  await Fish.insertMany(data);
  console.log('Imported fish data');
  process.exit();
})();