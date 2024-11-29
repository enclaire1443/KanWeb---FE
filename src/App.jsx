import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import PageMenu from './components/PageMenu';
import OrderPage from './components/OrderPage';
import RecommendPage from './components/RecommendPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/PageMenu" element={<PageMenu />} />
        <Route path="/OrderPage" element={<OrderPage />} />
        <Route path="/RecommendPage" element={<RecommendPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;