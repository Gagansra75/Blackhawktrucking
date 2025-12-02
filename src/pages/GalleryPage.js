import React from 'react';
import Gallery from '../components/Gallery';

function GalleryPage() {
  return (
    <div className="gallery-page">
      <div className="page-header gallery-page-header">
        <h1>📸 Our Gallery</h1>
        <p>Explore our fleet, team, and operations</p>
      </div>
      <Gallery />
    </div>
  );
}

export default GalleryPage;
