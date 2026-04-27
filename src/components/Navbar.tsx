import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Wellness Quiz', path: '/assessment' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      id="main-nav"
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-8',
        scrolled ? 'bg-neutral/90 backdrop-blur-md border-b border-border py-4' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2 group">
          <span className="text-2xl font-semibold tracking-tight text-primary transition-colors">Bogata Health Clinic</span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-widest opacity-60 font-medium text-muted">Wellness First</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'transition-all duration-300 hover:text-primary pb-1 border-b-2',
                  link.path === '/services' && location.pathname.startsWith('/services')
                    ? 'text-primary border-primary'
                    : location.pathname === link.path
                    ? 'text-primary border-primary'
                    : 'text-body border-transparent'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <a
            href="tel:903-632-0078"
            className="bg-primary text-white px-6 py-3 rounded-full text-sm font-medium shadow-sm hover:bg-primary-dark transition-all hover:scale-105 active:scale-95"
          >
            903-632-0078
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl md:hidden py-6 px-8 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-lg font-medium py-2 border-b border-slate-50',
                  location.pathname === link.path ? 'text-primary' : 'text-slate-600'
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:903-632-0078"
              className="mt-4 flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-medium"
            >
              <Phone size={18} />
              Call Now: 903-632-0078
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
