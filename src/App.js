import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ReactGa from 'react-ga';
import Footer from './components/Pages/Footer/Footer';
import Navbar from './components/NavBar/Navbar';
import SocialMedias from './components/SocialMedias/SocialMedias';

import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Works from './components/Pages/Works/Works';
import Contact from './components/Pages/Contact/Contact';
import NoMatch from './components/Pages/NoMatch/NoMatch';

function App() {
  useEffect(() => {
    ReactGa.initialize('G-HFVGSVN8HZ');

    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Works' element={<Works />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
      <SocialMedias />
      <Footer />
    </div>
  );
}

export default App;
