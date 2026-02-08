import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { services } from '../data/services';
import { FiArrowRight } from 'react-icons/fi';
import SEO from '../components/SEO';

const Services = () => {
  const { language } = useLanguage();

  return (
    <>
      <SEO 
        title="Services"
        description="Jaagat Janni Mahila Vikash Foundation - Self-Help Group Services, Loans, Training Programs"
        keywords="self-help group, SHG, loan schemes, women empowerment, savings scheme, training programs, Jaagat Janni Mahila Vikash Foundation, Jaagat Janni Mahila Vikas Foundation, Jaagat Janni Mahila Bikas Foundation, Mahila Bikas Foundation, mahila Bikas foundation, mahila bikas foundation"
      />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-0 bg-white">
          <div className="relative h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden">
            <img
              src="/website%20data/foundation.png"
              alt="Services"
              className="w-full h-full object-cover object-center"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white hindi-text">
                    {language === 'hindi' ? 'स्वयं सहायता समूह सेवाएं' : 'Self-Help Group Services'}
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90">
                    {language === 'hindi' 
                      ? 'जागत जननी महिला विकास फाउंडेशन - प्रगति महिला विकास केंद्र'
                      : 'Jaagat Janni Mahila Vikash Foundation - Pragati Mahila Vikash Kendra'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 hindi-text">
                  {language === 'hindi' ? 'हमारी सेवाएं' : 'Our Services'}
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  {language === 'hindi' 
                    ? 'हम महिलाओं को आर्थिक रूप से सशक्त बनाने के लिए विभिन्न सेवाएं प्रदान करते हैं'
                    : 'We provide various services to economically empower women'}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.id}`}
                    className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title[language]}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center text-3xl">
                          {service.icon}
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="text-white text-sm font-semibold mb-1">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white hindi-text">
                          {service.title[language]}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description[language]}
                      </p>
                      {service.benefits && (
                        <ul className="text-sm text-gray-500 mb-4 space-y-2">
                          {service.benefits[language].slice(0, 3).map((benefit, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-primary-600 mr-2 mt-0.5">✓</span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700">
                        {language === 'hindi' ? 'विवरण देखें' : 'View Details'}
                        <FiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'hindi' 
                ? 'हमारी सेवाओं का लाभ उठाएं'
                : 'Avail Our Services'}
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              {language === 'hindi' 
                ? 'एक नया समूह बनाएं और हमारी सभी सेवाओं का लाभ उठाएं'
                : 'Create a new group and avail all our services'}
            </p>
            <Link
              to="/form"
              className="inline-block px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {language === 'hindi' ? 'समूह पंजीकरण करें' : 'Register Group'}
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;

