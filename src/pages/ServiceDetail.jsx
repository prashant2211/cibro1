import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { services } from '../data/services';
import { FiArrowLeft, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import SEO from '../components/SEO';

const ServiceDetail = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services" className="text-primary-600 hover:underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={service.title[language]}
        description={service.description[language]}
        keywords={`${service.title[language]}, self-help group, women empowerment`}
      />
      <div className="pt-20">
        {/* Hero Image */}
        <section className="relative py-0 bg-white">
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden">
            <img
              src={service.image}
              alt={service.title[language]}
              className="w-full h-full object-cover object-center"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <Link
                    to="/services"
                    className="inline-flex items-center text-white mb-4 hover:text-primary-300 transition-colors"
                  >
                    <FiArrowLeft className="mr-2" />
                    {language === 'hindi' ? 'सभी सेवाएं देखें' : 'Back to All Services'}
                  </Link>
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white hindi-text">
                    {service.title[language]}
                  </h1>
                  <p className="text-xl text-white/90">
                    {service.description[language]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 hindi-text">
                  {language === 'hindi' ? 'विवरण' : 'Details'}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {service.details[language]}
                </p>

                {service.benefits && (
                  <div className="bg-gradient-to-r from-primary-50 to-white rounded-lg p-6 mb-6 border-l-4 border-primary-600">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 hindi-text">
                      {language === 'hindi' ? 'मुख्य लाभ' : 'Key Benefits'}
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {service.benefits[language].map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-600 mr-3 mt-1 text-lg">✓</span>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="bg-primary-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 hindi-text">
                    {language === 'hindi' ? 'कैसे आवेदन करें' : 'How to Apply'}
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li className="mb-2">
                      {language === 'hindi' 
                        ? 'एक स्वयं सहायता समूह बनाएं या मौजूदा समूह से जुड़ें'
                        : 'Create a self-help group or join an existing group'}
                    </li>
                    <li className="mb-2">
                      {language === 'hindi' 
                        ? 'हमारे कार्यालय में संपर्क करें या फोन करें'
                        : 'Contact our office or call us'}
                    </li>
                    <li className="mb-2">
                      {language === 'hindi' 
                        ? 'आवश्यक दस्तावेज जमा करें'
                        : 'Submit required documents'}
                    </li>
                    <li>
                      {language === 'hindi' 
                        ? 'हमारी टीम आपकी सहायता करेगी'
                        : 'Our team will assist you'}
                    </li>
                  </ol>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 hindi-text">
                    {language === 'hindi' ? 'संपर्क करें' : 'Contact Us'}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-700">
                      <FiPhone className="h-5 w-5 mr-3 text-primary-600" />
                      <a href="tel:+919525868575" className="hover:text-primary-600 transition-colors">
                        +91 95258 68575
                      </a>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <FiPhone className="h-5 w-5 mr-3 text-primary-600" />
                      <a href="tel:+918210289314" className="hover:text-primary-600 transition-colors">
                        +91 82102 89314
                      </a>
                    </div>
                    <div className="flex items-start text-gray-700">
                      <FiMapPin className="h-5 w-5 mr-3 mt-1 text-primary-600 flex-shrink-0" />
                      <div>
                        <p className="mb-1">
                          {language === 'hindi' ? 'पटना कार्यालय' : 'Patna Office'}:<br />
                          Ghurdaur Road, Digha Ashiana, Near SSB Camp, Patna-800011
                        </p>
                        <p>
                          {language === 'hindi' ? 'मुजफ्फरपुर कार्यालय' : 'Muzaffarpur Office'}:<br />
                          Maa Complex, Behind SBI, Bhagwanpur Chowk, Sri Rampuri, Muzaffarpur
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link
                  to="/form"
                  className="inline-block px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  {language === 'hindi' ? 'अभी आवेदन करें' : 'Apply Now'}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceDetail;

