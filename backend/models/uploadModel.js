const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true
  },
  likeCount: {
    type: Number,
    default: 0
  },
  likedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"
    }
  ],
  username: { 
    type: String, 
    required: false 
  }
});

module.exports = mongoose.model("Upload", uploadSchema);
