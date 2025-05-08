import React, { useState, useEffect } from "react";
import BlogForm from "../components/BlogForm";
import BlogList from "../components/BlogList";
import { useNavigate } from "react-router-dom";

export default function AjouterArticle() {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("blog_articles");
    if (saved) {
      setArticles(JSON.parse(saved));
    }
  }, []);

  const handleAddArticle = (article) => {
    const updated = [article, ...articles];
    setArticles(updated);
    localStorage.setItem("blog_articles", JSON.stringify(updated));
    navigate("/blog");
  };

  const handleDeleteArticle = (indexToDelete) => {
    const updated = articles.filter((_, index) => index !== indexToDelete);
    setArticles(updated);
    localStorage.setItem("blog_articles", JSON.stringify(updated));
  };

  return (
    <div className="blog-page">
      <h1>Ajouter un article</h1>
      <BlogForm onAddArticle={handleAddArticle} />
      <h2>Articles existants</h2>
      <BlogList articles={articles} onDelete={handleDeleteArticle} />
    </div>
  );
}