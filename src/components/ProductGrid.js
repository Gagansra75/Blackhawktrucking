import React from 'react';
import ProductCard from './ProductCard';
import { allProducts } from '../productsData';

function ProductGrid({ onAddToCart }) {
  // Show only first 4 products as featured
  const featuredProducts = allProducts.slice(0, 4);

  return (
    <section id="products" className="products">
      <h2>Featured Products</h2>
      <p className="products-subtitle">Check out our most popular items (view all on the Products page)</p>
      <div className="product-grid">
        {featuredProducts.map(product => (
          <ProductCard 
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
