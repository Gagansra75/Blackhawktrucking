import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Cart from './components/Cart';
import Footer from './components/Footer';
import LiveChat from './components/LiveChat';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import CheckoutPage from './pages/CheckoutPage';
import GalleryPage from './pages/GalleryPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import QuotePage from './pages/QuotePage';
import TrackingPage from './pages/TrackingPage';
import TeamPage from './pages/TeamPage';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, { ...product, cartId: Date.now() }]);
    showNotification(`${product.name} added to cart!`);
  };

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  const showNotification = (message) => {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 80px;
      right: 20px;
      background-color: #00897b;
      color: white;
      padding: 15px 20px;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
      z-index: 1000;
      animation: slideIn 0.3s ease-in-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease-in-out';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  };

  return (
    <Router>
      <div className="App">
        <Header 
          cartCount={cart.length} 
          onCartClick={() => setIsCartOpen(true)}
          isMenuOpen={isMenuOpen}
          onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
        />
        
        <Routes>
          <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
          <Route path="/products" element={<ProductsPage onAddToCart={addToCart} />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/checkout" element={<CheckoutPage items={cart} />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/tracking" element={<TrackingPage />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>

        {isCartOpen && (
          <Cart 
            items={cart}
            onClose={() => setIsCartOpen(false)}
            onRemoveItem={removeFromCart}
          />
        )}

        {isChatOpen && (
          <LiveChat onClose={() => setIsChatOpen(false)} />
        )}

        <button 
          className="live-chat-button"
          onClick={() => setIsChatOpen(!isChatOpen)}
          title="Live Chat Support"
        >
          💬
        </button>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
