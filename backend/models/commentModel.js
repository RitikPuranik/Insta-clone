let mongoose = require('mongoose')

let commentSchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Upload'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    }
}, { timestamps: true })

let Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment