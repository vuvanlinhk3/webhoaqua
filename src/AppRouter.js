import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';  // Thêm ./ vào đầu
import LoginPage from './pages/LoginPage';  // Thêm ./ vào đầu
import RegisterPage from './pages/RegisterPage';  // Thêm ./ vào đầu

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default AppRouter;
