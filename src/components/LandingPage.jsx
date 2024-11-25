import React from 'react';
import depanKantek from '../assets/depanKantek.jpg';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-customHue-dark text-white">
      <div className="relative flex items-center justify-center text-center h-screen">
        <img src={depanKantek} className="absolute inset-0 pb-10 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
            <div className="z-10">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
                    Welcome to <span className="text-customHue-lighter font-semibold">KanWeb</span>
                </h1>
                <p className="text-lg md:text-xl font-light mb-8">
                    A collaborative project between Frontend-5 and Backend-1 for Exercise Internship 2024
                </p>
                <a href='' className="px-10 py-4 bg-customHue-darker text-white font-semibold text-lg tracking-wide rounded-full shadow-lg hover:bg-customHue-darkest hover:shadow-xl transition-all">
                    Get Started
                </a>
            </div>
      </div>
    </div>
  );
};

export default LandingPage;