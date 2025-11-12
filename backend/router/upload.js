const express = require("express");
const Upload = require("../models/uploadModel");

const upload = express.Router();

// Existing upload route
upload.post("/upload", async (req, res) => {
  try {
    const { imageUrl } = req.body;
    if (!imageUrl) {
      return res.status(400).json({ message: "Image URL is required" });
    }

    const uploadInstance = new Upload({ imageUrl });
    const saved = await uploadInstance.save();

    res.json({
      success: true,
      message: "Image URL stored successfully",
      data: saved
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Get all uploads
upload.get("/uploaded", async (req, res) => {
  try {
    const images = await Upload.find();
    return res.json(images);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

// ✅ Like/Unlike route
upload.post("/like/:id", async (req, res) => {
  try {
    const { userId } = req.body; 
    const upload = await Upload.findById(req.params.id);

    if (!upload) return res.status(404).json({ message: "Image not found" });

    const alreadyLiked = upload.likedBy.includes(userId);

    if (alreadyLiked) {
      upload.likedBy.pull(userId);
      upload.likes -= 1;
    } else {
      upload.likedBy.push(userId);
      upload.likes += 1;
    }

    await upload.save();
    res.json({ success: true, likes: upload.likes, liked: !alreadyLiked });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = upload;
