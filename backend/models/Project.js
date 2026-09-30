const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    category: {
      type: String,
      enum: ['Computer Vision', 'NLP & LLMs', 'Edge AI', 'Competitive ML'],
      required: true,
    },
    demoUrl: { type: String, trim: true },
    githubUrl: { type: String, trim: true },
    photos: [{ type: String }], // Cloudinary URLs
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', projectSchema);
