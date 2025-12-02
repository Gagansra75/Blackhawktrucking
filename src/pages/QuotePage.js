import React, { useState } from 'react';

function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    shipmentType: 'full-truck',
    origin: '',
    destination: '',
    pickupDate: '',
    weight: '',
    dimensions: '',
    cargoDescription: '',
    specialRequirements: '',
    urgency: 'standard'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Quote Request:', formData);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        shipmentType: 'full-truck',
        origin: '',
        destination: '',
        pickupDate: '',
        weight: '',
        dimensions: '',
        cargoDescription: '',
        specialRequirements: '',
        urgency: 'standard'
      });
    }, 5000);
  };

  return (
    <div className="quote-page">
      <div className="quote-page-header">
        <h1>💰 Get a Free Quote</h1>
        <p>Tell us about your shipment and we'll provide a competitive quote within 24 hours</p>
      </div>

      <div className="quote-container">
        <div className="quote-info">
          <div className="quote-benefits">
            <h2>Why Choose Us?</h2>
            <div className="benefit-item">
              <span className="benefit-icon">✓</span>
              <div>
                <h4>Competitive Pricing</h4>
                <p>Best rates in the industry with no hidden fees</p>
              </div>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✓</span>
              <div>
                <h4>Fast Response</h4>
                <p>Quotes delivered within 24 hours</p>
              </div>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✓</span>
              <div>
                <h4>Reliable Service</h4>
                <p>98% on-time delivery rate</p>
              </div>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✓</span>
              <div>
                <h4>24/7 Support</h4>
                <p>Always available to answer your questions</p>
              </div>
            </div>
          </div>

          <div className="quote-contact-box">
            <h3>Need Help?</h3>
            <p>Our team is ready to assist you</p>
            <p><strong>📞 (555) 123-4567</strong></p>
            <p><strong>📧 quotes@blackhawktrucking.com</strong></p>
            <p className="hours">Available 24/7</p>
          </div>
        </div>

        <div className="quote-form-container">
          {submitted && (
            <div className="form-success">
              ✓ Quote request submitted successfully! We'll contact you within 24 hours.
            </div>
          )}

          <form className="quote-form" onSubmit={handleSubmit}>
            <h2>Request Your Quote</h2>

            <div className="form-section">
              <h3>Contact Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label>Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="ABC Corp"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>Shipment Details</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Shipment Type *</label>
                  <select
                    name="shipmentType"
                    value={formData.shipmentType}
                    onChange={handleChange}
                    required
                  >
                    <option value="full-truck">Full Truckload (FTL)</option>
                    <option value="less-than-truck">Less Than Truckload (LTL)</option>
                    <option value="expedited">Expedited Shipping</option>
                    <option value="refrigerated">Refrigerated</option>
                    <option value="flatbed">Flatbed</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Urgency *</label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    required
                  >
                    <option value="standard">Standard (5-7 days)</option>
                    <option value="expedited">Expedited (2-3 days)</option>
                    <option value="rush">Rush (24-48 hours)</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Origin (City, State) *</label>
                  <input
                    type="text"
                    name="origin"
                    value={formData.origin}
                    onChange={handleChange}
                    required
                    placeholder="Chicago, IL"
                  />
                </div>
                <div className="form-group">
                  <label>Destination (City, State) *</label>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    placeholder="Nashville, TN"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Pickup Date *</label>
                  <input
                    type="date"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Weight (lbs) *</label>
                  <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    required
                    placeholder="5000"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Dimensions (L x W x H in inches)</label>
                <input
                  type="text"
                  name="dimensions"
                  value={formData.dimensions}
                  onChange={handleChange}
                  placeholder="48 x 40 x 48"
                />
              </div>

              <div className="form-group">
                <label>Cargo Description *</label>
                <textarea
                  name="cargoDescription"
                  value={formData.cargoDescription}
                  onChange={handleChange}
                  required
                  placeholder="Describe what you're shipping..."
                  rows="3"
                ></textarea>
              </div>

              <div className="form-group">
                <label>Special Requirements</label>
                <textarea
                  name="specialRequirements"
                  value={formData.specialRequirements}
                  onChange={handleChange}
                  placeholder="Any special handling, temperature control, etc."
                  rows="3"
                ></textarea>
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Get Free Quote
            </button>

            <p className="form-note">
              * Required fields. Your information is secure and will never be shared.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default QuotePage;
