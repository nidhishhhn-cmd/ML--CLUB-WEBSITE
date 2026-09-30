const express = require('express');
const Student = require('../models/Student');
const { protect } = require('../middleware/auth');

const router = express.Router();

// POST /api/students/register — public, the #join cohort registration form
router.post('/register', async (req, res, next) => {
  try {
    const { name, usn, branch, focusArea, email, phone } = req.body;
    const student = await Student.create({ name, usn, branch, focusArea, email, phone });
    res.status(201).json({ message: 'Registration received!', student });
  } catch (err) {
    next(err);
  }
});

// GET /api/students — Core Access only, view all registrations
router.get('/', protect, async (req, res, next) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.json(students);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
