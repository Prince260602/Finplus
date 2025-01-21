import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './components/pages/home/Home'
import Contact from './components/pages/contact/ContactForm'
import About from './components/pages/about/About'
import Footer from "./components/footer/Footer"
import Navbar from './components/navbar/Navbar'
import CustomNavbar from './components/navbar/Navbar'
function App() {
  return (

    <BrowserRouter>
    <CustomNavbar/>
    <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
     
    </Routes>
    <Footer/>
    </BrowserRouter>
 
 
                
  )
}

export default App
