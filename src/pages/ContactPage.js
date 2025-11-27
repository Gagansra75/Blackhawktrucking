import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-page">
      <div className="contact-page-header">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you. Contact us with any questions or inquiries.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info-section">
          <h2>Blackhawk Trucking Accessories</h2>
          
          <div className="contact-info-item">
            <h3>📍 Address</h3>
            <p>1225 Industrial Boulevard</p>
            <p>Dallas, TX 75201</p>
          </div>

          <div className="contact-info-item">
            <h3>📞 Phone</h3>
            <p>1-800-BLACKHAWK</p>
            <p>(1-800-252-2492)</p>
            <p className="contact-hours">Mon-Fri: 8am-8pm CST</p>
            <p className="contact-hours">Sat: 9am-5pm CST</p>
          </div>

          <div className="contact-info-item">
            <h3>✉️ Email</h3>
            <p>support@blackhawktrucking.com</p>
            <p>sales@blackhawktrucking.com</p>
          </div>

          <div className="contact-info-item">
            <h3>🕐 Business Hours</h3>
            <p>Monday - Friday: 8:00 AM - 8:00 PM CST</p>
            <p>Saturday: 9:00 AM - 5:00 PM CST</p>
            <p>Sunday: Closed</p>
          </div>

          <div className="contact-info-item">
            <h3>💬 Live Chat</h3>
            <p>Available Mon-Fri 8am-6pm CST</p>
            <button className="live-chat-btn">Start Live Chat</button>
          </div>

          <div className="contact-social">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">YouTube</a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send us a Message</h2>

          {submitted && (
            <div className="form-success">
              ✓ Thank you! We received your message and will get back to you shortly.
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Smith"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(555) 123-4567"
            />
          </div>

          <div className="form-group">
            <label htmlFor="company">Company Name</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your Company"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="">Select a subject...</option>
              <option value="product-inquiry">Product Inquiry</option>
              <option value="bulk-order">Bulk Order</option>
              <option value="technical-support">Technical Support</option>
              <option value="shipping">Shipping Question</option>
              <option value="return">Return/Exchange</option>
              <option value="general">General Question</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us how we can help..."
              rows="6"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>

          <p className="form-note">* Required fields</p>
        </form>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>What's your return policy?</h3>
            <p>We offer 30-day returns on most items in original condition. Contact our support team for details.</p>
          </div>
          <div className="faq-item">
            <h3>Do you offer bulk discounts?</h3>
            <p>Yes! Contact our sales team at sales@blackhawktrucking.com for bulk pricing on orders over 10 units.</p>
          </div>
          <div className="faq-item">
            <h3>How long does shipping take?</h3>
            <p>Standard shipping takes 5-7 business days. Express options available at checkout.</p>
          </div>
          <div className="faq-item">
            <h3>Do you provide installation support?</h3>
            <p>We offer detailed installation guides and video tutorials. Technical support available via phone and email.</p>
          </div>
        </div>
      </div>

      <div className="contact-cta">
        <h2>Ready to Upgrade Your Fleet?</h2>
        <p>Browse our complete catalog of truck accessories</p>
        <a href="/products" className="cta-button">Shop Now</a>
      </div>
    </div>
  );
};

export default ContactPage;
