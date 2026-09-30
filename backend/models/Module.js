const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, default: '' },
    photos: [{ type: String }], // Cloudinary URLs, up to 8 enforced in controller
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Module', moduleSchema);
