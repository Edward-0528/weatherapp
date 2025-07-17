import React from 'react';
import { useNavigate } from 'react-router-dom';

function SettingsIcon() {
  const navigate = useNavigate();
  return (
    <div className="settings-icon" title="Settings" aria-label="Settings" onClick={() => navigate('/settings')}>
      &#9881;
    </div>
  );
}

export default SettingsIcon;
