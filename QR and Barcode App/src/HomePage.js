// src/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Code Generator</h1>
      <p>Select an option below:</p>

      <div>
        <Link to="/qrcode">
          <button style={{ margin: '10px', padding: '10px 20px', fontSize: '18px' }}>
            QR Code Generator
          </button>
        </Link>
        <Link to="/barcode">
          <button style={{ margin: '10px', padding: '10px 20px', fontSize: '18px' }}>
            Barcode Generator
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
