import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      stars: '⭐⭐⭐⭐⭐',
      text: 'Great quality products and fast shipping! Highly recommend!',
      author: 'John Smith'
    },
    {
      id: 2,
      stars: '⭐⭐⭐⭐⭐',
      text: 'Best place to get trucking accessories. Customer service is excellent.',
      author: 'Sarah Johnson'
    },
    {
      id: 3,
      stars: '⭐⭐⭐⭐⭐',
      text: 'Saved me so much time finding quality gear. Prices are competitive!',
      author: 'Mike Davis'
    }
    ,
    {
      id: 4,
      stars: '⭐⭐⭐⭐⭐',
      text: 'Excellent build quality and very helpful support. Will buy again.',
      author: 'Emily Clark'
    },
    {
      id: 5,
      stars: '⭐⭐⭐⭐⭐',
      text: 'Fast delivery and the accessories fit perfectly. Five stars!',
      author: 'Carlos Martinez'
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-grid">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial">
            <p className="stars">{testimonial.stars}</p>
            <p>{testimonial.text}</p>
            <p className="author">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
