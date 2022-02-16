import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Footer/Footer';
import Navbar from './components/NavBar/Navbar';
import SocialMedias from './components/SocialMedias/SocialMedias';

import Home from './Pages/Home/Home';
import About from './components/Pages/About/About';
import Works from './components/Pages/Works/Works';
import Contact from './Pages/Contact/Contact';
import NoMatch from './components/Pages/NoMatch/NoMatch';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' index element={<Home id='home' />} />
        <Route path='/About' element={<About />} />
        <Route path='/Works' element={<Works />} />
        <Route path='/Contact' element={<Contact id='contact' />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
      <SocialMedias />
      <Footer />
    </div>
  );
}

export default App;
