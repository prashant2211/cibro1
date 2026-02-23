import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { FiMapPin, FiCalendar, FiUsers, FiTarget, FiPhone, FiAward, FiShield, FiHome, FiLock } from 'react-icons/fi';
import SEO from '../components/SEO';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <SEO 
        title="About Us - Jaagat Janni Mahila Bikash Foundation | Pragati Mahila Bikash Kendra"
        description="Learn about Jaagat Janni Mahila Bikash Foundation (Pragati Mahila Bikash Kendra) - Established in 2024, working for women's self-help groups, empowerment, and development in Patna and Muzaffarpur, Bihar. Contact: +91 95258 68575, +91 82102 89314"
        keywords="Pragati Mahila Vikas Foundation, Pragati Mahila Bikash Foundation, pragati mahila vikas foundation, pragati mahila bikash foundation, Pragati Mahila Vikas Foundation Patna, Pragati Mahila Bikash Foundation Patna, Pragati Mahila Vikas Kendra, Pragati Mahila Bikash Kendra, mahila bikash foundation, Mahila Bikash Foundation, mahila bikash foundation Patna, mahila bikash foundation Bihar, Jaagat Janni Mahila Bikash Foundation about, Jagat Janni Mahila Bikash Foundation, Jagat Ganni Mahila Bikash Foundation, Jaagat Ganni Mahila Bikash Foundation, jagat ganni mahila bikash foundation, jagat janni mahila bikash foundation, Jaagat Janni Mahila Vikas Foundation, Jaagat Janni Mahila Bikas Foundation, Pragati Mahila Bikas Kendra, महिला विकास फाउंडेशन, mahila vikas foundation, mahila bikas foundation, mahila Bikas foundation, Mahila Bikas Foundation, women self-help groups Patna, महिला समूह पटना, Bihar women NGO, women empowerment organization"
      />
    <div className="pt-20">
      {/* Hero Image Section */}
      <section className="relative py-0 bg-white">
        <div className="relative h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden">
          <img
            src="/website%20data/foundation.png"
            alt="Foundation"
            className="w-full h-full object-cover object-center"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Story Section with Image */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/website%20data/foundation1.png"
                    alt="Our Story"
                    className="w-full h-80 object-cover"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 hindi-text">
                  {language === 'hindi' ? 'हमारी कहानी' : 'Our Story'}
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  {language === 'hindi' 
                    ? 'जागत जननी महिला विकास फाउंडेशन (प्रगति महिला विकास केंद्र) महिलाओं के स्वयं सहायता समूह (महिला समूह) बनाने और उन्हें सशक्त बनाने के लिए समर्पित है। हमारा मुख्य उद्देश्य महिलाओं को आर्थिक रूप से स्वतंत्र बनाना और उन्हें विभिन्न वित्तीय सेवाओं तक पहुंच प्रदान करना है।'
                    : 'Jaagat Janni Mahila Bikash Foundation (Pragati Mahila Bikash Kendra) is dedicated to forming women\'s self-help groups (mahila samooh) and empowering them. Our main objective is to make women economically independent and provide them access to various financial services.'}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {language === 'hindi' 
                    ? 'हम महिलाओं को स्वयं सहायता समूह बनाने, बचत करने, ऋण लेने, और विभिन्न आय सृजन गतिविधियों में मदद करते हैं। हमारी सेवाएं महिला समूहों को सशक्त बनाने और उन्हें आर्थिक रूप से स्वतंत्र बनाने पर केंद्रित हैं।'
                    : 'We help women form self-help groups, save money, take loans, and engage in various income-generating activities. Our services are focused on empowering women\'s groups and making them economically independent.'}
                </p>
              </div>
            </div>

            {/* Objective Section with Image */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 hindi-text">
                  {language === 'hindi' ? 'हमारा उद्देश्य' : 'Our Objective'}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {language === 'hindi' 
                    ? 'हमारा मुख्य उद्देश्य महिलाओं को स्वयं सहायता समूह (महिला समूह) बनाने में मदद करना, उन्हें बचत और ऋण सुविधाएं प्रदान करना, और आर्थिक रूप से स्वतंत्र बनाना है।'
                    : 'Our main objective is to help women form self-help groups (mahila samooh), provide them with savings and loan facilities, and make them economically independent.'}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {language === 'hindi' 
                    ? 'हम महिलाओं को प्रशिक्षण, वित्तीय सहायता, और व्यावसायिक अवसर प्रदान करके उन्हें सशक्त बनाते हैं। हमारी सेवाएं स्वयं सहायता समूह बनाने, बचत योजना, ऋण योजना, प्रशिक्षण कार्यक्रम, और सरकारी योजनाओं तक पहुंच प्रदान करने पर केंद्रित हैं।'
                    : 'We empower women by providing training, financial assistance, and business opportunities. Our services are focused on forming self-help groups, savings schemes, loan schemes, training programs, and providing access to government schemes.'}
                </p>
              </div>
              <div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/website%20data/foundation2.png"
                    alt="Our Objective"
                    className="w-full h-80 object-cover"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 mb-16 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center hindi-text">
                {language === 'hindi' ? 'हमारा प्रभाव' : 'Our Impact'}
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-2">500+</div>
                  <div className="text-xl text-white/90">{t.about.beneficiaries}</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-2">50+</div>
                  <div className="text-xl text-white/90">
                    {language === 'hindi' ? 'महिला समूह' : 'Women Groups'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-2">10</div>
                  <div className="text-xl text-white/90">
                    {language === 'hindi' ? 'मुख्य सेवाएं' : 'Core Services'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-2">10+</div>
                  <div className="text-xl text-white/90">{t.about.established}</div>
                </div>
              </div>
            </div>

            {/* Government Partnership Section */}
            <div className="bg-white rounded-2xl p-8 md:p-12 mb-16 shadow-xl border-2 border-gray-200">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-saffron-500 via-white to-green-600 rounded-full flex items-center justify-center border-4 border-gray-300 shadow-lg">
                    <span className="text-4xl md:text-5xl">🇮🇳</span>
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 hindi-text">
                    {language === 'hindi' ? 'सरकारी सहयोग' : 'Government Partnership'}
                  </h2>
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    {language === 'hindi' 
                      ? 'हम भारत सरकार की विभिन्न महिला सशक्तिकरण योजनाओं जैसे बेटी बचाओ बेटी पढ़ाओ, महिला शक्ति केंद्र, और अन्य सामाजिक कल्याण कार्यक्रमों के साथ मिलकर काम करते हैं।'
                      : 'We work in collaboration with various Government of India women empowerment schemes including Beti Bachao Beti Padhao, Mahila Shakti Kendra, and other social welfare programs.'}
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    {language === 'hindi' 
                      ? '*यह एक स्वतंत्र गैर-सरकारी संगठन है जो सरकारी योजनाओं के साथ सहयोग करता है'
                      : '*This is an independent NGO working in partnership with government schemes'}
                  </p>
                </div>
              </div>
            </div>

            {/* Key Information */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <FiMapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{t.contact.address}</h3>
                </div>
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
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-secondary-100 p-3 rounded-full mr-4">
                    <FiCalendar className="h-6 w-6 text-secondary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{t.about.established}</h3>
                </div>
                <p className="text-gray-700 text-lg">
                  {language === 'hindi' ? '2024 में स्थापित' : 'Established in 2024'}
                </p>
              </div>
            </div>

            {/* Team/Leadership Section */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 text-center">
                {language === 'hindi' ? 'हमारी टीम' : 'Our Team'}
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mr-4">
                      <FiAward className="h-10 w-10 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {language === 'hindi' ? 'संस्थापक और अध्यक्ष' : 'Founder and Chairperson'}
                      </h3>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      Promod Kumar Chaudhary
                    </h4>
                    <div className="flex items-center text-gray-700">
                      <FiPhone className="h-5 w-5 mr-2 text-primary-600" />
                      <a href="tel:+919525868575" className="hover:text-primary-600 transition-colors">
                        +91 95258 68575
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mr-4">
                      <FiShield className="h-10 w-10 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {language === 'hindi' ? 'मुख्य सुरक्षा अधिकारी' : 'Chief Security Officer (CSO)'}
                      </h3>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      Bipin Kumar Singh
                    </h4>
                    <div className="flex items-center text-gray-700">
                      <FiPhone className="h-5 w-5 mr-2 text-primary-600" />
                      <a href="tel:+918210289314" className="hover:text-primary-600 transition-colors">
                        +91 82102 89314
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Services Section */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 text-center hindi-text">
                {language === 'hindi' ? 'सुरक्षा और घरेलू सेवाएं' : 'Security & Household Services'}
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-primary-100">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <FiShield className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 hindi-text">
                    {language === 'hindi' ? 'सुरक्षा गार्ड सेवा' : 'Security Guard Service'}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    {language === 'hindi' 
                      ? 'हम प्रशिक्षित और विश्वसनीय सुरक्षा गार्ड सेवाएं प्रदान करते हैं। हमारे सुरक्षा गार्ड आपके घर, कार्यालय, या व्यवसाय की सुरक्षा सुनिश्चित करने के लिए उपलब्ध हैं।'
                      : 'We provide trained and reliable security guard services. Our security guards are available to ensure the safety of your home, office, or business.'}
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>{language === 'hindi' ? 'प्रशिक्षित सुरक्षा गार्ड' : 'Trained security guards'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>{language === 'hindi' ? 'घर और कार्यालय सुरक्षा' : 'Home and office security'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>{language === 'hindi' ? '24/7 सुरक्षा सेवाएं' : '24/7 security services'}</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-green-100">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <FiHome className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 hindi-text">
                    {language === 'hindi' ? 'घरेलू काम के लिए महिलाएं' : 'Women for Household Work'}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    {language === 'hindi' 
                      ? 'हम घरेलू काम के लिए विश्वसनीय और प्रशिक्षित महिलाओं की सेवाएं प्रदान करते हैं। हमारी महिलाएं सफाई, खाना बनाना, और अन्य घरेलू कामों में मदद करती हैं।'
                      : 'We provide reliable and trained women for household work. Our women help with cleaning, cooking, and other household tasks.'}
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>{language === 'hindi' ? 'सफाई और घरेलू काम' : 'Cleaning and household work'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>{language === 'hindi' ? 'खाना बनाने की सेवा' : 'Cooking services'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>{language === 'hindi' ? 'विश्वसनीय कर्मचारी' : 'Reliable staff'}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-primary-50 rounded-lg p-6 border-l-4 border-primary-600 text-center">
                <p className="text-gray-700 text-lg mb-4 hindi-text">
                  {language === 'hindi' 
                    ? 'सुरक्षा और घरेलू सेवाओं के लिए संपर्क करें'
                    : 'Contact us for security and household services'}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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

            {/* What We Do - Self-Help Group Focus */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 text-center hindi-text">
                {language === 'hindi' ? 'हम क्या करते हैं' : 'What We Do'}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-primary-100">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <FiUsers className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 hindi-text">
                    {language === 'hindi' ? 'महिला समूह बनाना' : 'Forming Women Groups'}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    {language === 'hindi' 
                      ? 'हम महिलाओं को स्वयं सहायता समूह (महिला समूह) बनाने में पूर्ण सहायता प्रदान करते हैं। समूह बनाने से लेकर पंजीकरण और प्रबंधन तक, हम हर कदम पर मार्गदर्शन करते हैं।'
                      : 'We provide complete assistance to women in forming self-help groups (mahila samooh). From group formation to registration and management, we guide at every step.'}
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>{language === 'hindi' ? 'समूह गठन में मार्गदर्शन' : 'Guidance in group formation'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>{language === 'hindi' ? 'पंजीकरण सहायता' : 'Registration assistance'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>{language === 'hindi' ? 'समूह प्रबंधन प्रशिक्षण' : 'Group management training'}</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-green-100">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <FiTarget className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 hindi-text">
                    {language === 'hindi' ? 'वित्तीय सेवाएं' : 'Financial Services'}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    {language === 'hindi' 
                      ? 'हम महिला समूहों को बचत योजना, ऋण योजना, व्यक्तिगत ऋण, व्यावसायिक ऋण, और समूह ऋण जैसी विभिन्न वित्तीय सेवाएं प्रदान करते हैं।'
                      : 'We provide various financial services to women\'s groups including savings schemes, loan schemes, personal loans, business loans, and group loans.'}
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>{language === 'hindi' ? 'बचत और ऋण योजनाएं' : 'Savings and loan schemes'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>{language === 'hindi' ? 'कम ब्याज दर पर ऋण' : 'Loans at low interest rates'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>{language === 'hindi' ? 'वित्तीय साक्षरता प्रशिक्षण' : 'Financial literacy training'}</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-blue-100">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <FiAward className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 hindi-text">
                    {language === 'hindi' ? 'प्रशिक्षण और कौशल विकास' : 'Training & Skill Development'}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    {language === 'hindi' 
                      ? 'हम महिलाओं को सिलाई, लघु उद्योग, पशुपालन, और अन्य कौशलों में प्रशिक्षण प्रदान करते हैं ताकि वे आत्मनिर्भर बन सकें।'
                      : 'We provide training to women in sewing, small industries, livestock rearing, and other skills so they can become self-reliant.'}
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>{language === 'hindi' ? 'सिलाई और कढ़ाई प्रशिक्षण' : 'Sewing and embroidery training'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>{language === 'hindi' ? 'लघु उद्योग प्रशिक्षण' : 'Small industry training'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>{language === 'hindi' ? 'पशुपालन प्रशिक्षण' : 'Livestock rearing training'}</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-purple-100">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <FiShield className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 hindi-text">
                    {language === 'hindi' ? 'सरकारी योजनाओं तक पहुंच' : 'Access to Government Schemes'}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    {language === 'hindi' 
                      ? 'हम महिला समूहों को भारत सरकार की विभिन्न महिला सशक्तिकरण योजनाओं तक पहुंच प्रदान करते हैं और उन्हें इन योजनाओं का लाभ उठाने में मदद करते हैं।'
                      : 'We provide women\'s groups access to various Government of India women empowerment schemes and help them avail benefits from these schemes.'}
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>{language === 'hindi' ? 'योजना जानकारी प्रदान करना' : 'Providing scheme information'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>{language === 'hindi' ? 'आवेदन में सहायता' : 'Assistance in applications'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>{language === 'hindi' ? 'सरकारी सहयोग' : 'Government partnership'}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Final Image Section */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/website%20data/foundation3.png"
                alt="Foundation Activities"
                className="w-full h-96 object-cover"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white text-lg text-center font-medium">
                  {language === 'hindi' ? 'हमारे कार्यक्रमों की झलक' : 'A glimpse of our programs'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;

