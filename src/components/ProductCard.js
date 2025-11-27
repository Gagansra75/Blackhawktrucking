import React from 'react';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product" data-category={product.category.toLowerCase()}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">${product.price.toFixed(2)}</p>
      <p className="category">{product.category}</p>
      <button onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
