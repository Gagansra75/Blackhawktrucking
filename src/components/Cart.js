import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cart({ items, onClose, onRemoveItem }) {
  const navigate = useNavigate();
  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  const handleCheckout = () => {
    if (items.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    // Navigate to checkout page and close the cart popup
    onClose();
    navigate('/checkout');
  };

  return (
    <div className="cart-popup active">
      <div className="cart-header">
        <h3>Your Cart</h3>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>
      <ul id="cartItems">
        {items.length === 0 ? (
          <li style={{ textAlign: 'center', color: '#666' }}>Your cart is empty</li>
        ) : (
          items.map(item => (
            <li key={item.cartId}>
              <span>{item.name} - ${item.price.toFixed(2)}</span>
              <button 
                onClick={() => onRemoveItem(item.cartId)}
                style={{ background: 'none', border: 'none', color: 'red', cursor: 'pointer', fontWeight: 'bold' }}
              >
                ✕
              </button>
            </li>
          ))
        )}
      </ul>
      <div className="cart-total">
        <p>Total: $<span id="cartTotal">{calculateTotal().toFixed(2)}</span></p>
      </div>
      <button className="checkout-btn" onClick={handleCheckout}>
        {items.length === 0 ? 'Continue Shopping' : 'Checkout'}
      </button>
    </div>
  );
}

export default Cart;
