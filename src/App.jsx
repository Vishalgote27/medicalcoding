import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import required components
import Home from './Pages/Home';
import Navbar from '../src/Pages/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Pages/Footer';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Career from './Pages/Career';
import Services from './Pages/Services';

const App = () => {
  return <>    <Router>
      <Navbar />
      {/* Define routes for each page */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/About" element={<About />} /> {/* Contact route */}
        <Route path="/contact" element={<Contact />} /> {/* Contact route */}
        <Route path="/career" element={<Career />} /> Contact route
        <Route path="/services" element={<Services />} /> {/* Contact route */}
      </Routes>
      <Footer />
    </Router>
    </>

};

export default App;
