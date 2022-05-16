import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import ProductPage from './components/pages/ProductPage';
import HomePage from './components/pages/HomePage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<ProductPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;