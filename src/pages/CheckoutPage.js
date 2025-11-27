import React, { useState } from 'react';

function CheckoutPage({ items = [] }) {
  const [step, setStep] = useState('shipping'); // 'shipping' | 'payment' | 'confirmation'
  const [shipping, setShipping] = useState({ name: '', email: '', address: '' });
  const [payment, setPayment] = useState({ cardName: '', cardNumber: '', expiry: '', cvc: '' });
  const [processing, setProcessing] = useState(false);

  const calculateTotal = () => items.reduce((t, i) => t + (i.price || 0), 0);

  const handleShippingChange = (e) => setShipping({ ...shipping, [e.target.name]: e.target.value });
  const handlePaymentChange = (e) => setPayment({ ...payment, [e.target.name]: e.target.value });

  const canContinueToPayment = () => shipping.name.trim() && shipping.email.includes('@') && shipping.address.trim();

  const canPlaceOrder = () => {
    // very basic validation
    const cardNum = payment.cardNumber.replace(/\s+/g, '');
    return payment.cardName.trim() && cardNum.length >= 13 && payment.expiry.trim() && payment.cvc.trim().length >= 3;
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (!canContinueToPayment()) {
      alert('Please fill out valid shipping details before continuing.');
      return;
    }
    setStep('payment');
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!canPlaceOrder()) {
      alert('Please enter valid card details.');
      return;
    }
    setProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setProcessing(false);
      setStep('confirmation');
      // In a real app, you'd send shipping + payment to backend here
    }, 1200);
  };

  return (
    <div className="products-page">
      <div className="products-page-header">
        <h1>Checkout</h1>
        <p>Secure checkout — enter shipping and payment details below.</p>
      </div>

      <div style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 30 }}>
          <main>
            {step === 'shipping' && (
              <form className="contact-form" onSubmit={handleContinue}>
                <h2>Shipping Details</h2>
                <div className="form-group">
                  <label htmlFor="name">Full name</label>
                  <input id="name" name="name" value={shipping.name} onChange={handleShippingChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" value={shipping.email} onChange={handleShippingChange} type="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <textarea id="address" name="address" value={shipping.address} onChange={handleShippingChange} required />
                </div>

                <div style={{ display: 'flex', gap: 12 }}>
                  <button className="submit-btn" type="submit">Continue to Payment</button>
                </div>
              </form>
            )}

            {step === 'payment' && (
              <form className="contact-form" onSubmit={handlePlaceOrder}>
                <h2>Payment Details</h2>

                <div className="form-group">
                  <label htmlFor="cardName">Name on card</label>
                  <input id="cardName" name="cardName" value={payment.cardName} onChange={handlePaymentChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="cardNumber">Card number</label>
                  <input id="cardNumber" name="cardNumber" value={payment.cardNumber} onChange={handlePaymentChange} placeholder="1234 5678 9012 3456" inputMode="numeric" required />
                </div>

                <div style={{ display: 'flex', gap: 12 }}>
                  <div className="form-group" style={{ flex: 1 }}>
                    <label htmlFor="expiry">Expiry (MM/YY)</label>
                    <input id="expiry" name="expiry" value={payment.expiry} onChange={handlePaymentChange} placeholder="MM/YY" required />
                  </div>
                  <div className="form-group" style={{ width: 120 }}>
                    <label htmlFor="cvc">CVC</label>
                    <input id="cvc" name="cvc" value={payment.cvc} onChange={handlePaymentChange} placeholder="123" inputMode="numeric" required />
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 12, marginTop: 10 }}>
                  <button type="button" className="cta-btn" onClick={() => setStep('shipping')}>Back to Shipping</button>
                  <button className="submit-btn" type="submit" disabled={processing}>{processing ? 'Processing...' : `Pay $${calculateTotal().toFixed(2)}`}</button>
                </div>
              </form>
            )}

            {step === 'confirmation' && (
              <div className="contact-form">
                <h2>Thank you — order confirmed!</h2>
                <p>We have received your order and sent a confirmation email to <strong>{shipping.email}</strong>.</p>
                <p>Order total: <strong>${calculateTotal().toFixed(2)}</strong></p>
                <p style={{ marginTop: 10 }}>You can now close this tab or continue shopping.</p>
              </div>
            )}
          </main>

          <aside>
            <div className="contact-info-section">
              <h2>Order Summary ({items.length} items)</h2>
              <div style={{ marginTop: 15 }}>
                {items.length === 0 ? (
                  <p>Your cart is empty.</p>
                ) : (
                  items.map(it => (
                    <div key={it.cartId} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                      <span>{it.name}</span>
                      <strong>${(it.price || 0).toFixed(2)}</strong>
                    </div>
                  ))
                )}
              </div>
              <div style={{ borderTop: '1px solid #eee', paddingTop: 15, marginTop: 15 }}>
                <p style={{ fontWeight: 'bold' }}>Total: ${calculateTotal().toFixed(2)}</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
