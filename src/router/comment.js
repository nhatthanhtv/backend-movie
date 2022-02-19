const express = require('express');
const router = express.Router();

const commentController = require('../controller/CommentController')

router.post('/',commentController.getComments)
router.post('/addcomment',commentController.addcomment)

module.exports = router