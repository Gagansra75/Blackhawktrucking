import React from 'react';
import allTestimonials from '../testimonialsData';

const TestimonialsPage = () => {
  return (
    <div className="testimonials-page">
      <div className="testimonials-page-header">
        <h1>What Our Customers Say</h1>
        <p>Trusted by hundreds of trucking companies nationwide</p>
      </div>

      <div className="testimonials-container">
        <div className="testimonials-grid">
          {allTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-avatar" />
                <div className="testimonial-info">
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-title">{testimonial.title}</p>
                  <p className="testimonial-company">{testimonial.company}</p>
                </div>
              </div>

              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>

              <p className="testimonial-text">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>

      <div className="testimonials-stats">
        <div className="stat">
          <h3>15+</h3>
          <p>Years of Service</p>
        </div>
        <div className="stat">
          <h3>500+</h3>
          <p>Satisfied Customers</p>
        </div>
        <div className="stat">
          <h3>1000+</h3>
          <p>Products Shipped</p>
        </div>
        <div className="stat">
          <h3>99%</h3>
          <p>Customer Satisfaction</p>
        </div>
      </div>

      <div className="testimonials-cta">
        <h2>Join Thousands of Satisfied Customers</h2>
        <p>Ready to upgrade your trucking operation?</p>
        <a href="/products" className="cta-button">Shop Our Products</a>
      </div>
    </div>
  );
};

export default TestimonialsPage;
