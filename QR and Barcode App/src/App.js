// src/App.js
import './App.css';
import QrCodeGenerator from './QR';
import BarcodeGenerator from './Barcode';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage';

function App() {
  return (
    <Router>
      <div style={{ textAlign: 'center' }}>
        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={<HomePage />} />

          {/* QR Code Generator Page Route */}
          <Route path="/qrcode" element={<QrCodeGenerator />} />

          {/* Barcode Generator Page Route */}
          <Route path="/barcode" element={<BarcodeGenerator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
