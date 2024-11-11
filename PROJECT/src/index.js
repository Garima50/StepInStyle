import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' in React 18
import App from './App';

// Create a root element to render the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Use the root to render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
