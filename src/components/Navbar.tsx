import React, { useState, useEffect } from 'react';
import { Container } from './ui/Container';
import { Leaf } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 backdrop-blur-sm transition-colors duration-300 ${
        isScrolled ? 'bg-[#4A5D23]/90' : 'bg-transparent'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2 text-white">
            <Leaf size={32} />
            <span className="text-xl font-bold">Terra Verde Paysages</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-white hover:text-white/80 transition-colors">
              Nos services
            </a>
            <a href="#about" className="text-white hover:text-white/80 transition-colors">
              À propos
            </a>
            <a href="#contact" className="text-white hover:text-white/80 transition-colors">
              Contact
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <a
            href="#services"
            className="block text-white py-2"
            onClick={() => setIsOpen(false)}
          >
            Nos services
          </a>
          <a
            href="#about"
            className="block text-white py-2"
            onClick={() => setIsOpen(false)}
          >
            À propos
          </a>
          <a
            href="#contact"
            className="block text-white py-2"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      </Container>
    </header>
  );
};