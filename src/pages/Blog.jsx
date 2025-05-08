import React, { useState } from "react";
import BlogList from "../components/BlogList";

export default function Blog() {
  const [articles] = useState(() => {
    const saved = localStorage.getItem("blog_articles");
    return saved ? JSON.parse(saved) : [];
  });

  return (
    <div className="blog-page">
      <h1>Mon Blog</h1>
      <BlogList articles={articles} />
    </div>
  );
}
