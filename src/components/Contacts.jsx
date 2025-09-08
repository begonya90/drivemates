import React, { useState, useEffect, useRef } from 'react';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section 
      id="contact" 
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
          Contact Us
        </h2>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '40px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s'
        }}>
          <div style={{ 
            flex: 1, 
            minWidth: '300px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
            transition: 'opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s'
          }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              marginBottom: '20px', 
              color: '#333',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.5s ease-out 0.7s, transform 0.5s ease-out 0.7s'
            }}>
              Get in Touch
            </h3>
            <div style={{ 
              marginBottom: '20px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.5s ease-out 0.8s, transform 0.5s ease-out 0.8s'
            }}>
              <h4 style={{ 
                fontSize: '1.2rem', 
                color: '#333', 
                marginBottom: '10px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
                transition: 'opacity 0.5s ease-out 0.9s, transform 0.5s ease-out 0.9s'
              }}>
                Address
              </h4>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.6', 
                color: '#666',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
                transition: 'opacity 0.5s ease-out 1.0s, transform 0.5s ease-out 1.0s'
              }}>
                123 Luxury Avenue<br />
                Beverly Hills, CA 90210<br />
                United States
              </p>
            </div>
            <div style={{ 
              marginBottom: '20px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.5s ease-out 1.1s, transform 0.5s ease-out 1.1s'
            }}>
              <h4 style={{ 
                fontSize: '1.2rem', 
                color: '#333', 
                marginBottom: '10px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
                transition: 'opacity 0.5s ease-out 1.2s, transform 0.5s ease-out 1.2s'
              }}>
                Phone
              </h4>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.6', 
                color: '#666',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
                transition: 'opacity 0.5s ease-out 1.3s, transform 0.5s ease-out 1.3s'
              }}>
                +1 (555) 123-4567
              </p>
            </div>
            <div style={{ 
              marginBottom: '20px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.5s ease-out 1.4s, transform 0.5s ease-out 1.4s'
            }}>
              <h4 style={{ 
                fontSize: '1.2rem', 
                color: '#333', 
                marginBottom: '10px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
                transition: 'opacity 0.5s ease-out 1.5s, transform 0.5s ease-out 1.5s'
              }}>
                Email
              </h4>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.6', 
                color: '#666',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
                transition: 'opacity 0.5s ease-out 1.6s, transform 0.5s ease-out 1.6s'
              }}>
                info@drivemates.com
              </p>
            </div>
          </div>
          <div style={{ 
            flex: 1, 
            minWidth: '300px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
            transition: 'opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s'
          }}>
            <form onSubmit={handleSubmit} style={{ maxWidth: '500px' }}>
              <div style={{ 
                marginBottom: '20px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                transition: 'opacity 0.5s ease-out 0.7s, transform 0.5s ease-out 0.7s'
              }}>
                <label htmlFor="name" style={{ 
                  display: 'block', 
                  marginBottom: '5px', 
                  color: '#333',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
                  transition: 'opacity 0.5s ease-out 0.8s, transform 0.5s ease-out 0.8s'
                }}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
                    transition: 'opacity 0.5s ease-out 0.9s, transform 0.5s ease-out 0.9s'
                  }}
                />
              </div>
              <div style={{ 
                marginBottom: '20px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                transition: 'opacity 0.5s ease-out 1.0s, transform 0.5s ease-out 1.0s'
              }}>
                <label htmlFor="email" style={{ 
                  display: 'block', 
                  marginBottom: '5px', 
                  color: '#333',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
                  transition: 'opacity 0.5s ease-out 1.1s, transform 0.5s ease-out 1.1s'
                }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
                    transition: 'opacity 0.5s ease-out 1.2s, transform 0.5s ease-out 1.2s'
                  }}
                />
              </div>
              <div style={{ 
                marginBottom: '20px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                transition: 'opacity 0.5s ease-out 1.3s, transform 0.5s ease-out 1.3s'
              }}>
                <label htmlFor="message" style={{ 
                  display: 'block', 
                  marginBottom: '5px', 
                  color: '#333',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
                  transition: 'opacity 0.5s ease-out 1.4s, transform 0.5s ease-out 1.4s'
                }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    resize: 'vertical',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
                    transition: 'opacity 0.5s ease-out 1.5s, transform 0.5s ease-out 1.5s'
                  }}
                ></textarea>
              </div>
              <button
                type="submit"
                style={{
                  backgroundColor: '#000',
                  color: 'white',
                  padding: '12px 30px',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'background-color 0.3s ease, opacity 0.5s ease-out 1.6s, transform 0.5s ease-out 1.6s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#333'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#000'}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;