import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import LandingPage from './pages/LandingPage';
import { Reservation } from './pages/Reservation';
import { Command } from './pages/Command';
function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/Menu" element={<h1>Menu</h1>} />
          <Route path="/Reservation" element={<Reservation/>} />
          <Route path="/Contact" element={<h1>Contact</h1>} />
          <Route path="/Commande" element={<Command/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
