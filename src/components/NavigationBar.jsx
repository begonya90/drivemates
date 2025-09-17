import React, { useState, useEffect } from 'react';
import CircularText from './CircularText';

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      // Set to true when user scrolls down 50px or more
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavigation = (e, targetId) => {
    e.preventDefault();
    if (targetId === 'home') {
      // For home, scroll to top of page
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        // Calculate offset for fixed navbar
        const navbarHeight = windowWidth <= 768 ? 60 : 80; // Responsive navbar height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: windowWidth <= 768 ? '15px 20px' : '20px 40px', // Responsive padding
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 1000,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: isScrolled ? 'blur(10px)' : 'blur(5px)',
        transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease, padding 0.3s ease', // Added padding transition
        boxShadow: isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : '0 2px 5px rgba(0, 0, 0, 0.05)',
        boxSizing: 'border-box',
        maxWidth: '100vw',
        overflow: 'hidden'
      }}
    >
      {/* Logo */}
      <div style={{ width: windowWidth <= 768 ? '40px' : '60px', height: windowWidth <= 768 ? '40px' : '60px' }}>
        <CircularText 
          text="Drivemates Logistics LLC" 
          spinDuration={30}
          radius={windowWidth <= 768 ? 15 : 20}
          fontSize={windowWidth <= 768 ? "5px" : "6px"}
          className="text-black"
        />
      </div>
      
      {/* Menu Items */}
      <div 
        style={{
          display: 'flex',
          gap: windowWidth <= 768 ? '15px' : '30px' // Responsive gap
        }}
      >
        {[
          { name: 'Home', id: 'home' },
          { name: 'Services', id: 'services' },
          { name: 'About', id: 'about' },
          { name: 'FAQ', id: 'faq' },
          { name: 'Contact', id: 'contact' }
        ].map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleNavigation(e, item.id)}
            style={{
              color: '#000000',
              textDecoration: 'none',
              fontSize: windowWidth <= 768 ? '0.9rem' : '1.1rem', // Responsive font size
              fontWeight: '300',
              transition: 'color 0.3s ease',
              position: 'relative'
            }}
            onMouseEnter={(e) => e.target.style.color = '#333333'}
            onMouseLeave={(e) => e.target.style.color = '#000000'}
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavigationBar;