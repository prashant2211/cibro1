import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Health from './pages/Health';
import Safety from './pages/Safety';
import Development from './pages/Development';
import Empowerment from './pages/Empowerment';
import Contact from './pages/Contact';
import GroupForm from './pages/GroupForm';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/health" element={<Health />} />
              <Route path="/safety" element={<Safety />} />
              <Route path="/development" element={<Development />} />
              <Route path="/empowerment" element={<Empowerment />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/form" element={<GroupForm />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;

