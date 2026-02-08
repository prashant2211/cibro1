import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-gray-900 text-white mt-auto relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="/website%20data/foundation.png" 
          alt="Footer Background" 
          className="w-full h-full object-cover"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </div>
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 hindi-text">
              {language === 'hindi' ? 'जागत जननी महिला विकास फाउंडेशन' : 'Jaagat Janni Mahila Vikash Foundation'}
            </h3>
            <p className="text-gray-400 mb-4 text-sm">
              {language === 'hindi' 
                ? 'महिलाओं के स्वास्थ्य, सुरक्षा, विकास और सशक्तिकरण के लिए समर्पित'
                : 'Dedicated to women\'s health, safety, development and empowerment'}
            </p>
            <p className="text-sm text-gray-500">Pragati Mahila Vikash Kendra</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{language === 'hindi' ? 'त्वरित लिंक' : 'Quick Links'}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-400 hover:text-white transition-colors">
                  {t.nav.programs}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  {t.nav.gallery}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.nav.programs}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/health" className="text-gray-400 hover:text-white transition-colors">
                  {t.nav.health}
                </Link>
              </li>
              <li>
                <Link to="/safety" className="text-gray-400 hover:text-white transition-colors">
                  {t.nav.safety}
                </Link>
              </li>
              <li>
                <Link to="/development" className="text-gray-400 hover:text-white transition-colors">
                  {t.nav.development}
                </Link>
              </li>
              <li>
                <Link to="/empowerment" className="text-gray-400 hover:text-white transition-colors">
                  {t.nav.empowerment}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.contact.title}</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FiMapPin className="h-5 w-5 mt-1 text-primary-400 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <p className="font-medium text-white mb-1">
                    {language === 'hindi' ? 'पटना कार्यालय' : 'Patna Office'}
                  </p>
                  <p className="mb-3">
                    Ghurdaur Road, Digha Ashiana,<br />
                    Near SSB Camp, Patna-800011
                  </p>
                  <p className="font-medium text-white mb-1">
                    {language === 'hindi' ? 'मुजफ्फरपुर कार्यालय' : 'Muzaffarpur Office'}
                  </p>
                  <p>
                    Maa Complex, Behind SBI,<br />
                    Bhagwanpur Chowk, Sri Rampuri,<br />
                    Muzaffarpur
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="h-5 w-5 text-primary-400" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition-colors">
                  +91 9525868575
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="h-5 w-5 text-primary-400" />
                <a href="mailto:info@jjmvikashfoundation.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                  info@jjmvikashfoundation.com
                </a>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FiFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FiTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FiInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Government Partnership Note */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-2xl">🇮🇳</span>
              <span className="text-sm font-medium">
                {language === 'hindi' 
                  ? 'सरकारी योजनाओं के साथ सहयोग'
                  : 'Working with Government Schemes'}
              </span>
            </div>
            <div className="hidden md:block w-px h-6 bg-gray-700"></div>
            <div className="text-xs text-gray-500 italic text-center md:text-left">
              {language === 'hindi' 
                ? 'स्वतंत्र NGO, भारत सरकार की योजनाओं के साथ सहयोग'
                : 'Independent NGO partnering with Government of India initiatives'}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} {language === 'hindi' 
              ? 'जागत जननी महिला विकास फाउंडेशन। सभी अधिकार सुरक्षित।'
              : 'Jaagat Janni Mahila Vikash Foundation. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

