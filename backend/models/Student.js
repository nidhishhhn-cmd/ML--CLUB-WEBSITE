const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    usn: { type: String, required: true, trim: true, uppercase: true },
    branch: { type: String, required: true, trim: true },
    focusArea: { type: String, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, trim: true },
  },
  { timestamps: true }
);

// One registration per USN
studentSchema.index({ usn: 1 }, { unique: true });

module.exports = mongoose.model('Student', studentSchema);
