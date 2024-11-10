import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home'; // Import the Home component
import ProductPage from './components/ProductPage'; // Add a placeholder for product pages

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prod14" element={<ProductPage productId={14} />} />
        <Route path="/prod13" element={<ProductPage productId={13} />} />
        <Route path="/prod27" element={<ProductPage productId={27} />} />
        {/* Add more routes for other products as needed */}
      </Routes>
    </Router>
  );
}

export default App;
