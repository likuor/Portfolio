import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/NavBar/Navbar';
import SocialMedias from './components/SocialMedias/SocialMedias';

import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Works from './components/Pages/Works/Works';
import Contact from './components/Pages/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Works' element={<Works />} />
        <Route path='/Contact' element={<Contact />} />g{' '}
      </Routes>
      <SocialMedias />
      <Footer />
    </div>
  );
}

export default App;
