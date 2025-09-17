import React, { useState, useEffect } from 'react';
import heroImage from '../assets/pictures/herosection.png';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Trigger the animation after a short delay to ensure component is mounted
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    
    // Handle window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}
    >
      {/* Text content */}
      <div
        style={{
          textAlign: 'center',
          color: '#000000',
          zIndex: 10,
          width: '100%',
          maxWidth: '800px',
          padding: '0 20px',
          marginTop: '-400px' /* Move text higher */
        }}
      >
        <h1 className="hero-heading"
          style={{
            fontSize: windowWidth <= 768 ? 'clamp(2rem, 8vw, 3rem)' : 'clamp(3rem, 6vw, 5rem)', /* Responsive text size */
            fontWeight: '300',
            marginBottom: '1rem',
            textShadow: '0 2px 10px rgba(255, 255, 255, 0.5)'
          }}
        >
          <span 
            style={{
              display: 'inline-block',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '0.5s'
            }}
          >
            Drivemates
          </span>
          <span 
            style={{
              display: 'inline-block',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '0.7s',
              marginLeft: '0.3em'
            }}
          >
            Logistics
          </span>
        </h1>
        <p className="hero-subheading"
          style={{
            fontSize: windowWidth <= 768 ? 'clamp(1rem, 4vw, 1.5rem)' : 'clamp(1.5rem, 2.5vw, 2rem)', /* Responsive text size */
            fontWeight: '300',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '1s',
            textShadow: '0 1px 5px rgba(255, 255, 255, 0.5)'
          }}
        >
          <span 
            style={{
              display: 'inline-block',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '1.2s'
            }}
          >
            A
          </span>
          <span 
            style={{
              display: 'inline-block',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '1.4s',
              marginLeft: '0.3em'
            }}
          >
            new
          </span>
          <span 
            style={{
              display: 'inline-block',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '1.6s',
              marginLeft: '0.3em'
            }}
          >
            way
          </span>
          <span 
            style={{
              display: 'inline-block',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '1.8s',
              marginLeft: '0.3em'
            }}
          >
            of
          </span>
          <span 
            style={{
              display: 'inline-block',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '2s',
              marginLeft: '0.3em'
            }}
          >
            delivering
          </span>
          <span 
            style={{
              display: 'inline-block',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '2.2s',
              marginLeft: '0.3em'
            }}
          >
            your
          </span>
          <span 
            style={{
              display: 'inline-block',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '2.4s',
              marginLeft: '0.3em'
            }}
          >
            Luxury
          </span>
        </p>
        {/* Buttons */}
        <div 
          className="button-container"
          style={{
            textAlign: 'center',
            marginTop: '40px',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '2.8s'
          }}
        >
          <button 
            className="btn"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
              transitionDelay: '3s'
            }}
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                const navbarHeight = 80;
                const elementPosition = contactSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
          >
            Contact
          </button>
          <button 
            className="btn"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
              transitionDelay: '3.2s'
            }}
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                const navbarHeight = 80;
                const elementPosition = aboutSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
          >
            About Us
          </button>
        </div>
      </div>
      
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap');
        
        .hero-heading, .hero-subheading {
          font-family: 'Luxury Stylish', sans-serif;
        }
        
        .btn {
          width: windowWidth <= 768 ? '5em' : '6.5em';
          height: windowWidth <= 768 ? '2em' : '2.3em';
          margin: 0.5em;
          background: black;
          color: white;
          border: none;
          border-radius: 0.625em;
          font-size: windowWidth <= 768 ? '16px' : '20px';
          font-weight: bold;
          cursor: pointer;
          position: relative;
          z-index: 1;
          overflow: hidden;
          display: inline-block;
          vertical-align: top;
        }

        .btn:hover {
          color: black;
        }

        .btn:after {
          content: "";
          background: white;
          position: absolute;
          z-index: -1;
          left: -20%;
          right: -20%;
          top: 0;
          bottom: 0;
          transform: skewX(-45deg) scale(0, 1);
          transition: all 0.5s;
        }

        .btn:hover:after {
          transform: skewX(-45deg) scale(1, 1);
          -webkit-transition: all 0.5s;
          transition: all 0.5s;
        }
        
        .button-container {
          text-align: center;
          margin-top: 40px;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;