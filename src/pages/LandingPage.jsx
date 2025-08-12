import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/sections/Hero';
import Mission from '../components/sections/Mission';
import HowItWorks from '../components/sections/HowItWorks';
import Features from '../components/sections/Features';
import Testimonials from '../components/sections/Testimonials';
import Values from '../components/sections/Values';
import Team from '../components/sections/Team';
import Contact from '../components/sections/Contact';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <HowItWorks />
        <Features />
        <Testimonials />
        <Values />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage; 