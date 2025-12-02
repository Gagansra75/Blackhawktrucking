import React, { useState } from 'react';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const galleryImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800', category: 'fleet', title: 'Long Haul Truck', description: 'Our modern fleet of long-haul trucks' },
    { id: 2, src: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800', category: 'fleet', title: 'Semi Truck', description: 'State-of-the-art semi trucks for efficient delivery' },
    { id: 3, src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800', category: 'fleet', title: 'Delivery Van', description: 'Local delivery vans for quick service' },
    { id: 4, src: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800', category: 'team', title: 'Professional Drivers', description: 'Our experienced and certified drivers' },
    { id: 5, src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800', category: 'team', title: 'Team Meeting', description: 'Regular safety and training sessions' },
    { id: 6, src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800', category: 'warehouse', title: 'Warehouse Operations', description: 'Modern warehouse facilities' },
    { id: 7, src: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800', category: 'warehouse', title: 'Loading Bay', description: 'Efficient loading and unloading operations' },
    { id: 8, src: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800', category: 'delivery', title: 'On the Road', description: 'Delivering across the nation' },
    { id: 9, src: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800', category: 'delivery', title: 'Night Delivery', description: '24/7 delivery services' },
    { id: 10, src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800', category: 'fleet', title: 'Truck Maintenance', description: 'Regular maintenance for safety' },
    { id: 11, src: 'https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=800', category: 'team', title: 'Customer Service', description: 'Friendly and professional staff' },
    { id: 12, src: 'https://images.unsplash.com/photo-1586528116493-a029325540fa?w=800', category: 'delivery', title: 'Express Delivery', description: 'Fast and reliable shipping' },
  ];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const categories = [
    { value: 'all', label: 'All Photos' },
    { value: 'fleet', label: 'Our Fleet' },
    { value: 'team', label: 'Our Team' },
    { value: 'warehouse', label: 'Facilities' },
    { value: 'delivery', label: 'In Action' },
  ];

  return (
    <div className="gallery-section">
      <div className="gallery-header">
        <h2>Photo Gallery</h2>
        <p>Take a look at our operations, fleet, and team</p>
      </div>

      <div className="gallery-filters">
        {categories.map(cat => (
          <button
            key={cat.value}
            className={`filter-btn ${filter === cat.value ? 'active' : ''}`}
            onClick={() => setFilter(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredImages.map(image => (
          <div 
            key={image.id} 
            className="gallery-item"
            onClick={() => openLightbox(image)}
          >
            <img src={image.src} alt={image.title} />
            <div className="gallery-overlay">
              <h4>{image.title}</h4>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>✕</button>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
