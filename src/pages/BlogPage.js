import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../blogData';

function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Safety', 'Technology', 'Sustainability', 'Business', 'Culture'];

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="blog-page">
      <div className="blog-page-header">
        <h1>📝 Blackhawk Blog</h1>
        <p>Industry insights, company news, and expert tips</p>
      </div>

      <div className="blog-container">
        <div className="blog-filters">
          <h3>Categories</h3>
          {categories.map(cat => (
            <button
              key={cat}
              className={`blog-category-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === 'all' ? 'All Posts' : cat}
            </button>
          ))}
        </div>

        <div className="blog-posts">
          {filteredPosts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-card-image">
                <img src={post.image} alt={post.title} />
                <span className="blog-category-tag">{post.category}</span>
              </div>
              <div className="blog-card-content">
                <div className="blog-meta">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2>{post.title}</h2>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-author">
                  <div>
                    <strong>{post.author}</strong>
                    <span>{post.authorRole}</span>
                  </div>
                </div>
                <Link to={`/blog/${post.id}`} className="read-more-btn">
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
