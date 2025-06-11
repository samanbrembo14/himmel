import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import ProfileSection from './components/sections/ProfileSection';
import FactsSection from './components/sections/FactsSection';
import JourneySection from './components/sections/JourneySection';
import GallerySection from './components/sections/GallerySection';
import Footer from './components/layout/Footer';
import CustomCursor from './components/ui/CustomCursor';
import PageLoader from './components/ui/PageLoader';
import SectionDivider from './components/layout/SectionDivider';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Initialize smooth scrolling
  useSmoothScroll();
  
  useEffect(() => {
    // Simulasi waktu pemuatan halaman
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box>
      <PageLoader />
      <CustomCursor />
      <Navbar />
      <HeroSection />
      
      {/* Transition from Hero to Profile section */}
      <SectionDivider topColor="rgba(135, 206, 250, 0.8)" bottomColor="rgba(248, 249, 250, 0.9)" />
      <ProfileSection />
      
      {/* Transition from Profile to Facts section */}
      <SectionDivider topColor="rgba(248, 249, 250, 0.9)" bottomColor="rgba(255, 255, 255, 0.9)" />
      <FactsSection />
      
      {/* Transition from Facts to Journey section */}
      <SectionDivider topColor="rgba(255, 255, 255, 0.9)" bottomColor="rgba(255, 255, 255, 0.92)" />
      <JourneySection />
      
      {/* Transition from Journey to Gallery section */}
      <SectionDivider topColor="rgba(255, 255, 255, 0.92)" bottomColor="rgba(255, 255, 255, 0.85)" />
      <GallerySection />
      
      {/* Transition to Footer */}
      <SectionDivider topColor="rgba(255, 255, 255, 0.85)" bottomColor="rgba(26, 26, 46, 0.95)" />
      <Footer />
    </Box>
  );
}

export default App;