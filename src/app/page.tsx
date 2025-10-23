'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaDownload, FaGraduationCap, FaCertificate, FaBriefcase } from 'react-icons/fa';
import ContactForm from '@/components/ContactForm';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent"
            >
              Jabez Livingstone
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all duration-300 hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600 font-semibold' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home" className="pt-20">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <About />
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-50">
          <Experience />
        </section>

        {/* Education Section */}
        <section id="education" className="py-20">
          <Education />
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 bg-gray-50">
          <Certifications />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600">
          <ContactForm />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a 
              href="https://www.linkedin.com/in/jabez-livingstone-7797a297/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://www.instagram.com/jabez_livingstone/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
          </div>
          <p className="text-gray-400">
            © 2025 Jabez Livingstone. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
