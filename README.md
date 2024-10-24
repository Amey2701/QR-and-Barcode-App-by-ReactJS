# QR and Barcode Generator Web App

This web application allows users to generate QR codes and barcodes based on custom input or randomly generated values. Users can also download the generated codes as PNG images. The app is deployed at [anjqrbarproj.web.app](https://anjqrbarproj.web.app).

## Features

- **QR Code Generator**: Users can enter a URL and generate a QR code. The QR code can be downloaded as a PNG image.
- **Barcode Generator**: Users can either enter a specific value or generate random barcodes. Multiple barcodes can be generated and downloaded.
- **Responsive Design**: The application is designed to be user-friendly, with a simple interface and easy navigation.

## Deployed Application

You can access the live version of the application at [anjqrbarproj.web.app](https://anjqrbarproj.web.app).

## Technology Stack

- **Frontend**: React (with React Router for page navigation)
- **Barcode generation**: `react-barcode` library
- **QR Code generation**: Uses the external API `https://api.qrserver.com/v1/create-qr-code/`
- **File download**: `file-saver` library
- **Routing**: React Router DOM for navigation between different pages
- **Hosting**: Firebase Hosting

## Project Structure

```
├── public/
├── src/
│   ├── App.js             # Main application component
│   ├── HomePage.js        # Home page with links to QR and Barcode generators
│   ├── QR.js              # QR Code generator page
│   ├── Barcode.js         # Barcode generator page
│   └── App.css            # Styling for the application
├── package.json
└── README.md
```

## Installation and Setup Instructions

1. **Clone the repository**:
   ```
   git clone https://github.com/your-username/qr-barcode-generator.git
   ```

2. **Navigate to the project directory**:
   ```
   cd qr-barcode-generator
   ```

3. **Install dependencies**:
   ```
   npm install
   ```

4. **Start the development server**:
   ```
   npm start
   ```

5. **Build for production**:
   ```
   npm run build
   ```

6. **Deploy**:
   This project is deployed on Firebase Hosting. If you'd like to deploy it yourself, follow these steps:
   
   - Install Firebase CLI:
     ```
     npm install -g firebase-tools
     ```
   - Login to Firebase:
     ```
     firebase login
     ```
   - Initialize Firebase project:
     ```
     firebase init
     ```
   - Deploy:
     ```
     firebase deploy
     ```

## Usage

1. **QR Code Generation**:
   - Go to the QR Code generator page.
   - Enter a URL in the input field.
   - Click **Generate QR Code** to create the code.
   - Optionally, download the QR code by clicking **Download QR Code**.

2. **Barcode Generation**:
   - Go to the Barcode generator page.
   - You can either enter a specific value to generate a barcode or enter the number of random barcodes you want to generate.
   - Click **Generate Barcode** to see the result.
   - Download the barcodes by clicking **Download Barcodes**.

## Dependencies

- **React**: A JavaScript library for building user interfaces.
- **react-router-dom**: For client-side routing.
- **react-barcode**: For generating barcodes.
- **file-saver**: For saving files locally.
- **qrserver.com API**: External API used for QR code generation.

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute the code.
