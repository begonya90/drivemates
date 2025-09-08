import React, { useEffect, useRef, useState } from 'react';
import testimonials from './testimonials';
import TestimonialSlider from './TestimonialSlider';

const Services = () => {
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

  const services = [
    {
      title: 'Luxury Car Transport',
      description: 'Specialized transportation for high-end vehicles with enclosed carriers and white-glove service.'
    },
    {
      title: 'International Shipping',
      description: 'Global logistics solutions with customs expertise and door-to-door delivery.'
    },
    {
      title: 'Time-Sensitive Delivery',
      description: 'Express services for urgent shipments with real-time tracking and guaranteed delivery windows.'
    },
    {
      title: 'Specialized Handling',
      description: 'Careful packaging and transport for fragile, valuable, or unique items.'
    }
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      style={{ 
        padding: '80px 20px', 
        backgroundColor: '#fff',
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
          Our Services
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '30px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s'
        }}>
          {services.map((service, index) => (
            <div 
              key={index} 
              style={{ 
                padding: '30px', 
                border: '1px solid #e0e0e0', 
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `transform 0.3s ease, opacity 0.8s ease-out ${0.6 + index * 0.1}s, transform 0.8s ease-out ${0.6 + index * 0.1}s`
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              <h3 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '15px', 
                color: '#333',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
                transition: `opacity 0.5s ease-out ${0.8 + index * 0.1}s, transform 0.5s ease-out ${0.8 + index * 0.1}s`
              }}>
                {service.title}
              </h3>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.6', 
                color: '#666',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
                transition: `opacity 0.5s ease-out ${1.0 + index * 0.1}s, transform 0.5s ease-out ${1.0 + index * 0.1}s`
              }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Testimonials Section */}
        <div style={{ 
          marginTop: '80px',
          padding: '60px 20px',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px'
        }}>
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '2rem', 
            marginBottom: '40px', 
            color: '#333'
          }}>
            What Our Clients Say
          </h2>
          <TestimonialSlider testimonials={testimonials} autoRotate={true} duration={5} />
        </div>
      </div>
    </section>
  );
};

export default Services;