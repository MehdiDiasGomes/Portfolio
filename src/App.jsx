import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbarr';
import Accueil from './components/Accueil/Accueil';

import Portfolio from './components/Projets/Portfolio/Portfolio';
import Devinette from './components/Projets/Devinette/Devinette';
import Todolist from './components/Projets/Todolist/Todolist';

import Parcours from './components/Parcours/Parcours';
import Contact from './components/Contact/Contact';
import About from './components/About/About'

import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">

      <div className="Navbar">
        <Navbar />
      </div>

      <div className="Routes">
        <Routes>
          <Route path="/" element={<Accueil />} />

          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/devinette" element={<Devinette />} />
          <Route path="/todolist" element={<Todolist />} />

          <Route path="/parcours" element={<Parcours />} />
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

