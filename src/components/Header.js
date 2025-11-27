import React from 'react';
import { Link } from 'react-router-dom';

function Header({ cartCount, onCartClick, isMenuOpen, onMenuToggle }) {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <h1>🚚 Blackhawk Trucking</h1>
      </Link>
      <button className="menu-toggle" onClick={onMenuToggle}>
        ☰
      </button>
      <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <button className="cart-btn" onClick={onCartClick}>
              Cart ({cartCount})
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
