const express = require('express');
const router = express.Router();
const { authenticate } = require('../middlewares/authMiddleware');
const { authorizeRoles } = require('../middlewares/roleMiddleware');
const { getAllPosts, createPost, deletePost } = require('../controllers/blogController');

router.get('/', authenticate, getAllPosts);
router.post('/', authenticate, authorizeRoles('admin'), createPost);
router.delete('/:id', authenticate, authorizeRoles('admin'), deletePost);

module.exports = router;
