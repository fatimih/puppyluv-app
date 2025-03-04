import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/variables.css';
import './styles/global.css';
import Header from './nav/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Footer from './components/shared/Footer';
import ScrollToTop from './components/shared/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="page-wrapper">
        <Header />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
        <Footer />  {/* Footer is now rendered on every page */}
      </div>
    </>
  );
}

export default App;

