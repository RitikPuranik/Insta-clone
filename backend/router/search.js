const express = require('express');
const User = require('../models/userModel');

const search = express.Router();

search.get('/search', async (req, res) => {
  try {
    const query = req.query.q;
    if (!query) {
      return res.status(400).json({ message: "Query parameter 'q' is required" });
    }
    const results = await User.find({
      $or: [
        { userName: { $regex: query, $options: 'i' } }
      ]
    }).limit(10);
    res.json({ success: true, results });
  } 
  catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = search;