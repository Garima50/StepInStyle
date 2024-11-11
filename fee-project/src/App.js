import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import ProductPage from './ProductPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
