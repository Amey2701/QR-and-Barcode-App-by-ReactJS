// src/QR.js
import React, { useState, useRef } from 'react';
import { saveAs } from 'file-saver';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function QrCodeGenerator() {
  const rUrl = useRef(); // Reference to the input field
  const [url, setUrl] = useState(''); // State for the URL input
  const [qrcode, setQrcode] = useState(''); // State for the generated QR code

  // Handle URL input change
  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  // Generate QR code when the form is submitted
  const generateQrCode = (event) => {
    event.preventDefault();
    if (url === '') {
      alert('Please enter a valid URL');
      rUrl.current.focus();
      setQrcode('');
      return;
    }
    // Create the QR code URL using the API
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(url)}`;
    setQrcode(qrUrl);
  };

  // Download the generated QR code
  const downloadQrCode = () => {
    if (qrcode === '') {
      alert('No QR code to download');
      return;
    }
    saveAs(qrcode, 'qrcode.png'); // Save the QR code as PNG
  };

  // Clear the input field and QR code
  const clearQrCode = () => {
    setUrl('');
    setQrcode('');
    rUrl.current.focus();
  };

  return (
    <center>
      <h1>QR Code Generator</h1>
      <form onSubmit={generateQrCode}>
        <input
          type="text"
          placeholder="Enter URL"
          onChange={handleUrlChange}
          value={url}
          ref={rUrl} // Reference to focus on the input field when needed
          style={{ padding: '10px', width: '300px', fontSize: '16px' }}
        />
        <br /><br />
        <input
          type="submit"
          value="Generate QR Code"
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        />
      </form>
      <br />
      {qrcode && (
        <div>
          <img src={qrcode} alt="Generated QR Code" />
          <br />
          <div className="button-container" style={{ marginTop: '20px' }}>
            <button
              type="button"
              onClick={downloadQrCode}
              style={{ marginRight: '10px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
            >
              Download QR Code
            </button>
            <button
              type="button"
              onClick={clearQrCode}
              style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
            >
              Clear
            </button>
          </div>
        </div>
      )}
      <div style={{ marginTop: '20px' }}>
        <Link to="/">
          <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Back to Home</button>
        </Link>
      </div>
    </center>
  );
}
