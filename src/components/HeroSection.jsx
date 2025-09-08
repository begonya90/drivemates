import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../App.css';
import BlurText from './BlurText';
import NeonBorderButton from './NeonBorderButton';

const HeroSection = () => {
  const [buttonsVisible, setButtonsVisible] = useState(false);

  useEffect(() => {
    // Reveal buttons after a delay to sync with text animations
    const timer = setTimeout(() => {
      setButtonsVisible(true);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  const handleServicesClick = () => {
    // Scroll to services section
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactsClick = () => {
    // Scroll to contacts section
    const contactsSection = document.getElementById('contact');
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        zIndex: -1
      }}
    >
      <motion.img 
        src="/drivemates/ls.png" 
        alt="Hero background" 
        style={{ 
          width: 'auto',
          height: 'auto',
          position: 'absolute',
          top: '30%',
        }}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 1.2, 
          ease: "easeOut"
        }}
        className="hero-bg-image"
      />
      <div style={{
        position: 'absolute',
        top: '35%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        zIndex: 1,
        padding: '0 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{ 
          fontSize: 'clamp(1.5rem, 4vw, 5.5rem)',
          marginBottom: '20px'
        }}>
          <BlurText 
            text="Drivemates Logistics" 
            className="hero-text"
            direction="top"
            delay={200}
          />
        </div>
        <div style={{ 
          fontSize: 'clamp(1rem, 2vw, 2.5rem)',
          marginBottom: '30px'
        }}>
          <BlurText 
            text="a new way of delivering your Luxury" 
            className="hero-text"
            direction="top"
            delay={350}
          />
        </div>
        
        {/* Neon Border Buttons with smooth reveal and rich gold colors */}
        <motion.div
          style={{
            display: 'flex',
            gap: '40px',
            marginTop: '20px'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={buttonsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="buttons-container"
        >
          <NeonBorderButton 
            onClick={handleServicesClick}
            color1="#FFD700" 
            color2="#FFA500" 
            animationType="half"
            duration={3}
            style={{
              padding: '10px 20px',
              fontSize: '1rem',
              minWidth: '120px'
            }}
          >
            Services
          </NeonBorderButton>
          
          <NeonBorderButton 
            onClick={handleContactsClick}
            color1="#FFD700" 
            color2="#FF8C00" 
            animationType="half"
            duration={3}
            style={{
              padding: '10px 20px',
              fontSize: '1rem',
              minWidth: '120px'
            }}
          >
            Contacts
          </NeonBorderButton>
        </motion.div>
      </div>
      
      <style jsx>{`
        @media (max-width: 768px) {
          .hero-bg-image {
            top: 60% !important;
          }
          
          .buttons-container {
            gap: 20px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;