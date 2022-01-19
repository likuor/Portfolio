import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar';
import SocialMedias from './components/SocialMedias/SocialMedias';

import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Works from './components/Pages/Works/Works';
import Contact from './components/Pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <About />
      <Works />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Works' element={<Works />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <SocialMedias />
      <Footer />
    </Router>
  );
}

export default App;
