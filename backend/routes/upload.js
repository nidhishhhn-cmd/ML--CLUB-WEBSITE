const express = require('express');
const { protect } = require('../middleware/auth');
const { upload } = require('../config/cloudinary');

const router = express.Router();

// POST /api/upload — Core Access only. Generic image upload used by the
// "Add Project" modal to get Cloudinary URLs before creating the project.
router.post('/', protect, upload.array('photos', 8), (req, res) => {
  const urls = (req.files || []).map((f) => f.path);
  res.json({ urls });
});

module.exports = router;
