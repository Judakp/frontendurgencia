import React, { useState } from "react";

export default function BlogForm({ onAddArticle }) {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const article = {
      title,
      excerpt,
      image,
      date: new Date().toLocaleDateString()
    };

    onAddArticle(article);
  };

  return (
    <form onSubmit={handleSubmit} className="blog-form">
      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Résumé de l'article (HTML autorisé)"
        value={excerpt}
        onChange={(e) => setExcerpt(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="/images/mon-image.jpg"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Publier</button>
    </form>
  );
}
