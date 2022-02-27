import './App.css';
import Footer from './Pages/Footer/Footer';
import Navbar from './components/NavBar/Navbar';
import SocialMedias from './components/SocialMedias/SocialMedias';

import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Works from './Pages/Works/Works';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Home id='/' />
      <About id='about' />
      <Works id='works' />
      <Contact id='contact' />
      <SocialMedias />
      <Footer />
    </div>
  );
}

export default App;
