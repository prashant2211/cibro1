import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { services } from '../data/services';
import { FiUsers, FiDollarSign, FiAward, FiTarget, FiArrowRight } from 'react-icons/fi';

const Empowerment = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="pt-20">
      {/* Hero Image Section */}
      <section className="relative py-0 bg-white">
        <div className="relative h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden">
          <img
            src="/website%20data/sahayat%20samooh.png"
            alt="Empowerment Programs"
            className="w-full h-full object-cover object-center"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>
      </section>

      {/* Services Table Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 hindi-text">
                {language === 'hindi' ? 'स्वयं सहायता समूह सेवाएं' : 'Self-Help Group Services'}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {language === 'hindi' 
                  ? 'हमारी सभी सेवाओं की सूची और विवरण'
                  : 'List and details of all our services'}
              </p>
            </div>

            {/* Services Table - Desktop */}
            <div className="hidden md:block bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 mb-16">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px]">
                  <thead className="bg-primary-600 text-white">
                    <tr>
                      <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-bold">
                        {language === 'hindi' ? 'क्रम' : 'S.No.'}
                      </th>
                      <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-bold hindi-text">
                        {language === 'hindi' ? 'सेवा का नाम' : 'Service Name'}
                      </th>
                      <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-bold hindi-text">
                        {language === 'hindi' ? 'विवरण' : 'Description'}
                      </th>
                      <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-bold hindi-text">
                        {language === 'hindi' ? 'मुख्य लाभ' : 'Key Benefits'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {services.map((service, index) => (
                      <tr key={service.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm font-semibold text-gray-900">
                          {String(index + 1).padStart(2, '0')}
                        </td>
                        <td className="px-4 md:px-6 py-3 md:py-4">
                          <div className="flex items-center gap-2 md:gap-3">
                            <span className="text-xl md:text-2xl">{service.icon}</span>
                            <span className="text-xs md:text-sm font-semibold text-gray-900 hindi-text">
                              {service.title[language]}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 md:px-6 py-3 md:py-4">
                          <p className="text-xs md:text-sm text-gray-700 hindi-text">
                            {service.description[language]}
                          </p>
                        </td>
                        <td className="px-4 md:px-6 py-3 md:py-4">
                          <ul className="text-xs text-gray-600 space-y-1">
                            {service.benefits && service.benefits[language].slice(0, 3).map((benefit, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-primary-600 mr-2">✓</span>
                                <span className="hindi-text">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Services Cards - Mobile */}
            <div className="md:hidden space-y-4 mb-16">
              {services.map((service, index) => (
                <div key={service.id} className="bg-white rounded-lg shadow-md border border-gray-200 p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-xs flex-shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{service.icon}</span>
                        <h3 className="text-sm font-bold text-gray-900 hindi-text">
                          {service.title[language]}
                        </h3>
                      </div>
                      <p className="text-xs text-gray-700 mb-3 hindi-text">
                        {service.description[language]}
                      </p>
                      {service.benefits && (
                        <div className="bg-gray-50 rounded-md p-3">
                          <p className="text-xs font-semibold text-gray-900 mb-2 hindi-text">
                            {language === 'hindi' ? 'मुख्य लाभ:' : 'Key Benefits:'}
                          </p>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {service.benefits[language].slice(0, 3).map((benefit, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-primary-600 mr-2">✓</span>
                                <span className="hindi-text">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Detailed Service Sections */}
            <div className="space-y-16">
              {services.map((service, index) => (
                <div key={service.id} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title[language]}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                      <div className="absolute top-4 left-4 bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-lg">
                        {service.icon}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 md:p-12">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 hindi-text">
                        {service.title[language]}
                      </h3>
                      <p className="text-gray-700 text-lg leading-relaxed mb-6 hindi-text">
                        {service.description[language]}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3 text-gray-900 hindi-text">
                          {language === 'hindi' ? 'विवरण' : 'Details'}
                        </h4>
                        <p className="text-gray-600 leading-relaxed hindi-text">
                          {service.details[language]}
                        </p>
                      </div>

                      {service.benefits && (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold mb-3 text-gray-900 hindi-text">
                            {language === 'hindi' ? 'मुख्य लाभ' : 'Key Benefits'}
                          </h4>
                          <ul className="space-y-2">
                            {service.benefits[language].map((benefit, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-primary-600 mr-3 mt-1">✓</span>
                                <span className="text-gray-700 hindi-text">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <Link
                        to={`/services/${service.id}`}
                        className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                      >
                        {language === 'hindi' ? 'विवरण देखें' : 'View Full Details'}
                        <FiArrowRight className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Empowerment;

