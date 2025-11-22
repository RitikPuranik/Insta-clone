const express = require("express");
const Upload = require("../models/uploadModel");
const verify = require("../middleware/verifyToken");

const like = express.Router();

like.post("/like/:id", verify, async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.user.id;

    const post = await Upload.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const userIndex = post.likedBy.indexOf(userId);

    if (userIndex !== -1) {
      // 🔥 DISLIKE
      post.likeCount -= 1;
      post.likedBy.splice(userIndex, 1);
      await post.save();
      return res.json({
        success: true,
        liked: false,
        message: "Like removed",
        likeCount: post.likeCount
      });
    }

    // ❤️ LIKE
    post.likeCount += 1;
    post.likedBy.push(userId);
    await post.save();

    return res.json({
      success: true,
      liked: true,
      message: "Liked successfully",
      likeCount: post.likeCount
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = like;
