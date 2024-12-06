import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './AppRouter';  // Import AppRouter
import Navbar from './components/Navbar';  // Thanh điều hướng (nếu có)
import Footer from './components/Footer';  // Chân trang (nếu có)

const App = () => {
  return (
    <Router>
      <AppRouter /> {/* Dùng AppRouter để điều hướng */}
    </Router>
  );
}

export default App;
