import React from 'react';

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <section className="search-section">
      <input
        type="text"
        className="search-bar"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </section>
  );
}

export default SearchBar;
