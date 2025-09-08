import React, { useEffect, useRef, useState } from 'react';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      style={{ 
        padding: '80px 20px', 
        backgroundColor: '#f8f9fa',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ 
          textAlign: 'center', 
          fontSize: '2.5rem', 
          marginBottom: '40px', 
          color: '#333',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
          transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s'
        }}>
          About Us
        </h2>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '40px', 
          alignItems: 'center',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s'
        }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <p style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.6', 
              color: '#555',
              marginBottom: '20px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s'
            }}>
              Drivemates Logistics is a premier luxury transportation service dedicated to providing 
              exceptional experiences for our discerning clients. With years of experience in the 
              logistics industry, we've built a reputation for reliability, professionalism, and 
              attention to detail.
            </p>
            <p style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.6', 
              color: '#555',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'opacity 0.8s ease-out 0.8s, transform 0.8s ease-out 0.8s'
            }}>
              Our team of expert drivers and logistics professionals are committed to ensuring that 
              your valuable cargo arrives safely and on time, every time. We understand that luxury 
              goods require special care and handling, which is why we've developed specialized 
              processes and training for our team.
            </p>
          </div>
          <div style={{ 
            flex: 1, 
            minWidth: '300px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s'
          }}>
            <div style={{ 
              backgroundColor: '#e9ecef', 
              height: '300px', 
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#6c757d'
            }}>
              About Us Image
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;