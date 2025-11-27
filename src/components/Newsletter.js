import React, { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}! Check your email for exclusive deals.`);
    setEmail('');
  };

  return (
    <section className="newsletter">
      <h2>Subscribe to Our Newsletter</h2>
      <p>Get exclusive deals and new product updates delivered to your email</p>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
}

export default Newsletter;
