import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CheckoutPage from './pages//CheckoutPage';
import HomePage from './pages/HomePage';

const pages = [
  { path: '/', element: <HomePage /> },
  { path: '/checkout', element: <CheckoutPage /> },
];
function App() {
  return (
    <Router>
      <div>
        <Routes>
          {pages.map( ( page, index ) => (
            <Route key={index} path={page.path} element={page.element} />
          ) )}
        </Routes>
      </div>
    </Router>
  );
}

export default App; 
