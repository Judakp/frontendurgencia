import React from "react";
import "./blog.css";

export default function BlogList({ articles, onDelete }) {
  return (
    <div className="blog-list">
      {articles.map((article, index) => (
        <div className="blog-card" key={index}>
          <img
            src={article.image}
            alt={article.title}
            className="blog-image"
          />
          <div className="blog-content">
            <h2>{article.title}</h2>
            <div
              className="blog-excerpt"
              dangerouslySetInnerHTML={{ __html: article.excerpt }}
            />
            <span className="blog-date">{article.date}</span>
            {onDelete && (
              <button
                className="delete-button"
                onClick={() => onDelete(index)}
              >
                Supprimer
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}