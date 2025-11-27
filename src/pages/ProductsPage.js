import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { allProducts, categories } from '../productsData';

function ProductsPage({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = allProducts.filter(product => {
    const matchCategory = selectedCategory === 'All Products' || product.category === selectedCategory;
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       product.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="products-page">
      <div className="products-page-header">
        <h1>All Truck Accessories</h1>
        <p>Browse our complete catalog of premium trucking gear</p>
      </div>

      <div className="products-page-controls">
        <div className="search-container">
          <input
            type="text"
            className="products-search"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="categories-filter">
          <h3>Filter by Category:</h3>
          <div className="category-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="products-count">
        <p>Showing {filteredProducts.length} of {allProducts.length} products</p>
      </div>

      <div className="products-grid-full">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))
        ) : (
          <div className="no-products">
            <p>No products found matching your criteria.</p>
            <button onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All Products');
            }}>
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductsPage;
