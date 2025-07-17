import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Settings() {
  const navigate = useNavigate();
  const [autoLocation, setAutoLocation] = useState(true);
  const [customLocation, setCustomLocation] = useState('');

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedAuto = localStorage.getItem('autoLocation');
    const savedCustom = localStorage.getItem('customLocation');
    if (savedAuto !== null) setAutoLocation(savedAuto === 'true');
    if (savedCustom) setCustomLocation(savedCustom);
  }, []);

  // Save settings to localStorage
  const handleSave = () => {
    localStorage.setItem('autoLocation', autoLocation);
    localStorage.setItem('customLocation', customLocation);
    navigate('/');
  };

  return (
    <div className="settings-page" style={{ minHeight: '100vh', background: '#f5ecd7', color: '#222', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <button
        className="back-btn"
        onClick={() => navigate('/')}
        style={{
          position: 'absolute',
          top: 24,
          left: 32,
          background: 'none',
          border: 'none',
          color: '#222',
          fontSize: '1.1rem',
          fontWeight: 200,
          fontFamily: 'Segoe UI, Arial, sans-serif',
          letterSpacing: '1px',
          cursor: 'pointer',
          outline: 'none',
          padding: '4px 12px',
          borderRadius: '6px',
          transition: 'background 0.2s',
        }}
        aria-label="Back to main"
      >
        &#8592; Back
      </button>
      <h1 style={{ fontWeight: 200, fontSize: '2.5rem', marginBottom: '1rem' }}>Settings</h1>
      <div style={{ fontSize: '1.2rem', fontWeight: 300, marginBottom: '2rem' }}>
        Here you can edit your location and other preferences.
      </div>
      <div style={{ marginBottom: '2rem', width: '100%', maxWidth: 340 }}>
        <label style={{ display: 'flex', alignItems: 'center', fontWeight: 200, fontSize: '1.1rem', marginBottom: '1rem', letterSpacing: '1px' }}>
          <input
            type="checkbox"
            checked={autoLocation}
            onChange={e => setAutoLocation(e.target.checked)}
            style={{ marginRight: '10px', accentColor: '#222', width: '18px', height: '18px' }}
          />
          Use automatic location
        </label>
        {!autoLocation && (
          <input
            type="text"
            className="custom-location-input"
            value={customLocation}
            onChange={e => setCustomLocation(e.target.value)}
            placeholder="Enter city or location..."
            style={{
              width: '100%',
              padding: '10px 14px',
              fontSize: '1.1rem',
              fontWeight: 200,
              fontFamily: 'Segoe UI, Arial, sans-serif',
              border: '1px solid #e0d6bc',
              borderRadius: '8px',
              background: '#f5ecd7',
              color: '#222',
              outline: 'none',
              marginTop: '6px',
              marginBottom: '10px',
              boxSizing: 'border-box',
              letterSpacing: '1px',
              transition: 'border 0.2s',
            }}
          />
        )}
        <button
          className="toggle-forecast-btn"
          style={{ width: '100%', marginTop: '10px', fontSize: '1.1rem', fontWeight: 200, borderRadius: '8px' }}
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default Settings;
