import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from './components/Navbar';
import LandingPage from './pages/LandingPage';
function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/Menu" element={<h1>Menu</h1>} />
          <Route path="/Reservation" element={<h1>Réservation</h1>} />
          <Route path="/Contact" element={<h1>Contact</h1>} />
          <Route path="/Commande" element={<h1>Commande</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
