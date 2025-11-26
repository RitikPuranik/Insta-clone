let express = require('express')
let router = express.Router()
let Comment = require('../models/commentModel')
let auth = require('../middleware/auth')

// Create a new comment
router.post('/comment/:postId',auth, async (req, res) => {
    try {
        const { postId } = req.params
        const { content } = req.body
        const userId = req.user.id

        console.log('by userId:', req.user)
        if (!content) {
            return res.status(400).json({ message: 'Content is required' })
        }
        const newComment = new Comment({
            content,
            postId,
            userId
        })
        await newComment.save()
        res.status(201).json(newComment)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router