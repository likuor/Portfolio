import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import About from './About';
import Home from './Home';
import Contact from './Contact';

export const Header = () => {
  return (
    <header>
      <div className='whole-wrapper'>
        <div>Koki Sakai</div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path='/' element={Home} />
            <Route path='/' element={About} />
            <Route path='/' element={Contact} />
          </Routes>
        </Router>
      </div>
    </header>
  );
};
