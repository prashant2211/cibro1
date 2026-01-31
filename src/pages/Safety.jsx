import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { FiShield, FiAlertCircle, FiPhone, FiUsers } from 'react-icons/fi';

const Safety = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    {
      icon: FiShield,
      title: language === 'hindi' ? 'स्व-रक्षा प्रशिक्षण' : 'Self-Defense Training',
      description: language === 'hindi' 
        ? 'महिलाओं के लिए व्यावहारिक स्व-रक्षा तकनीकों का प्रशिक्षण'
        : 'Training in practical self-defense techniques for women'
    },
    {
      icon: FiAlertCircle,
      title: language === 'hindi' ? 'कानूनी जागरूकता' : 'Legal Awareness',
      description: language === 'hindi' 
        ? 'महिलाओं के अधिकारों और कानूनी सुरक्षा के बारे में जागरूकता'
        : 'Awareness about women\'s rights and legal protection'
    },
    {
      icon: FiPhone,
      title: language === 'hindi' ? 'हेल्पलाइन सेवाएं' : 'Helpline Services',
      description: language === 'hindi' 
        ? '24/7 हेल्पलाइन सेवाएं और आपातकालीन सहायता'
        : '24/7 helpline services and emergency assistance'
    },
    {
      icon: FiUsers,
      title: language === 'hindi' ? 'सुरक्षा कार्यशालाएं' : 'Safety Workshops',
      description: language === 'hindi' 
        ? 'सुरक्षा और सतर्कता पर नियमित कार्यशालाएं'
        : 'Regular workshops on safety and vigilance'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Image Section */}
      <section className="relative py-0 bg-white">
        <div className="relative h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden">
          <img
            src="/website%20data/foundation4.png"
            alt="Safety Programs"
            className="w-full h-full object-cover object-center"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>
      </section>

      {/* Services - Card Grid Layout */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                const imageNum = index === 0 ? '5' : index === 1 ? '6' : index === 2 ? '7' : '8';
                return (
                  <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={`/website%20data/foundation${imageNum}.png`}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                      <div className="absolute top-4 right-4 bg-red-600 text-white p-3 rounded-full shadow-lg">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Safety;

