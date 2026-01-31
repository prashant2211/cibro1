import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FiDownload, FiMapPin, FiPhone } from 'react-icons/fi';

const GroupForm = () => {
  const { language } = useLanguage();

  return (
    <div className="pt-20">
      {/* Hero Image Section */}
      <section className="relative py-0 bg-white">
        <div className="relative h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden">
          <img
            src="/website%20data/foundation7.png"
            alt="Group Registration"
            className="w-full h-full object-cover object-center"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Download Form Section */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 mb-8 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {language === 'hindi' ? 'समूह पंजीकरण फॉर्म' : 'Group Registration Form'}
                </h2>
                <p className="text-primary-100 text-lg md:text-xl max-w-2xl mx-auto">
                  {language === 'hindi' 
                    ? 'समूह पंजीकरण फॉर्म PDF डाउनलोड करें, भरें और हमारे कार्यालय में जमा करें'
                    : 'Download the group registration form PDF, fill it out and submit at our office'}
                </p>
              </div>
              <div className="flex justify-center gap-4 flex-wrap">
                <a
                  href="/website%20data/group-registration-form.html"
                  target="_blank"
                  className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 transition-all flex items-center space-x-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <FiDownload className="h-6 w-6" />
                  <span>{language === 'hindi' ? 'फॉर्म खोलें / प्रिंट करें' : 'Open Form / Print'}</span>
                </a>
                <a
                  href="/website%20data/form.pdf"
                  download="Group_Registration_Form.pdf"
                  className="bg-primary-50 text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-100 transition-all flex items-center space-x-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <FiDownload className="h-6 w-6" />
                  <span>{language === 'hindi' ? 'पुराना PDF डाउनलोड' : 'Download Old PDF'}</span>
                </a>
              </div>
            </div>

            {/* Instructions Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                {language === 'hindi' ? 'निर्देश' : 'Instructions'}
              </h3>
              <div className="space-y-4 text-gray-700 text-lg">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary-100 text-primary-600 rounded-full p-2 flex-shrink-0 mt-1">
                    <span className="font-bold">1</span>
                  </div>
                  <p>
                    {language === 'hindi' 
                      ? 'ऊपर दिए गए बटन से समूह पंजीकरण फॉर्म PDF डाउनलोड करें'
                      : 'Download the group registration form PDF using the button above'}
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary-100 text-primary-600 rounded-full p-2 flex-shrink-0 mt-1">
                    <span className="font-bold">2</span>
                  </div>
                  <p>
                    {language === 'hindi' 
                      ? 'फॉर्म को ध्यान से पढ़ें और सभी आवश्यक जानकारी भरें'
                      : 'Read the form carefully and fill in all required information'}
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary-100 text-primary-600 rounded-full p-2 flex-shrink-0 mt-1">
                    <span className="font-bold">3</span>
                  </div>
                  <p>
                    {language === 'hindi' 
                      ? 'भरे हुए फॉर्म को हमारे कार्यालय में जमा करें या हमसे संपर्क करें'
                      : 'Submit the filled form at our office or contact us'}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information for Submission */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                {language === 'hindi' ? 'फॉर्म जमा करने के लिए संपर्क करें' : 'Contact for Form Submission'}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-semibold text-lg mb-3 text-gray-900">
                    {language === 'hindi' ? 'पटना कार्यालय' : 'Patna Office'}
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Ghurdaur Road, Digha Ashiana,<br />
                    Near SSB Camp, Patna-800011
                  </p>
                  <a href="tel:+919525868575" className="text-primary-600 hover:text-primary-700 font-medium">
                    +91 95258 68575
                  </a>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-semibold text-lg mb-3 text-gray-900">
                    {language === 'hindi' ? 'मुजफ्फरपुर कार्यालय' : 'Muzaffarpur Office'}
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Maa Complex, Behind SBI,<br />
                    Bhagwanpur Chowk, Sri Rampuri,<br />
                    Muzaffarpur
                  </p>
                  <a href="tel:+918210289314" className="text-primary-600 hover:text-primary-700 font-medium">
                    +91 82102 89314
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GroupForm;

