import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { FiMapPin, FiPhone, FiMail, FiSend } from 'react-icons/fi';
import SEO from '../components/SEO';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert(language === 'hindi' ? 'धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।' : 'Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      <SEO 
        title="Contact Us - Mahila Vikash Foundation | Mahila Bikash Foundation | Patna, Muzaffarpur & Sitamarhi"
        description="Contact Mahila Vikash Foundation / Mahila Bikash Foundation (also known as Jaagat Janni Mahila Bikash Foundation / Pragati Mahila Bikash Kendra) - Patna Office: Ghurdaur Road, Digha Ashiana, Near SSB Camp, Patna-800011. Muzaffarpur Office: Maa Complex, Behind SBI, Bhagwanpur Chowk, Sri Rampuri. Sitamarhi Office: Kusamari Chauk, Sitamarhi-843327. Phone: +91 97088 77564"
        keywords="Mahila Vikash Foundation, Mahila Bikash Foundation, mahila vikash foundation, mahila bikash foundation, Mahila Vikash Foundation contact, Mahila Bikash Foundation contact, Mahila Vikash Foundation Patna, Mahila Bikash Foundation Patna, Mahila Vikash Foundation Bihar, Mahila Bikash Foundation Bihar, Pragati Mahila Vikas Foundation, Pragati Mahila Bikash Foundation, pragati mahila vikas foundation, pragati mahila bikash foundation, Pragati Mahila Vikas Foundation contact, Pragati Mahila Bikash Foundation contact, Pragati Mahila Vikas Foundation Patna, Pragati Mahila Bikash Foundation Patna, Pragati Mahila Vikas Kendra, Pragati Mahila Bikash Kendra, mahila bikash foundation, Mahila Bikash Foundation, mahila bikash foundation contact, mahila bikash foundation Patna, mahila bikash foundation Bihar, Jaagat Janni Mahila Bikash Foundation contact, Jagat Janni Mahila Bikash Foundation, Jagat Ganni Mahila Bikash Foundation, Jaagat Ganni Mahila Bikash Foundation, jagat ganni mahila bikash foundation, jagat janni mahila bikash foundation, Jaagat Janni Mahila Vikas Foundation, Jaagat Janni Mahila Bikas Foundation, Pragati Mahila Bikas Kendra, महिला विकास फाउंडेशन पटना, mahila vikas foundation, mahila bikas foundation, mahila Bikas foundation, Mahila Bikas Foundation, women foundation contact Patna, Muzaffarpur women NGO contact, Sitamarhi women NGO contact"
      />
    <div className="pt-20">
      {/* Hero Image Section */}
      <section className="relative py-0 bg-white">
        <div className="relative h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden">
          <img
            src="/website%20data/foundation8.png"
            alt="Contact Us"
            className="w-full h-full object-cover object-center"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>
      </section>

      {/* Government Partnership Note */}
      <section className="py-8 bg-gradient-to-r from-saffron-500/10 via-white to-green-600/10 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-2xl">🇮🇳</span>
              <p className="text-sm md:text-base text-gray-700 font-medium hindi-text">
                {language === 'hindi' 
                  ? 'सरकारी योजनाओं के साथ काम कर रहे हैं'
                  : 'Working in partnership with Government Schemes'}
              </p>
            </div>
            <p className="text-xs text-gray-500 italic">
              {language === 'hindi' 
                ? '*स्वतंत्र संगठन, सरकारी पहलों के साथ सहयोग'
                : '*Independent organization collaborating with government initiatives'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                {language === 'hindi' ? 'संपर्क जानकारी' : 'Contact Information'}
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-4 rounded-full flex-shrink-0">
                    <FiMapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-4 text-gray-900">{t.contact.address}</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-700 text-lg font-medium mb-1">
                          {language === 'hindi' ? 'पटना कार्यालय' : 'Patna Office'}
                        </p>
                        <p className="text-gray-700 text-lg">
                          Ghurdaur Road, Digha Ashiana,<br />
                          Near SSB Camp, Patna-800011
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-700 text-lg font-medium mb-1">
                          {language === 'hindi' ? 'मुजफ्फरपुर कार्यालय' : 'Muzaffarpur Office'}
                        </p>
                        <p className="text-gray-700 text-lg">
                          Maa Complex, Behind SBI,<br />
                          Bhagwanpur Chowk, Sri Rampuri,<br />
                          Muzaffarpur
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-700 text-lg font-medium mb-1">
                          {language === 'hindi' ? 'सीतामढ़ी कार्यालय' : 'Sitamarhi Office'}
                        </p>
                        <p className="text-gray-700 text-lg">
                          Kusamari Chauk Ram Babu Das Rega,<br />
                          Sitamarhi-843327
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-4 rounded-full flex-shrink-0">
                    <FiPhone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-gray-900">{t.contact.phone}</h3>
                    <a href="tel:+919708877564" className="text-gray-700 text-lg hover:text-primary-600 transition-colors">
                      +91 97088 77564
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-4 rounded-full flex-shrink-0">
                    <FiMail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-gray-900">{t.contact.email}</h3>
                    <a href="mailto:info@jaagatjannimahilabikashfoundation.com" className="text-gray-700 text-lg hover:text-primary-600 transition-colors break-all">
                      info@jaagatjannimahilabikashfoundation.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                {t.contact.formTitle}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center"
                >
                  {t.contact.submit}
                  <FiSend className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Contact;

