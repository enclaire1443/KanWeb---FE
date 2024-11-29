import React from 'react'
import makanan2 from '../assets/makanan2.jpg';
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const navigate = useNavigate();

    const handleResgiterHere = () => {
        navigate('/RegisterPage');
    }

    const handleLogin = () => {
        navigate('/LandingPage');
    }

  return (
    <div className="flex min-h-screen">
      {/* Bagian Kiri */}
      <div className="w-3/5 h-screen bg-[#0C0726]">
      {/* Bagian Kiri: 3 Kotak */}
      <div className="flex flex-col space-y-4 absolute top-[6cm] left-[1.5cm]">
        <div className="w-[13.4cm] h-[1.9cm] rounded-xl shadow-xl">
        <input id="email" type="text" placeholder="Email / Username ..." className="w-[13.4cm] p-6 rounded-xl bg-[#e8ebf0]"/>
        </div>
        <div className="w-[13.4cm] h-[1.9cm] rounded-xl shadow-xl">
        <input id="username" type="text" placeholder="Password..." className="w-[13.4cm] p-6 rounded-xl bg-[#e8ebf0]"/>
        </div> 
    <button id="RegisterHereButton" onClick={handleResgiterHere} className="text-[#e8ebf0] font-bold italic text-lg absolute top-[4.3cm] left-[0.3cm]">Register Here!</button>
      </div>
      <div className="bg-[#e8ebf0] w-[5.5cm] h-[1.9cm] rounded-xl shadow-xl absolute top-[13cm] left-[9.4cm]">
        <button id="LoginButton" onClick={handleLogin} className="w-[5.5cm] p-5 rounded-xl font-bold text-[#1A1A4A] text-lg italic">Login</button>
      </div>
      </div>

      {/* Bagian Kanan */}
      <div className="w-4/5 h-screen bg-[#1A1A4A]">
        <img src={makanan2} alt="makanan2" className="w-[16cm] h-[20cm] rounded-xl absolute top-[0.8cm] right-[2.7cm]"></img>
      </div>
    </div>
  )
}

export default LoginPage