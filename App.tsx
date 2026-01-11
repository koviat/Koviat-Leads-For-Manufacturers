
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronRight, Factory, ShieldCheck, Target, Zap, Clock, MessageSquare, Briefcase, PlayCircle, Bot, Calendar, MessageCircle } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import ChatWidget from './components/ChatWidget';

// Global Booking Modal Component
const BookingModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // USER UPDATED: Specific Meetn event link for bookings (Updated to ID=468d751414)
  const calendarUrl = "https://meetn.com/Event?ID=468d751414";

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="absolute inset-0 bg-blue-950/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-4xl h-[90vh] bg-white rounded-sm shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between p-4 bg-blue-950 text-white border-b-4 border-amber-500">
          <div className="flex items-center space-x-3">
            <Calendar className="h-5 w-5 text-amber-500" />
            <h3 className="font-bold uppercase tracking-widest text-sm">Schedule Strategy Call</h3>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-blue-900 rounded-full transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex-grow bg-zinc-50 relative">
          <iframe 
            src={calendarUrl}
            style={{ border: 0 }} 
            width="100%" 
            height="100%" 
            frameBorder="0"
            title="Koviat Leads Booking"
            allow="camera; microphone; autoplay; encrypted-media;"
          ></iframe>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center pointer-events-none opacity-0 hover:opacity-100 bg-white/90 transition-opacity">
            <h4 className="text-xl font-bold text-blue-950 mb-4">Having trouble viewing the booking page?</h4>
            <a 
              href={calendarUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="pointer-events-auto bg-blue-900 text-white px-8 py-3 rounded-sm font-bold shadow-lg"
            >
              Open Link in New Tab
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services Provided', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;
  
  const openBooking = () => {
    window.dispatchEvent(new CustomEvent('openBooking'));
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center">
                <div className="h-12 w-auto flex items-center">
                  <div className="relative h-10 w-10 bg-blue-950 rounded-sm flex items-center justify-center border border-amber-500 mr-2 shadow-inner">
                    <span className="text-amber-500 font-extrabold text-xl">K</span>
                    <div className="absolute -top-1 -right-1">
                       <div className="w-3 h-3 border-r-2 border-t-2 border-amber-400"></div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-black tracking-tight text-blue-950 leading-none">KOVIAT LEADS</span>
                    <span className="text-[9px] font-bold text-blue-600 uppercase tracking-widest mt-0.5">For Manufacturers</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href) ? 'text-blue-900 underline decoration-amber-400 decoration-2 underline-offset-4' : 'text-zinc-500 hover:text-blue-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={openBooking}
              className="bg-blue-900 text-white px-5 py-2.5 rounded-sm text-sm font-semibold hover:bg-blue-800 transition-all shadow-sm border-b-2 border-amber-500"
            >
              Book Call
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-500 hover:text-blue-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-zinc-100 py-4 px-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive(item.href) ? 'bg-blue-50 text-blue-900 border-l-4 border-amber-500' : 'text-zinc-500'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => { setIsOpen(false); openBooking(); }}
            className="block w-full text-center bg-blue-900 text-white px-3 py-3 rounded-sm text-base font-semibold mt-4"
          >
            Book a Strategy Call
          </button>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  const openBooking = () => window.dispatchEvent(new CustomEvent('openBooking'));
  const openChat = () => window.dispatchEvent(new CustomEvent('openChat'));
  const whatsappUrl = "https://wa.me/233244446682?text=I%20would%20like%20to%20work%20with%20Koviat%20Leads%20for%20Manufacturers";

  return (
    <footer className="bg-blue-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-blue-900 pb-12 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative h-8 w-8 bg-blue-900 rounded-sm flex items-center justify-center border border-amber-500 shadow-inner">
                <span className="text-amber-500 font-extrabold text-sm">K</span>
              </div>
              <div className="flex flex-col">
                <span className="text-md font-black tracking-tight text-white leading-none">KOVIAT LEADS</span>
                <span className="text-[7px] font-bold text-amber-500 uppercase tracking-[0.2em] mt-0.5">For Manufacturers</span>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              Helping American manufacturing businesses get more qualified clients in their local service area without the guesswork.
            </p>
            <div className="space-y-3">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-sm text-blue-100 hover:text-amber-400 transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-amber-500" />
                <span>Chat on WhatsApp</span>
              </a>
              <div className="flex items-center space-x-3 text-sm text-blue-100">
                <Mail className="h-4 w-4 text-amber-500" />
                <span>contact@koviatleads.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-amber-500 mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm text-blue-200">
              <li><Link to="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-amber-400 transition-colors">Services Provided</Link></li>
              <li><Link to="/blog" className="hover:text-amber-400 transition-colors">Industry Blog</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-amber-500 mb-6">Interactive Demos</h4>
            <ul className="space-y-4 text-sm text-blue-200">
              <li>
                <button 
                  onClick={openChat}
                  className="flex items-center space-x-2 hover:text-amber-400 transition-colors text-left"
                >
                  <Bot className="h-4 w-4 text-amber-500" />
                  <span>Interactive Chatbot Link</span>
                </button>
              </li>
              <li>
                <a 
                  href="https://ai.studio/apps/drive/14B57vqHSlpa0tkNT0jEpJ8xwgiJ_YW3k?fullscreenApplet=true" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-2 hover:text-amber-400 transition-colors"
                >
                  <PlayCircle className="h-4 w-4 text-amber-500" />
                  <span>Voice Agent Link</span>
                </a>
              </li>
              <li className="pt-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Core Services</h4>
                <ul className="space-y-2">
                  <li><Link to="/services" className="hover:text-amber-400 transition-colors">Search Lead Gen</Link></li>
                  <li><Link to="/services" className="hover:text-amber-400 transition-colors">Qualification Funnels</Link></li>
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-amber-500 mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-blue-200">
              <li><Link to="/privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-amber-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="hover:text-amber-400 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-blue-400">
          <p>© {new Date().getFullYear()} Koviat Leads For Manufacturers. All rights reserved.</p>
          <p className="mt-2 md:mt-0 italic">Built for the Shop Floor. Focused on the Bottom Line.</p>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const handleOpenBooking = () => setIsBookingOpen(true);
    window.addEventListener('openBooking', handleOpenBooking);
    return () => window.removeEventListener('openBooking', handleOpenBooking);
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/cookies" element={<CookiePolicy />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
        <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      </div>
    </Router>
  );
};

export default App;
