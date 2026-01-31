import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { services } from '../data/services';
import { FiHeart, FiShield, FiTrendingUp, FiUsers, FiArrowRight } from 'react-icons/fi';

const Programs = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const programs = [
    {
      id: 'health',
      icon: FiHeart,
      title: t.programs.health.title,
      description: t.programs.health.description,
      link: '/health',
      color: 'primary'
    },
    {
      id: 'safety',
      icon: FiShield,
      title: t.programs.safety.title,
      description: t.programs.safety.description,
      link: '/safety',
      color: 'red'
    },
    {
      id: 'development',
      icon: FiTrendingUp,
      title: t.programs.development.title,
      description: t.programs.development.description,
      link: '/development',
      color: 'blue'
    },
    {
      id: 'empowerment',
      icon: FiUsers,
      title: t.programs.empowerment.title,
      description: t.programs.empowerment.description,
      link: '/empowerment',
      color: 'green'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Image Section */}
      <section className="relative py-0 bg-white">
        <div className="relative h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden">
          <img
            src="/website%20data/foundation4.png"
            alt="Programs"
            className="w-full h-full object-cover object-center"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>
      </section>

      {/* Government Support Note */}
      <section className="py-6 bg-white border-b-2 border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-sm md:text-base text-gray-700">
              <span className="text-xl md:text-2xl">🇮🇳</span>
              <span className="hindi-text">
                {language === 'hindi' 
                  ? 'भारत सरकार की महिला सशक्तिकरण योजनाओं के साथ'
                  : 'In partnership with Government of India\'s Women Empowerment Schemes'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Help Group Services Section - HIGHLIGHTED */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/website%20data/foundation7.png" 
            alt="Services Background" 
            className="w-full h-full object-cover"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-4">
                <span className="text-sm md:text-base font-semibold">
                  {language === 'hindi' ? '✨ मुख्य सेवाएं' : '✨ Core Services'}
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white hindi-text">
                {language === 'hindi' ? 'स्वयं सहायता समूह सेवाएं' : 'Self-Help Group Services'}
              </h2>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-2">
                {language === 'hindi' 
                  ? 'जागत जननी महिला विकास फाउंडेशन - प्रगति महिला विकास केंद्र'
                  : 'Jaagat Janni Mahila Vikash Foundation - Pragati Mahila Vikash Kendra'}
              </p>
              <p className="text-base text-white/80 max-w-2xl mx-auto">
                {language === 'hindi' 
                  ? 'हमारी 10 प्रमुख सेवाएं जो महिलाओं को आर्थिक रूप से सशक्त बनाती हैं'
                  : 'Our 10 key services that economically empower women'}
              </p>
            </div>

            {/* First 6 Services - Larger Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {services.slice(0, 6).map((service, index) => (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="group bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all transform hover:-translate-y-3 border-2 border-white/20 hover:border-white/40"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title[language]}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute top-3 left-3">
                      <div className="bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="text-3xl mb-2">{service.icon}</div>
                      <h3 className="text-lg md:text-xl font-bold text-white hindi-text line-clamp-2">
                        {service.title[language]}
                      </h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {service.description[language]}
                    </p>
                    {service.benefits && (
                      <ul className="text-xs text-gray-500 mb-3 space-y-1">
                        {service.benefits[language].slice(0, 2).map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary-600 mr-2">✓</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="flex items-center text-primary-600 font-semibold text-sm group-hover:text-primary-700">
                      {language === 'hindi' ? 'विवरण देखें' : 'View Details'}
                      <FiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Last 4 Services - Smaller Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {services.slice(6, 10).map((service, index) => (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="group bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all transform hover:-translate-y-3 border-2 border-white/20 hover:border-white/40"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title[language]}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute top-3 left-3">
                      <div className="bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">
                        {String(index + 7).padStart(2, '0')}
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="text-2xl mb-1">{service.icon}</div>
                      <h3 className="text-base md:text-lg font-bold text-white hindi-text line-clamp-2">
                        {service.title[language]}
                      </h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-xs mb-2 line-clamp-2">
                      {service.description[language]}
                    </p>
                    {service.benefits && (
                      <ul className="text-xs text-gray-500 mb-2 space-y-0.5">
                        {service.benefits[language].slice(0, 1).map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary-600 mr-1 text-[10px]">✓</span>
                            <span className="line-clamp-1">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="flex items-center text-primary-600 font-semibold text-xs group-hover:text-primary-700">
                      {language === 'hindi' ? 'विवरण' : 'Details'}
                      <FiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                to="/services"
                className="inline-block px-10 py-4 bg-white text-primary-600 rounded-lg font-bold hover:bg-white/90 transition-colors text-lg shadow-xl"
              >
                {language === 'hindi' ? 'सभी सेवाएं देखें' : 'View All Services'}
                <FiArrowRight className="inline-block ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid - Lower Priority */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-gray-700">
                {t.programs.title}
              </h2>
              <p className="text-base text-gray-500 max-w-2xl mx-auto">
                {t.programs.description}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {programs.map((program, index) => {
                const Icon = program.icon;
                const imageNum = index === 0 ? '5' : index === 1 ? '6' : index === 2 ? '7' : '8';
                return (
                  <Link
                    key={program.id}
                    to={program.link}
                    className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all transform hover:-translate-y-1 border border-gray-200"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={`/website%20data/foundation${imageNum}.png`}
                        alt={program.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className={`bg-${program.color}-500 w-12 h-12 rounded-full flex items-center justify-center mb-3`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-1">
                          {program.title}
                        </h2>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 text-base leading-relaxed mb-4">
                        {program.description}
                      </p>
                      <div className="flex items-center text-primary-600 font-medium text-sm group-hover:text-primary-700">
                        {language === 'hindi' ? 'और जानें' : 'Learn More'}
                        <FiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;

