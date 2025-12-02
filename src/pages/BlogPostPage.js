import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../blogData';

function BlogPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="blog-not-found">
          <h2>Post Not Found</h2>
          <Link to="/blog" className="back-btn">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="blog-post-page">
      <button className="back-btn" onClick={() => navigate('/blog')}>
        ← Back to Blog
      </button>

      <article className="blog-post">
        <div className="blog-post-header">
          <span className="blog-category-tag">{post.category}</span>
          <h1>{post.title}</h1>
          <div className="blog-post-meta">
            <div className="author-info">
              <div>
                <strong>{post.author}</strong>
                <span>{post.authorRole}</span>
              </div>
            </div>
            <div className="post-details">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        <div className="blog-post-image">
          <img src={post.image} alt={post.title} />
        </div>

        <div className="blog-post-content">
          {post.content.split('\n').map((paragraph, index) => {
            if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
              return <h3 key={index}>{paragraph.replace(/\*\*/g, '')}</h3>;
            }
            if (paragraph.trim()) {
              return <p key={index}>{paragraph}</p>;
            }
            return null;
          })}
        </div>

        <div className="blog-post-footer">
          <div className="share-post">
            <h4>Share this article:</h4>
            <div className="share-buttons">
              <button className="share-btn">Twitter</button>
              <button className="share-btn">Facebook</button>
              <button className="share-btn">LinkedIn</button>
            </div>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <div className="related-posts">
          <h2>Related Articles</h2>
          <div className="related-posts-grid">
            {relatedPosts.map(relatedPost => (
              <Link 
                key={relatedPost.id} 
                to={`/blog/${relatedPost.id}`}
                className="related-post-card"
              >
                <img src={relatedPost.image} alt={relatedPost.title} />
                <div className="related-post-info">
                  <span className="blog-category-tag">{relatedPost.category}</span>
                  <h4>{relatedPost.title}</h4>
                  <p>{relatedPost.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default BlogPostPage;
