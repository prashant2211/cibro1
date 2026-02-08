import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { services } from '../data/services';
import { FiHeart, FiShield, FiTrendingUp, FiUsers, FiArrowRight, FiCheckCircle, FiPhone, FiMapPin, FiMail, FiClock, FiAward, FiTarget, FiHome, FiLock } from 'react-icons/fi';
import SEO from '../components/SEO';

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <SEO 
        title="Jaagat Janni Mahila Vikash Foundation | Pragati Mahila Vikash Kendra - Women Empowerment Patna"
        description="Jaagat Janni Mahila Vikash Foundation (Pragati Mahila Vikash Kendra) - Self-help group services, loans, savings schemes, training programs for women empowerment in Patna and Muzaffarpur, Bihar. Contact: +91 95258 68575, +91 82102 89314"
        keywords="Jaagat Janni Mahila Vikash Foundation, Jaagat Janni Mahila Vikas Foundation, Jaagat Janni Mahila Bikas Foundation, Pragati Mahila Vikash Kendra, Pragati Mahila Vikas Kendra, Pragati Mahila Bikas Kendra, महिला विकास फाउंडेशन, महिला विकास फाउंडेशन पटना, mahila vikas foundation, mahila vikash foundation, mahila bikas foundation, mahila Bikas foundation, Mahila Bikas Foundation, mahila vikas foundation Patna, mahila vikash foundation Patna, mahila bikas foundation Patna, mahila Bikas foundation Patna, self-help group Patna, women empowerment Bihar, स्वयं सहायता समूह, बचत योजना, ऋण योजना, महिला सशक्तिकरण पटना, Muzaffarpur women foundation"
      />
      <div className="pt-20">
      {/* Hero Image Section */}
      <section className="relative py-0 bg-white">
        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-gray-200">
          <img
            src="/website%20data/Bajat%20yojna.png"
            alt="Foundation"
            className="w-full h-full object-cover object-center"
            onError={(e) => { 
              console.error('Image failed to load:', e.target.src);
              e.target.src = '/website%20data/foundation.png';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center fade-in">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white hindi-text">
                  {language === 'hindi' ? 'जागत जननी महिला विकास फाउंडेशन' : 'Jaagat Janni Mahila Vikash Foundation'}
                </h1>
                <p className="text-xl md:text-2xl mb-2 text-white/90">
                  Pragati Mahila Vikash Kendra
                </p>
                <p className="text-lg md:text-xl mb-8 text-white/90">
                  {t.home.heroDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/form"
                    className="px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors inline-flex items-center justify-center shadow-lg"
                  >
                    {t.home.ctaButton}
                    <FiArrowRight className="ml-2" />
                  </Link>
                  <Link
                    to="/about"
                    className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm"
                  >
                    {t.home.learnMore}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Support Banner with Image */}
      <section className="py-8 bg-gradient-to-r from-saffron-500 via-white to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/website%20data/Bajat%20yojna.png"
            alt="Savings Scheme"
            className="w-full h-full object-cover"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-8 border-2 border-gray-200">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-saffron-500 via-white to-green-600 rounded-full flex items-center justify-center border-2 border-gray-300 shadow-md">
                    <span className="text-2xl md:text-3xl">🇮🇳</span>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 hindi-text">
                      {language === 'hindi' ? 'सरकारी योजनाओं के साथ काम कर रहे हैं' : 'Working with Government Initiatives'}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">
                      {language === 'hindi' 
                        ? 'भारत सरकार की महिला सशक्तिकरण योजनाओं के साथ सहयोग'
                        : 'In partnership with Government of India\'s Women Empowerment Schemes'}
                    </p>
                  </div>
                </div>
                <div className="text-xs md:text-sm text-gray-500 italic border-t md:border-t-0 md:border-l pt-3 md:pt-0 md:pl-6 md:border-gray-300">
                  {language === 'hindi' 
                    ? '*स्वतंत्र संगठन, सरकारी योजनाओं के साथ सहयोग'
                    : '*Independent organization working in partnership with government schemes'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Smaller Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6 rounded-lg overflow-hidden">
                <img
                  src="/website%20data/Bajat%20yojna.png"
                  alt="Mission"
                  className="w-full h-64 object-cover"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <FiHeart className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {t.home.ourMission}
                </h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t.home.missionText}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6 rounded-lg overflow-hidden">
                <img
                  src="/website%20data/foundation2.png"
                  alt="Vision"
                  className="w-full h-64 object-cover"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <div className="flex items-center mb-4">
                <div className="bg-secondary-100 p-3 rounded-full mr-4">
                  <FiTrendingUp className="h-8 w-8 text-secondary-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {t.home.ourVision}
                </h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t.home.visionText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services - 10 Services Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 hindi-text">
                {language === 'hindi' ? 'स्वयं सहायता समूह सेवाएं' : 'Self-Help Group Services'}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-2">
                {language === 'hindi' 
                  ? 'जागत जननी महिला विकास फाउंडेशन - प्रगति महिला विकास केंद्र'
                  : 'Jaagat Janni Mahila Vikash Foundation - Pragati Mahila Vikash Kendra'}
              </p>
              <p className="text-base text-gray-500 max-w-2xl mx-auto">
                {language === 'hindi' 
                  ? 'हम महिलाओं को आर्थिक रूप से सशक्त बनाने के लिए 10 प्रमुख सेवाएं प्रदान करते हैं'
                  : 'We provide 10 key services to economically empower women'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {services.slice(0, 6).map((service, index) => (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-transparent hover:border-primary-200"
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

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.slice(6, 10).map((service, index) => (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-transparent hover:border-primary-200"
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

            <div className="text-center mt-12">
              <Link
                to="/services"
                className="inline-block px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors text-lg"
              >
                {language === 'hindi' ? 'सभी सेवाएं देखें' : 'View All Services'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Table Section */}
      <section className="py-16 md:py-24 bg-white">
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
            <div className="hidden md:block bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
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
            <div className="md:hidden space-y-4">
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
          </div>
        </div>
      </section>

      {/* Security Services Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-primary-100 px-4 py-2 rounded-full mb-4">
                <FiShield className="inline-block h-5 w-5 text-primary-600 mr-2" />
                <span className="text-sm md:text-base font-semibold text-primary-600">
                  {language === 'hindi' ? 'सुरक्षा सेवाएं' : 'Security Services'}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 hindi-text">
                {language === 'hindi' ? 'सुरक्षा और घरेलू सेवाएं' : 'Security & Household Services'}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {language === 'hindi' 
                  ? 'हम सुरक्षा गार्ड और घरेलू काम के लिए महिलाओं की सेवाएं प्रदान करते हैं'
                  : 'We provide security guard services and women for household work'}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-primary-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                    <FiShield className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 hindi-text">
                    {language === 'hindi' ? 'सुरक्षा गार्ड सेवा' : 'Security Guard Service'}
                  </h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4 hindi-text">
                  {language === 'hindi' 
                    ? 'हम प्रशिक्षित और विश्वसनीय सुरक्षा गार्ड सेवाएं प्रदान करते हैं। हमारे सुरक्षा गार्ड आपके घर, कार्यालय, या व्यवसाय की सुरक्षा सुनिश्चित करने के लिए उपलब्ध हैं।'
                    : 'We provide trained and reliable security guard services. Our security guards are available to ensure the safety of your home, office, or business.'}
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start text-gray-700">
                    <span className="text-primary-600 mr-3 mt-1">✓</span>
                    <span className="hindi-text">
                      {language === 'hindi' 
                        ? 'प्रशिक्षित और विश्वसनीय सुरक्षा गार्ड'
                        : 'Trained and reliable security guards'}
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-primary-600 mr-3 mt-1">✓</span>
                    <span className="hindi-text">
                      {language === 'hindi' 
                        ? 'घर, कार्यालय और व्यवसाय के लिए सुरक्षा'
                        : 'Security for homes, offices, and businesses'}
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-primary-600 mr-3 mt-1">✓</span>
                    <span className="hindi-text">
                      {language === 'hindi' 
                        ? '24/7 सुरक्षा सेवाएं'
                        : '24/7 security services'}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-green-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                    <FiHome className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 hindi-text">
                    {language === 'hindi' ? 'घरेलू काम के लिए महिलाएं' : 'Women for Household Work'}
                  </h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4 hindi-text">
                  {language === 'hindi' 
                    ? 'हम घरेलू काम के लिए विश्वसनीय और प्रशिक्षित महिलाओं की सेवाएं प्रदान करते हैं। हमारी महिलाएं सफाई, खाना बनाना, और अन्य घरेलू कामों में मदद करती हैं।'
                    : 'We provide reliable and trained women for household work. Our women help with cleaning, cooking, and other household tasks.'}
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start text-gray-700">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    <span className="hindi-text">
                      {language === 'hindi' 
                        ? 'सफाई और घरेलू काम के लिए महिलाएं'
                        : 'Women for cleaning and household work'}
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    <span className="hindi-text">
                      {language === 'hindi' 
                        ? 'खाना बनाने और रसोई काम के लिए'
                        : 'For cooking and kitchen work'}
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    <span className="hindi-text">
                      {language === 'hindi' 
                        ? 'विश्वसनीय और प्रशिक्षित कर्मचारी'
                        : 'Reliable and trained staff'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <div className="bg-primary-50 rounded-lg p-6 border-l-4 border-primary-600">
                <p className="text-gray-700 text-lg hindi-text">
                  {language === 'hindi' 
                    ? 'सुरक्षा और घरेलू सेवाओं के लिए, कृपया हमारे कार्यालय में संपर्क करें या फोन करें।'
                    : 'For security and household services, please contact our office or call us.'}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
                  <a href="tel:+919525868575" className="flex items-center text-primary-600 font-semibold hover:text-primary-700">
                    <FiPhone className="mr-2" />
                    +91 95258 68575
                  </a>
                  <a href="tel:+918210289314" className="flex items-center text-primary-600 font-semibold hover:text-primary-700">
                    <FiPhone className="mr-2" />
                    +91 82102 89314
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 hindi-text">
                {language === 'hindi' ? 'हमें क्यों चुनें' : 'Why Choose Us'}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {language === 'hindi' 
                  ? 'हमारे पास महिला समूहों को सशक्त बनाने के लिए अनुभव और विशेषज्ञता है'
                  : 'We have the experience and expertise to empower women\'s groups'}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 shadow-lg border border-primary-100 hover:shadow-xl transition-shadow">
                <div className="bg-primary-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <FiUsers className="h-7 w-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 hindi-text">
                  {language === 'hindi' ? 'अनुभवी टीम' : 'Experienced Team'}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {language === 'hindi' 
                    ? 'हमारी अनुभवी टीम महिला समूहों के गठन और प्रबंधन में पूर्ण मार्गदर्शन प्रदान करती है।'
                    : 'Our experienced team provides complete guidance in forming and managing women\'s groups.'}
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-shadow">
                <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <FiCheckCircle className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 hindi-text">
                  {language === 'hindi' ? 'सरकारी सहयोग' : 'Government Partnership'}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {language === 'hindi' 
                    ? 'भारत सरकार की महिला सशक्तिकरण योजनाओं के साथ सहयोग से लाभ उठाएं।'
                    : 'Benefit from partnership with Government of India\'s women empowerment schemes.'}
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <FiAward className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 hindi-text">
                  {language === 'hindi' ? 'व्यापक सेवाएं' : 'Comprehensive Services'}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {language === 'hindi' 
                    ? 'बचत से लेकर ऋण, प्रशिक्षण से लेकर व्यवसाय तक, हम सभी सेवाएं प्रदान करते हैं।'
                    : 'From savings to loans, training to business, we provide all services.'}
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
                <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <FiTarget className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 hindi-text">
                  {language === 'hindi' ? 'सिद्ध परिणाम' : 'Proven Results'}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {language === 'hindi' 
                    ? '500+ लाभार्थी और 50+ समूह हमारी सफलता की कहानी बयान करते हैं।'
                    : '500+ beneficiaries and 50+ groups tell our success story.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 hindi-text">
                {language === 'hindi' ? 'यह कैसे काम करता है' : 'How It Works'}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {language === 'hindi' 
                  ? 'स्वयं सहायता समूह बनाने और हमारी सेवाओं का लाभ उठाने की सरल प्रक्रिया'
                  : 'Simple process to form self-help groups and avail our services'}
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 hindi-text">
                  {language === 'hindi' ? 'समूह बनाएं' : 'Form Group'}
                </h3>
                <p className="text-gray-600">
                  {language === 'hindi' 
                    ? '10-15 महिलाओं का समूह बनाएं और हमारे कार्यालय में संपर्क करें'
                    : 'Form a group of 10-15 women and contact our office'}
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 hindi-text">
                  {language === 'hindi' ? 'पंजीकरण करें' : 'Register'}
                </h3>
                <p className="text-gray-600">
                  {language === 'hindi' 
                    ? 'समूह का पंजीकरण करें और आवश्यक दस्तावेज जमा करें'
                    : 'Register the group and submit required documents'}
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 hindi-text">
                  {language === 'hindi' ? 'सेवाएं प्राप्त करें' : 'Avail Services'}
                </h3>
                <p className="text-gray-600">
                  {language === 'hindi' 
                    ? 'बचत योजना, ऋण, प्रशिक्षण और अन्य सेवाओं का लाभ उठाएं'
                    : 'Avail savings schemes, loans, training and other services'}
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 hindi-text">
                  {language === 'hindi' ? 'विकास करें' : 'Grow'}
                </h3>
                <p className="text-gray-600">
                  {language === 'hindi' 
                    ? 'आर्थिक रूप से स्वतंत्र बनें और अपने समूह का विकास करें'
                    : 'Become economically independent and grow your group'}
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link
                to="/form"
                className="inline-block px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                {language === 'hindi' ? 'अभी शुरू करें' : 'Get Started Now'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 hindi-text">
                {language === 'hindi' ? 'हमारे कार्यक्रम' : 'Our Programs'}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {language === 'hindi' 
                  ? 'महिलाओं के समग्र विकास के लिए विभिन्न कार्यक्रम'
                  : 'Various programs for comprehensive development of women'}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                to="/empowerment"
                className="group bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-green-100 hover:border-green-300"
              >
                <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <FiUsers className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {language === 'hindi' ? 'सशक्तिकरण' : 'Empowerment'}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {language === 'hindi' 
                    ? 'महिलाओं को सशक्त बनाने के कार्यक्रम'
                    : 'Programs to empower women'}
                </p>
                <div className="flex items-center text-green-600 font-semibold text-sm">
                  {language === 'hindi' ? 'और जानें' : 'Learn More'}
                  <FiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
              <Link
                to="/health"
                className="group bg-gradient-to-br from-red-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-red-100 hover:border-red-300"
              >
                <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <FiHeart className="h-7 w-7 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {language === 'hindi' ? 'स्वास्थ्य कार्यक्रम' : 'Health Programs'}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {language === 'hindi' 
                    ? 'महिलाओं के स्वास्थ्य और कल्याण के लिए कार्यक्रम'
                    : 'Programs for women\'s health and wellness'}
                </p>
                <div className="flex items-center text-red-600 font-semibold text-sm">
                  {language === 'hindi' ? 'और जानें' : 'Learn More'}
                  <FiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
              <Link
                to="/safety"
                className="group bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-orange-100 hover:border-orange-300"
              >
                <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <FiShield className="h-7 w-7 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {language === 'hindi' ? 'महिला सुरक्षा' : 'Women Safety'}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {language === 'hindi' 
                    ? 'महिलाओं की सुरक्षा और सशक्तिकरण'
                    : 'Women\'s safety and empowerment'}
                </p>
                <div className="flex items-center text-orange-600 font-semibold text-sm">
                  {language === 'hindi' ? 'और जानें' : 'Learn More'}
                  <FiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
              <Link
                to="/development"
                className="group bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-blue-100 hover:border-blue-300"
              >
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <FiTrendingUp className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {language === 'hindi' ? 'विकास कार्यक्रम' : 'Development Programs'}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {language === 'hindi' 
                    ? 'सामाजिक और आर्थिक विकास कार्यक्रम'
                    : 'Social and economic development programs'}
                </p>
                <div className="flex items-center text-blue-600 font-semibold text-sm">
                  {language === 'hindi' ? 'और जानें' : 'Learn More'}
                  <FiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            </div>
            <div className="text-center mt-8">
              <Link
                to="/programs"
                className="inline-block px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                {language === 'hindi' ? 'सभी कार्यक्रम देखें' : 'View All Programs'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 hindi-text">
                {language === 'hindi' ? 'हमसे संपर्क करें' : 'Contact Us'}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {language === 'hindi' 
                  ? 'हमारे कार्यालयों में आएं या हमें कॉल करें'
                  : 'Visit our offices or call us'}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <FiMapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {language === 'hindi' ? 'पटना कार्यालय' : 'Patna Office'}
                  </h3>
                </div>
                <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                  Ghurdaur Road, Digha Ashiana,<br />
                  Near SSB Camp, Patna-800011
                </p>
                <div className="flex items-center text-gray-700 mb-2">
                  <FiPhone className="h-5 w-5 mr-3 text-primary-600" />
                  <a href="tel:+919525868575" className="hover:text-primary-600 transition-colors">
                    +91 95258 68575
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <FiMapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {language === 'hindi' ? 'मुजफ्फरपुर कार्यालय' : 'Muzaffarpur Office'}
                  </h3>
                </div>
                <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                  Maa Complex, Behind SBI,<br />
                  Bhagwanpur Chowk, Sri Rampuri,<br />
                  Muzaffarpur
                </p>
                <div className="flex items-center text-gray-700 mb-2">
                  <FiPhone className="h-5 w-5 mr-3 text-green-600" />
                  <a href="tel:+918210289314" className="hover:text-green-600 transition-colors">
                    +91 82102 89314
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link
                to="/contact"
                className="inline-block px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                {language === 'hindi' ? 'संपर्क फॉर्म भरें' : 'Fill Contact Form'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Smaller */}
      <section className="py-12 md:py-16 bg-primary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/website%20data/foundation7.png" 
            alt="Stats Background" 
            className="w-full h-full object-cover"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-xl">{language === 'hindi' ? 'लाभार्थी' : 'Beneficiaries'}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-xl">{language === 'hindi' ? 'समूह' : 'Groups'}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-xl">{language === 'hindi' ? 'कार्यक्रम' : 'Programs'}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-xl">{language === 'hindi' ? 'वर्षों का अनुभव' : 'Years Experience'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Smaller */}
      <section className="py-12 md:py-16 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/website%20data/foundation8.png" 
            alt="CTA Background" 
            className="w-full h-full object-cover"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'hindi' 
              ? 'हमारे साथ जुड़ें और बदलाव लाएं'
              : 'Join Us and Make a Difference'}
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            {language === 'hindi' 
              ? 'एक नया समूह बनाएं या हमारे कार्यक्रमों में भाग लें'
              : 'Create a new group or participate in our programs'}
          </p>
          <Link
            to="/form"
            className="inline-block px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            {t.nav.form}
          </Link>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;

