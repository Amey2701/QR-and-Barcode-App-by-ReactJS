import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Barcode from 'react-barcode';
import { saveAs } from 'file-saver';
import ReactDOM from 'react-dom';


const BarcodeGenerator = () => {
  const [inputValue, setInputValue] = useState(''); // State for user input
  const [barcodes, setBarcodes] = useState([]); // State to store generated barcodes
  const [numberOfBarcodes, setNumberOfBarcodes] = useState(1); // State for number of barcodes to generate

  // Function to handle input change for user barcode
  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Update input value state
  };

  // Function to handle input change for number of barcodes
  const handleNumberChange = (event) => {
    setNumberOfBarcodes(event.target.value); // Update number of barcodes state
  };

  // Function to generate barcode from user input
  const generateInputBarcode = () => {
    if (inputValue) {
      setBarcodes([inputValue]); // Update barcodes state with the user input
    }
  };

  // Function to generate random barcodes based on user-defined quantity
  const generateRandomBarcode = () => {
    const num = parseInt(numberOfBarcodes, 10);
    if (isNaN(num) || num <= 0) {
      alert('Please enter a valid number greater than 0');
      return;
    }

    const randomBarcodes = [];
    for (let i = 0; i < num; i++) {
      const randomNumber = Math.floor(Math.random() * 10000000000); // Generate a random 10-digit number
      randomBarcodes.push(randomNumber.toString()); // Convert to string and store
    }
    setBarcodes(randomBarcodes); // Update state with the new random barcodes
  };

  // Function to download all generated barcodes
  const downloadAllBarcodes = () => {
    if (barcodes.length === 0) {
      alert('No barcodes to download');
      return;
    }

    barcodes.forEach((code) => {
      const canvas = document.createElement('canvas');
      const barcode = <Barcode value={code} width={2} height={100} displayValue={false} />;

      // Render the Barcode component to the canvas
      const context = canvas.getContext('2d');
      canvas.width = 300; // Set canvas width
      canvas.height = 150; // Set canvas height

      // Use a temporary container to mount the barcode and draw it on the canvas
      const barcodeContainer = document.createElement('div');
      document.body.appendChild(barcodeContainer); // Append to the body

      // Create a new Barcode component and append it to the container
      ReactDOM.render(barcode, barcodeContainer);

      // Use requestAnimationFrame to ensure the barcode is rendered before drawing it on the canvas
      requestAnimationFrame(() => {
        context.drawImage(barcodeContainer.firstChild, 0, 0); // Draw the barcode on the canvas
        canvas.toBlob((blob) => {
          saveAs(blob, `barcode_${code}.png`); // Save each barcode as PNG
          document.body.removeChild(barcodeContainer); // Clean up the temporary container
        });
      });
    });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Barcode Generator</h2>

      {/* Input for user to enter a barcode value */}
      <input
        type="text"
        placeholder="Enter barcode value"
        value={inputValue}
        onChange={handleInputChange}
        style={{ padding: '10px', width: '300px', fontSize: '16px', marginBottom: '20px' }}
      />
      <button
        onClick={generateInputBarcode}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', marginBottom: '20px' }}
      >
        Generate Barcode from Input
      </button>

      {/* Input for number of random barcodes to generate */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="number"
          placeholder="Number of barcodes"
          value={numberOfBarcodes}
          onChange={handleNumberChange}
          min="1"
          style={{ padding: '10px', width: '300px', fontSize: '16px' }}
        />
        <button
          onClick={generateRandomBarcode}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', marginLeft: '10px' }}
        >
          Generate Random Barcodes
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        {barcodes.length > 0 && (
          <div>
            {barcodes.map((code, index) => (
              <div key={index} style={{ marginBottom: '20px' }}>
                <Barcode value={code} />
                <p>{code}</p> {/* Display the barcode number */}
              </div>
            ))}
            
          </div>
        )}
      </div>

      <div style={{ marginTop: '20px' }}>
        <Link to="/">
          <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BarcodeGenerator;
