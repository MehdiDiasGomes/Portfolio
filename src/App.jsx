import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbarr';
import Accueil from './components/Pages/Accueil';

import Portfolio from './components/Pages/Projets/Portfolio';
import Devinette from './components/Pages/Projets/Devinette';
import Todolist from './components/Pages/Projets/Todolist';

import CV from './components/Pages/MonCV';
import Contact from './components/Pages/Contact';
import About from './components/Pages/About'

import Footer from './components/Layout/Footer';

import ScrollToTop from './components/Scripts/ScrollToTop';

function App() {
  return (
    <div className="app">

      <ScrollToTop />

      <div className="Navbar">
        <Navbar />
      </div>

      <div className="Routes">
        <Routes>
          <Route path="/" element={<Accueil />} />

          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/devinette" element={<Devinette />} />
          <Route path="/todolist" element={<Todolist />} />

          <Route path="/cv" element={<CV />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>


      <div className="Footer">
        <Footer />
      </div>

    </div>
  );
}

export default App;

