'use client';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Industries from './components/Industries';
import TechShowcase from './components/TechShowcase';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      
      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const handleGetStarted = () => {
    scrollToSection('contact');
  };

  return (
    <>
      <Navbar 
        activeSection={activeSection} 
        scrollToSection={scrollToSection}
        onGetStarted={handleGetStarted}
      />
      <Hero onGetStarted={handleGetStarted} />
      <Industries />
      <TechShowcase />
      <CTA onGetStarted={handleGetStarted} />
      <Footer scrollToSection={scrollToSection} />
    </>
  );
}