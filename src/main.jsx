import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { IOSDevice } from './ios-frame.jsx';
import { CakeOrderApp } from './cake-app.jsx';
import { DesktopLanding } from './desktop-landing.jsx';

function App() {
  const [view, setView] = useState('site');
  return (
    <div style={{ minHeight: '100vh', background: '#EFEAE3' }}>
      <div style={{
        position: 'fixed', top: 16, right: 16, zIndex: 100,
        display: 'flex', gap: 6, padding: 4,
        background: 'rgba(255,255,255,0.9)', borderRadius: 24,
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
      }}>
        {[['site', 'Site'], ['app', 'App de bolo']].map(([k, l]) => (
          <button key={k} onClick={() => setView(k)} style={{
            padding: '8px 16px', borderRadius: 20,
            background: view === k ? '#E8847C' : 'transparent',
            color: view === k ? 'white' : '#4A3A37',
            border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 500,
          }}>{l}</button>
        ))}
      </div>
      {view === 'site' ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <DesktopLanding />
        </div>
      ) : (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40 }}>
          <IOSDevice width={400} height={820}>
            <CakeOrderApp />
          </IOSDevice>
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
