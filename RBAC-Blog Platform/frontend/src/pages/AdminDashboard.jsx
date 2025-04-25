import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({ title: "", content: "" });
  const token = localStorage.getItem("token");
  const [user, setUser] = useState(null);

  // Fetch blog posts when component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/blogs", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPosts(response.data); // Set posts in state
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    // Fetch user info to check role
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    if (token) {
      fetchPosts();
      fetchUser();
    }
  }, [token]);

  // Create new blog post
  const createPost = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/blogs",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setForm({ title: "", content: "" });
      setPosts([...posts, response.data]); // Add the new post to the state
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  // Check if the user is an admin
  const isAdmin = user?.role === "admin";

  if (!isAdmin) {
    return <p>Access Denied. Only admins can create blog posts.</p>;
  }

  return (
    <div>
      <h2>Admin Dashboard</h2>
      
      {/* Create Blog Form */}
      <h3>Create New Blog</h3>
      <form onSubmit={createPost}>
        <input
          type="text"
          placeholder="Blog Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Content"
          rows={4}
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          required
        ></textarea>
        <button type="submit">Create Blog</button>
      </form>

      {/* Displaying Existing Posts */}
      <h3>Existing Blog Posts</h3>
      {posts.length === 0 ? (
        <p>No blog posts are created yet.</p>
      ) : (
        posts.map((post) => (
          <div key={post._id}>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
          </div>
        ))
      )}
    </div>
  );
}
