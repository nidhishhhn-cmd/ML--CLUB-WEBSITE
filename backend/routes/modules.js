const express = require('express');
const Module = require('../models/Module');
const { protect } = require('../middleware/auth');
const { upload } = require('../config/cloudinary');

const router = express.Router();

// GET /api/modules — public, powers the Modules & Hardware page + lightbox gallery
router.get('/', async (req, res, next) => {
  try {
    const modules = await Module.find().sort({ createdAt: -1 });
    res.json(modules);
  } catch (err) {
    next(err);
  }
});

// POST /api/modules — Core Access only, create a module (name/description, photos added after)
router.post('/', protect, async (req, res, next) => {
  try {
    const { name, description } = req.body;
    const module = await Module.create({ name, description, createdBy: req.user._id });
    res.status(201).json(module);
  } catch (err) {
    next(err);
  }
});

// POST /api/modules/:id/photos — Core Access only, upload up to 8 photos to Cloudinary
router.post('/:id/photos', protect, upload.array('photos', 8), async (req, res, next) => {
  try {
    const module = await Module.findById(req.params.id);
    if (!module) return res.status(404).json({ message: 'Module not found' });

    const newUrls = (req.files || []).map((f) => f.path); // Cloudinary secure URL
    module.photos = [...module.photos, ...newUrls].slice(0, 8);
    await module.save();

    res.json(module);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/modules/:id — Core Access only
router.delete('/:id', protect, async (req, res, next) => {
  try {
    const module = await Module.findByIdAndDelete(req.params.id);
    if (!module) return res.status(404).json({ message: 'Module not found' });
    res.json({ message: 'Module deleted' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
