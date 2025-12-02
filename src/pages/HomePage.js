import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Contact from '../components/Contact';
import AnimatedStats from '../components/AnimatedStats';

function HomePage({ onAddToCart }) {
  return (
    <div className="home-page">
      <Hero />
      <AnimatedStats />
      <ProductGrid onAddToCart={onAddToCart} />
      
      <section className="featured-products-cta">
        <h2>View All Accessories</h2>
        <p>Browse our complete catalog of 25+ truck accessories</p>
        <Link to="/products" className="cta-btn">
          Go to Products Page →
        </Link>
      </section>

      <Testimonials />
      <Newsletter />
      <Contact />
    </div>
  );
}

export default HomePage;
