const express = require('express');
const router = express.Router();
const Fish = require('../models/Fish');

// Get all fish
router.get('/', async (req, res) => {
  const fish = await Fish.find();
  res.json(fish);
});

// Get fish by ID
router.get('/:id', async (req, res) => {
  const fish = await Fish.findById(req.params.id);
  res.json(fish);
});

// Add new fish
router.post('/', async (req, res) => {
  const fish = new Fish(req.body);
  await fish.save();
  res.status(201).json(fish);
});

// Edit fish
router.put('/:id', async (req, res) => {
  const fish = await Fish.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(fish);
});

// Delete fish
router.delete('/:id', async (req, res) => {
  await Fish.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;