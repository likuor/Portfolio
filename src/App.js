import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar/NavBar';
import SocialMedias from './components/SocialMedias';

import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <>
      <Header />
      <Router>
        <NavBar />
        <SocialMedias />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
