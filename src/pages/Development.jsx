import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { FiTrendingUp, FiBook, FiMonitor, FiBriefcase } from 'react-icons/fi';

const Development = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    {
      icon: FiBriefcase,
      title: language === 'hindi' ? 'व्यावसायिक प्रशिक्षण' : 'Vocational Training',
      description: language === 'hindi' 
        ? 'विभिन्न व्यवसायों में कौशल विकास और प्रशिक्षण कार्यक्रम'
        : 'Skill development and training programs in various trades'
    },
    {
      icon: FiBook,
      title: language === 'hindi' ? 'शिक्षा कार्यक्रम' : 'Education Programs',
      description: language === 'hindi' 
        ? 'साक्षरता और शिक्षा कार्यक्रम जो महिलाओं को सशक्त बनाते हैं'
        : 'Literacy and education programs that empower women'
    },
    {
      icon: FiMonitor,
      title: language === 'hindi' ? 'डिजिटल साक्षरता' : 'Digital Literacy',
      description: language === 'hindi' 
        ? 'कंप्यूटर और डिजिटल तकनीकों में प्रशिक्षण'
        : 'Training in computers and digital technologies'
    },
    {
      icon: FiTrendingUp,
      title: language === 'hindi' ? 'उद्यमिता विकास' : 'Entrepreneurship Development',
      description: language === 'hindi' 
        ? 'उद्यमिता और व्यवसाय शुरू करने में मार्गदर्शन'
        : 'Guidance in entrepreneurship and starting businesses'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Image Section */}
      <section className="relative py-0 bg-white">
        <div className="relative h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden">
          <img
            src="/website%20data/foundation5.png"
            alt="Development Programs"
            className="w-full h-full object-cover object-center"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>
      </section>

      {/* Services - Vertical Stack with Images */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              const imageNum = index === 0 ? '6' : index === 1 ? '7' : index === 2 ? '8' : '';
              return (
                <div key={index} className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="grid md:grid-cols-3 gap-0">
                    <div className="md:col-span-1 relative h-64 md:h-full">
                      <img
                        src={`/website%20data/foundation${imageNum}.png`}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>
                    <div className="md:col-span-2 p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center mb-6">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                          <Icon className="h-8 w-8 text-blue-600" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </div>
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

export default Development;

