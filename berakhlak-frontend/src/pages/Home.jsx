import { useState } from 'react';
import Navbar from '../components/dashboard/Navbar';
import HeroSection from '../components/dashboard/HeroSection';
import AboutSection from '../components/dashboard/AboutSection';
import FeaturesSection from '../components/dashboard/FeaturesSection';
import ContactSection from '../components/dashboard/ContactSection';
import Footer from '../components/dashboard/Footer';
import LoginModal from '../components/dashboard/LoginModal';

export default function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onLoginClick={() => setIsLoginOpen(true)} />
      <HeroSection onLoginClick={() => setIsLoginOpen(true)} />
      <AboutSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
}