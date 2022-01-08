import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar';
import SocialMedias from './components/SocialMedias';

import Home from './components/Home';
import About from './components/About';
import Works from './components/Works/Works';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Works' element={<Works />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </Router>
      <SocialMedias />
      <Footer />
    </>
  );
}

export default App;
