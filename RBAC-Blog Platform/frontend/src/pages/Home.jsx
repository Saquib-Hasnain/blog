import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/blogs")
      .then((res) => setPosts(res.data))
      .catch(() => alert("Failed to fetch blogs"));
  }, []);

  return (
    <div>
      <h2>Blog Posts</h2>
      {posts.map(post => (
        <div className="blog-card" key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <small>By {post.author.name} on {new Date(post.createdAt).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}
