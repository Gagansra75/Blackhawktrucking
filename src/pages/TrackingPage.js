import React, { useState } from 'react';

function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Sample tracking data
  const sampleTrackingData = {
    'BHT123456': {
      status: 'In Transit',
      origin: 'Chicago, IL',
      destination: 'Nashville, TN',
      estimatedDelivery: 'December 3, 2025',
      currentLocation: 'Indianapolis, IN',
      progress: 60,
      timeline: [
        { status: 'Order Placed', location: 'Chicago, IL', date: 'Nov 29, 2025 10:30 AM', completed: true },
        { status: 'Picked Up', location: 'Chicago, IL', date: 'Nov 29, 2025 2:15 PM', completed: true },
        { status: 'In Transit', location: 'Indianapolis, IN', date: 'Dec 1, 2025 8:45 AM', completed: true },
        { status: 'Out for Delivery', location: 'Nashville, TN', date: 'Pending', completed: false },
        { status: 'Delivered', location: 'Nashville, TN', date: 'Pending', completed: false }
      ]
    },
    'BHT789012': {
      status: 'Delivered',
      origin: 'Los Angeles, CA',
      destination: 'Phoenix, AZ',
      estimatedDelivery: 'November 28, 2025',
      currentLocation: 'Phoenix, AZ',
      progress: 100,
      timeline: [
        { status: 'Order Placed', location: 'Los Angeles, CA', date: 'Nov 25, 2025 9:00 AM', completed: true },
        { status: 'Picked Up', location: 'Los Angeles, CA', date: 'Nov 25, 2025 1:30 PM', completed: true },
        { status: 'In Transit', location: 'San Bernardino, CA', date: 'Nov 26, 2025 7:20 AM', completed: true },
        { status: 'Out for Delivery', location: 'Phoenix, AZ', date: 'Nov 28, 2025 6:00 AM', completed: true },
        { status: 'Delivered', location: 'Phoenix, AZ', date: 'Nov 28, 2025 10:45 AM', completed: true }
      ]
    },
    'BHT345678': {
      status: 'Out for Delivery',
      origin: 'New York, NY',
      destination: 'Boston, MA',
      estimatedDelivery: 'December 1, 2025',
      currentLocation: 'Boston, MA',
      progress: 90,
      timeline: [
        { status: 'Order Placed', location: 'New York, NY', date: 'Nov 30, 2025 8:15 AM', completed: true },
        { status: 'Picked Up', location: 'New York, NY', date: 'Nov 30, 2025 11:45 AM', completed: true },
        { status: 'In Transit', location: 'Hartford, CT', date: 'Nov 30, 2025 6:30 PM', completed: true },
        { status: 'Out for Delivery', location: 'Boston, MA', date: 'Dec 1, 2025 7:00 AM', completed: true },
        { status: 'Delivered', location: 'Boston, MA', date: 'Pending', completed: false }
      ]
    }
  };

  const handleTrack = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const result = sampleTrackingData[trackingNumber.toUpperCase()];
      if (result) {
        setTrackingResult(result);
      } else {
        setTrackingResult({ error: true });
      }
      setLoading(false);
    }, 1000);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return '#00897b';
      case 'Out for Delivery':
        return '#1976d2';
      case 'In Transit':
        return '#f57c00';
      default:
        return '#666';
    }
  };

  return (
    <div className="tracking-page">
      <div className="tracking-page-header">
        <h1>📦 Track Your Shipment</h1>
        <p>Enter your tracking number to see real-time updates</p>
      </div>

      <div className="tracking-container">
        <div className="tracking-search">
          <form onSubmit={handleTrack}>
            <div className="tracking-input-group">
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter tracking number (e.g., BHT123456)"
                required
              />
              <button type="submit" disabled={loading}>
                {loading ? 'Tracking...' : 'Track'}
              </button>
            </div>
          </form>
          <p className="tracking-help">
            Try: <span onClick={() => setTrackingNumber('BHT123456')} className="sample-tracking">BHT123456</span>, 
            <span onClick={() => setTrackingNumber('BHT789012')} className="sample-tracking"> BHT789012</span>, or 
            <span onClick={() => setTrackingNumber('BHT345678')} className="sample-tracking"> BHT345678</span>
          </p>
        </div>

        {trackingResult && (
          trackingResult.error ? (
            <div className="tracking-error">
              <h3>⚠️ Tracking Number Not Found</h3>
              <p>Please check your tracking number and try again.</p>
              <p>If you continue to experience issues, contact our support team at (555) 123-4567</p>
            </div>
          ) : (
            <div className="tracking-result">
              <div className="tracking-status-card">
                <div className="status-header">
                  <div>
                    <h2>Shipment Status</h2>
                    <p className="tracking-number">Tracking #: {trackingNumber.toUpperCase()}</p>
                  </div>
                  <div 
                    className="status-badge" 
                    style={{ backgroundColor: getStatusColor(trackingResult.status) }}
                  >
                    {trackingResult.status}
                  </div>
                </div>

                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${trackingResult.progress}%` }}
                  ></div>
                </div>

                <div className="tracking-details">
                  <div className="detail-item">
                    <span className="detail-label">Origin:</span>
                    <span className="detail-value">{trackingResult.origin}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Destination:</span>
                    <span className="detail-value">{trackingResult.destination}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Current Location:</span>
                    <span className="detail-value">{trackingResult.currentLocation}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Estimated Delivery:</span>
                    <span className="detail-value">{trackingResult.estimatedDelivery}</span>
                  </div>
                </div>
              </div>

              <div className="tracking-timeline">
                <h3>Shipment Timeline</h3>
                <div className="timeline">
                  {trackingResult.timeline.map((event, index) => (
                    <div 
                      key={index} 
                      className={`timeline-event ${event.completed ? 'completed' : 'pending'}`}
                    >
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <h4>{event.status}</h4>
                        <p className="timeline-location">{event.location}</p>
                        <p className="timeline-date">{event.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="tracking-actions">
                <button className="action-btn" onClick={() => window.print()}>
                  🖨️ Print Details
                </button>
                <button className="action-btn" onClick={() => alert('Email notification sent!')}>
                  📧 Email Updates
                </button>
                <button className="action-btn" onClick={() => alert('Support: (555) 123-4567')}>
                  💬 Contact Support
                </button>
              </div>
            </div>
          )
        )}

        <div className="tracking-info-section">
          <h3>Tracking Information</h3>
          <div className="info-grid">
            <div className="info-card">
              <h4>🔍 How to Track</h4>
              <p>Enter your tracking number in the field above. You'll receive real-time updates on your shipment's location and status.</p>
            </div>
            <div className="info-card">
              <h4>📱 Mobile Tracking</h4>
              <p>Track on the go! Bookmark this page or save your tracking number for quick access from any device.</p>
            </div>
            <div className="info-card">
              <h4>🔔 Notifications</h4>
              <p>Get automatic email and SMS notifications for important shipment updates and delivery confirmations.</p>
            </div>
            <div className="info-card">
              <h4>❓ Need Help?</h4>
              <p>Can't find your tracking number? Contact us at (555) 123-4567 or email support@blackhawktrucking.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackingPage;
