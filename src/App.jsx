import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import LandingPage from './components/LandingPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/LandingPage" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;