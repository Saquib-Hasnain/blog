const BlogPost = require('../models/BlogPost');

exports.getAllPosts = async (req, res) => {
  const posts = await BlogPost.find().populate('author', 'name');
  res.json(posts);
};

exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  const post = await BlogPost.create({ title, content, author: req.user._id });
  res.status(201).json(post);
};

exports.deletePost = async (req, res) => {
  const post = await BlogPost.findById(req.params.id);
  if (!post) return res.status(404).json({ message: "Post not found" });
  await post.remove();
  res.json({ message: "Post deleted" });
};
