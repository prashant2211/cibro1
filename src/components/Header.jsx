import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { FiMenu, FiX, FiGlobe } from 'react-icons/fi';

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 md:space-x-3 flex-shrink-0">
            <img 
              src="/website%20data/Logo.jpeg" 
              alt="Foundation Logo" 
              className="h-10 w-10 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-full object-cover"
            />
            <div className="hidden lg:block">
              <h1 className="text-base lg:text-lg xl:text-xl font-bold text-primary-700 hindi-text leading-tight">
                जागत जननी महिला विकास फाउंडेशन
              </h1>
              <p className="text-xs lg:text-sm text-gray-600">Pragati Mahila Bikash Kendra</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-3 2xl:space-x-4 flex-wrap justify-end">
            <Link 
              to="/" 
              className={`px-2 py-1.5 text-sm rounded-md transition-colors whitespace-nowrap ${
                isActive('/') ? 'text-primary-600 font-semibold' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              {t.nav.home}
            </Link>
            <Link 
              to="/about" 
              className={`px-2 py-1.5 text-sm rounded-md transition-colors whitespace-nowrap ${
                isActive('/about') ? 'text-primary-600 font-semibold' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              {t.nav.about}
            </Link>
            <Link 
              to="/empowerment" 
              className={`px-2 py-1.5 text-sm rounded-md transition-colors whitespace-nowrap ${
                isActive('/empowerment') ? 'text-primary-600 font-semibold' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              {language === 'hindi' ? 'महिला सशक्तिकरण' : 'Women Empowerment'}
            </Link>
            <div className="relative group">
              <button className={`px-2 py-1.5 text-sm rounded-md transition-colors flex items-center whitespace-nowrap ${
                location.pathname.startsWith('/programs') || 
                location.pathname.startsWith('/health') ||
                location.pathname.startsWith('/safety') ||
                location.pathname.startsWith('/development')
                  ? 'text-primary-600 font-semibold' : 'text-gray-700 hover:text-primary-600'
              }`}>
                {t.nav.programs}
                <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link to="/empowerment" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                  {t.nav.empowerment}
                </Link>
                <Link to="/health" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                  {t.nav.health}
                </Link>
                <Link to="/safety" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                  {t.nav.safety}
                </Link>
                <Link to="/development" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                  {t.nav.development}
                </Link>
              </div>
            </div>
            <Link 
              to="/services" 
              className={`px-2 py-1.5 text-sm rounded-md transition-colors whitespace-nowrap ${
                isActive('/services') || location.pathname.startsWith('/services/') ? 'text-primary-600 font-semibold' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              {t.nav.services}
            </Link>
            <Link 
              to="/contact" 
              className={`px-2 py-1.5 text-sm rounded-md transition-colors whitespace-nowrap ${
                isActive('/contact') ? 'text-primary-600 font-semibold' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              {t.nav.contact}
            </Link>
            <Link 
              to="/form" 
              className="px-3 py-1.5 text-sm bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors whitespace-nowrap"
            >
              {t.nav.form}
            </Link>
            <button
              onClick={toggleLanguage}
              className="p-1.5 text-gray-700 hover:text-primary-600 transition-colors flex-shrink-0"
              aria-label="Toggle Language"
            >
              <FiGlobe className="h-4 w-4" />
            </button>
          </div>

          {/* Medium Screen Navigation (lg to xl) */}
          <div className="hidden lg:flex xl:hidden items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className="p-1.5 text-gray-700 hover:text-primary-600 transition-colors"
              aria-label="Toggle Language"
            >
              <FiGlobe className="h-4 w-4" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </button>
          </div>

          {/* Tablet/Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className="p-2 text-gray-700"
              aria-label="Toggle Language"
            >
              <FiGlobe className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Navigation */}
        {isMenuOpen && (
          <div className="xl:hidden mt-4 pb-4 border-t border-gray-200 max-h-[calc(100vh-120px)] overflow-y-auto">
            <div className="flex flex-col space-y-2 pt-4">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 rounded-md ${
                  isActive('/') ? 'bg-primary-50 text-primary-600 font-semibold' : 'text-gray-700'
                }`}
              >
                {t.nav.home}
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 rounded-md ${
                  isActive('/about') ? 'bg-primary-50 text-primary-600 font-semibold' : 'text-gray-700'
                }`}
              >
                {t.nav.about}
              </Link>
              <Link 
                to="/empowerment" 
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 rounded-md ${
                  isActive('/empowerment') ? 'bg-primary-50 text-primary-600 font-semibold' : 'text-gray-700'
                }`}
              >
                {language === 'hindi' ? 'महिला सशक्तिकरण' : 'Women Empowerment'}
              </Link>
              <Link 
                to="/services" 
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 rounded-md ${
                  isActive('/services') ? 'bg-primary-50 text-primary-600 font-semibold' : 'text-gray-700'
                }`}
              >
                {t.nav.services}
              </Link>
              <Link 
                to="/health" 
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 rounded-md ${
                  isActive('/health') ? 'bg-primary-50 text-primary-600 font-semibold' : 'text-gray-700'
                }`}
              >
                {t.nav.health}
              </Link>
              <Link 
                to="/safety" 
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 rounded-md ${
                  isActive('/safety') ? 'bg-primary-50 text-primary-600 font-semibold' : 'text-gray-700'
                }`}
              >
                {t.nav.safety}
              </Link>
              <Link 
                to="/development" 
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 rounded-md ${
                  isActive('/development') ? 'bg-primary-50 text-primary-600 font-semibold' : 'text-gray-700'
                }`}
              >
                {t.nav.development}
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 rounded-md ${
                  isActive('/contact') ? 'bg-primary-50 text-primary-600 font-semibold' : 'text-gray-700'
                }`}
              >
                {t.nav.contact}
              </Link>
              <Link 
                to="/form" 
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 bg-primary-600 text-white rounded-md text-center"
              >
                {t.nav.form}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

