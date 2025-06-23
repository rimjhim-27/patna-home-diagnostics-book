const Test = require('../models/Test');

exports.getTests = async (req, res) => {
  try {
    const tests = await Test.find(); // Fetch from MongoDB
    res.json(tests); // Send to frontend
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};