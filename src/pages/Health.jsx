import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { FiHeart, FiActivity, FiShield, FiUsers } from 'react-icons/fi';

const Health = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    {
      icon: FiHeart,
      title: language === 'hindi' ? 'नियमित स्वास्थ्य जांच' : 'Regular Health Checkups',
      description: language === 'hindi' 
        ? 'महिलाओं के लिए नियमित स्वास्थ्य जांच और स्क्रीनिंग कार्यक्रम'
        : 'Regular health checkups and screening programs for women'
    },
    {
      icon: FiActivity,
      title: language === 'hindi' ? 'टीकाकरण कार्यक्रम' : 'Vaccination Programs',
      description: language === 'hindi' 
        ? 'विभिन्न बीमारियों के खिलाफ टीकाकरण सेवाएं'
        : 'Vaccination services against various diseases'
    },
    {
      icon: FiShield,
      title: language === 'hindi' ? 'पोषण जागरूकता' : 'Nutrition Awareness',
      description: language === 'hindi' 
        ? 'स्वस्थ आहार और पोषण के बारे में जागरूकता कार्यक्रम'
        : 'Awareness programs about healthy diet and nutrition'
    },
    {
      icon: FiUsers,
      title: language === 'hindi' ? 'मानसिक स्वास्थ्य सेवाएं' : 'Mental Health Services',
      description: language === 'hindi' 
        ? 'मानसिक स्वास्थ्य परामर्श और सहायता सेवाएं'
        : 'Mental health counseling and support services'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Image Section */}
      <section className="relative py-0 bg-white">
        <div className="relative h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden">
          <img
            src="/website%20data/foundation3.png"
            alt="Health Programs"
            className="w-full h-full object-cover object-center"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>
      </section>

      {/* Services - Zigzag Layout */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              const imageNum = index === 0 ? '' : index === 1 ? '1' : index === 2 ? '2' : '3';
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`mb-16 grid md:grid-cols-2 gap-8 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}>
                  <div className={isEven ? 'order-1' : 'order-2'}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={`/website%20data/foundation${imageNum}.png`}
                        alt={service.title}
                        className="w-full h-80 object-cover"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>
                  </div>
                  <div className={isEven ? 'order-2' : 'order-1'}>
                    <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                      <Icon className="h-10 w-10 text-primary-600" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Health;

