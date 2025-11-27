import React from 'react';

function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background video - place your file at /public/videos/truck-hero.mp4 */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=1200&h=500&fit=crop"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src="/videos/truck-hero.mp4" type="video/mp4" />
        {/* Fallback text / image will show if video not supported */}
      </video>

      <div className="hero-content">
        <h2>Your One-Stop Shop for Trucking Accessories</h2>
        <p>High-quality gear for professional truckers, delivered fast.</p>
        <a className="hero-btn" href="#products">Shop Now</a>
      </div>
    </section>
  );
}

export default Hero;
