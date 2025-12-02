import React, { useEffect, useRef, useState } from 'react';

function AnimatedStats() {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    { label: 'Miles Driven', value: 5000000, suffix: '+', prefix: '', duration: 2000 },
    { label: 'Deliveries Made', value: 250000, suffix: '+', prefix: '', duration: 2000 },
    { label: 'Happy Clients', value: 1500, suffix: '+', prefix: '', duration: 1500 },
    { label: 'Years Experience', value: 25, suffix: '', prefix: '', duration: 1000 },
    { label: 'Fleet Vehicles', value: 150, suffix: '+', prefix: '', duration: 1500 },
    { label: 'On-Time Rate', value: 98, suffix: '%', prefix: '', duration: 1500 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div className="animated-stats-section" ref={statsRef}>
      <h2>Our Track Record</h2>
      <p className="stats-subtitle">Numbers that speak for themselves</p>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <StatCounter
            key={index}
            label={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            prefix={stat.prefix}
            duration={stat.duration}
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  );
}

function StatCounter({ label, value, suffix, prefix, duration, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const startValue = 0;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * value);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value, duration]);

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <div className="stat-item">
      <div className="stat-number">
        {prefix}{formatNumber(count)}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default AnimatedStats;
