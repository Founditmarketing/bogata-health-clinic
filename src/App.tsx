import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import BioTE from './pages/services/BioTE';
import Prenatal from './pages/services/Prenatal';
import WellWoman from './pages/services/WellWoman';
import Thyroid from './pages/services/Thyroid';
import FamilyPlanning from './pages/services/FamilyPlanning';
import Assessment from './pages/Assessment';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-[#fdfdfc]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/biote" element={<BioTE />} />
            <Route path="/services/prenatal" element={<Prenatal />} />
            <Route path="/services/well-woman" element={<WellWoman />} />
            <Route path="/services/thyroid" element={<Thyroid />} />
            <Route path="/services/family-planning" element={<FamilyPlanning />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
