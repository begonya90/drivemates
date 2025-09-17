import React, { useEffect, useRef, useState } from 'react';
import testimonials from './testimonials';
import TestimonialSlider from './TestimonialSlider';

const UnifiedContentSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [zoomedCard, setZoomedCard] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Track window width
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

  // About Us data
  const aboutContent = {
    title: "About Us",
    description1: "Drivemates Logistics is a premier luxury transportation service dedicated to providing exceptional experiences for our discerning clients. With years of experience in the logistics industry, we've built a reputation for reliability, professionalism, and attention to detail.",
    description2: "Our team of expert drivers and logistics professionals are committed to ensuring that your valuable cargo arrives safely and on time, every time. We understand that luxury goods require special care and handling, which is why we've developed specialized processes and training for our team."
  };

  // FAQ data
  const faqs = [
    {
      id: '1',
      question: 'How do you ensure the safety of luxury items during transport?',
      answer: 'We use specialized packaging materials, climate-controlled vehicles, and our drivers receive special training for handling luxury items. All shipments are fully insured and tracked in real-time.',
      category: 'general'
    },
    {
      id: '2',
      question: 'What is your delivery time frame?',
      answer: 'Delivery times depend on distance and service level. Local deliveries typically take 1-2 days, while international shipments can take 5-10 business days. Express options are available for urgent deliveries.',
      category: 'general'
    },
    {
      id: '3',
      question: 'Do you offer international shipping?',
      answer: 'Yes, we provide international shipping services to over 50 countries with full customs clearance support and door-to-door delivery.',
      category: 'technical'
    },
    {
      id: '4',
      question: 'How can I track my shipment?',
      answer: 'Once your shipment is in transit, you will receive a tracking number and access to our online tracking portal where you can monitor your shipment in real-time.',
      category: 'technical'
    },
    {
      id: '5',
      question: 'What are your insurance policies?',
      answer: 'All shipments are covered by our comprehensive insurance policy up to $100,000. Additional coverage can be purchased for high-value items.',
      category: 'support'
    }
  ];

  // Services data
  const services = [
    {
      id: 1,
      title: 'Luxury Car Transport',
      description: 'Specialized transportation for high-end vehicles with enclosed carriers and white-glove service.',
      label: 'Premium',
      image: 'https://images.unsplash.com/photo-1575368257485-18af28d74445?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      longDescription: 'Our luxury car transport service ensures your high-end vehicles arrive in pristine condition. We use fully enclosed carriers with climate control systems to protect your investment. Each vehicle is carefully secured with soft straps and protective padding. Our white-glove service includes detailed inspection before and after transport, with photo documentation provided. We specialize in exotic cars, classic automobiles, and luxury sedans.',
      features: ['Enclosed climate-controlled carriers', 'Soft strap securing systems', 'Pre/post transport inspection', 'Photo documentation', 'Door-to-door service']
    },
    {
      id: 2,
      title: 'International Shipping',
      description: 'Global logistics solutions with customs expertise and door-to-door delivery.',
      label: 'Worldwide',
      image: 'https://images.unsplash.com/photo-1573507800852-769486d4c7bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      longDescription: 'Our international shipping service covers over 50 countries with comprehensive logistics solutions. We handle all customs documentation and clearance procedures to ensure smooth delivery. Our team of experts navigate international regulations and requirements to minimize delays. We provide real-time tracking and dedicated account management for all international shipments. Our partnerships with global carriers ensure competitive rates and reliable delivery.',
      features: ['Customs documentation & clearance', 'Real-time tracking', 'Dedicated account management', 'Global carrier partnerships', 'Door-to-door delivery']
    },
    {
      id: 3,
      title: 'Time-Sensitive Delivery',
      description: 'Express services for urgent shipments with real-time tracking and guaranteed delivery windows.',
      label: 'Fast',
      image: 'https://images.unsplash.com/photo-1586528540033-e7c3252e3b92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      longDescription: 'When time matters, our express delivery service ensures your cargo arrives on schedule. We offer guaranteed delivery windows with real-time tracking so you always know where your shipment is. Our dedicated fleet and priority handling ensure your time-sensitive items receive immediate attention. We provide 24/7 monitoring and proactive communication for critical shipments. Emergency same-day delivery options are available for urgent requirements.',
      features: ['Guaranteed delivery windows', 'Real-time tracking', 'Priority handling', '24/7 monitoring', 'Same-day delivery options']
    },
    {
      id: 4,
      title: 'Specialized Handling',
      description: 'Careful packaging and transport for fragile, valuable, or unique items.',
      label: 'Careful',
      image: 'https://images.unsplash.com/photo-1581578021424-ebdc4d27e140?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      longDescription: 'Our specialized handling service is designed for fragile, valuable, or unique items that require extra care. Our team is trained in handling artwork, antiques, electronics, and other delicate items. We use premium packaging materials and custom crates when necessary. Each shipment receives individual attention with a tailored approach based on the item\'s specific needs. We offer white-glove delivery with setup and removal services for large items.',
      features: ['Custom packaging solutions', 'Trained handling specialists', 'Premium materials', 'Custom crate construction', 'White-glove delivery']
    },
    {
      id: 5,
      title: 'Climate Control',
      description: 'Temperature-controlled environments for sensitive cargo and perishables.',
      label: 'Controlled',
      image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      longDescription: 'Our climate-controlled transport solutions maintain precise temperature and humidity levels for sensitive cargo. Perfect for pharmaceuticals, artwork, wine, and perishable goods. Our vehicles are equipped with advanced HVAC systems that can maintain temperatures from -20°F to 80°F. Real-time monitoring ensures consistent conditions throughout transit. We provide detailed temperature logs and compliance documentation for regulated shipments.',
      features: ['Precise temperature control (-20°F to 80°F)', 'Humidity regulation', 'Real-time monitoring', 'Temperature logging', 'Compliance documentation']
    },
    {
      id: 6,
      title: 'Insurance Coverage',
      description: 'Comprehensive insurance policies up to $100,000 for complete peace of mind.',
      label: 'Secure',
      image: 'https://images.unsplash.com/photo-1591796517182-66508697b620?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      longDescription: 'We offer comprehensive insurance coverage for all shipments with standard coverage up to $100,000. Additional coverage can be purchased for high-value items. Our policies cover damage, theft, and loss during transport. Claims are processed quickly with dedicated support to minimize disruption. We work with leading insurance providers to offer competitive rates and comprehensive protection. All policies include 24/7 claims support and rapid response for emergency situations.',
      features: ['Standard $100,000 coverage', 'Additional coverage options', '24/7 claims support', 'Rapid response service', 'Competitive rates']
    }
  ];

  // Contact data
  const contactInfo = {
    address: {
      title: "Address",
      content: "123 Luxury Avenue\nBeverly Hills, CA 90210\nUnited States"
    },
    phone: {
      title: "Phone",
      content: "+1 (555) 123-4567"
    },
    email: {
      title: "Email",
      content: "info@drivemates.com"
    }
  };

  const [openFaqId, setOpenFaqId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleCardClick = (service) => {
    setZoomedCard(service);
    // Small delay to ensure state is set before showing
    setTimeout(() => {
      setIsModalVisible(true);
    }, 10);
  };

  const closeZoomedCard = () => {
    setIsModalVisible(false);
    // Delay resetting zoomedCard to allow for exit animation
    setTimeout(() => {
      setZoomedCard(null);
    }, 300);
  };

  // Get responsive dimensions
  const getModalDimensions = () => {
    const isMobile = windowWidth <= 768;
    return {
      width: isMobile ? '95vw' : '800px',
      maxWidth: isMobile ? '95vw' : '90vw',
      maxHeight: isMobile ? '95vh' : '90vh',
      padding: isMobile ? '15px' : '30px'
    };
  };

  const modalDimensions = getModalDimensions();

  return (
    <div 
      ref={sectionRef}
      style={{ 
        position: 'relative', 
        zIndex: 1, 
        marginTop: '100vh',
        paddingTop: '80px'
      }}
    >
      {/* Content Sections */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        padding: '40px 20px'
      }}>
        {/* Home Section (Hero reference) */}
        <div id="home" style={{ height: '1px', position: 'absolute', top: '0' }}></div>
        
        {/* About Us Section */}
        <div 
          id="about"
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            marginBottom: '100px',
            padding: '40px 20px',
            backgroundColor: '#ffffff',
            borderRadius: '16px'
          }}
        >
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: windowWidth <= 768 ? '2rem' : '2.5rem', 
            marginBottom: '40px', 
            color: '#333333'
          }}>
            About Us
          </h2>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '40px', 
            alignItems: 'center'
          }}>
            <div style={{ flex: 1, minWidth: windowWidth <= 768 ? '100%' : '300px' }}>
              <p style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.6', 
                color: '#333',
                marginBottom: '20px'
              }}>
                {aboutContent.description1}
              </p>
              <p style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.6', 
                color: '#333'
              }}>
                {aboutContent.description2}
              </p>
            </div>
            <div style={{ 
              flex: 1, 
              minWidth: '300px'
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

        {/* Services Section */}
        <div 
          id="services"
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            transitionDelay: '0.2s',
            marginBottom: '100px',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '20px'
          }}
        >
          <style>
            {`
              .service-card {
                padding: 0;
                border: 2px solid #333333;
                border-radius: 12px;
                background-color: white;
                box-shadow: 0 8px 25px rgba(51, 51, 51, 0.15);
                position: relative;
                overflow: hidden;
                cursor: pointer;
                transform: translateY(0);
                transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
              }
              
              .service-card:hover {
                transform: translateY(-10px);
                box-shadow: 0 15px 35px rgba(51, 51, 51, 0.25);
              }
              
              .service-card-image {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            `}
          </style>
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: windowWidth <= 768 ? '2rem' : '2.5rem', 
            marginBottom: '40px', 
            color: '#333333'
          }}>
            Our Services
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: windowWidth <= 768 ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: windowWidth <= 768 ? '20px' : '30px',
            padding: windowWidth <= 768 ? '10px' : '20px'
          }}>
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="service-card"
                onClick={() => handleCardClick(service)}
                role="button"
                tabIndex="0"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(service);
                  }
                }}
                aria-label={`View details for ${service.title} service`}
              >
                <div style={{
                  position: 'absolute',
                  top: windowWidth <= 768 ? '10px' : '20px',
                  right: windowWidth <= 768 ? '10px' : '20px',
                  backgroundColor: '#2141b1',
                  color: '#d9e0f8',
                  padding: windowWidth <= 768 ? '3px 10px' : '5px 15px',
                  borderRadius: '20px',
                  fontSize: windowWidth <= 768 ? '0.7rem' : '0.8rem',
                  fontWeight: '600',
                  zIndex: '2'
                }}>
                  {service.label}
                </div>
                <div style={{
                  height: windowWidth <= 768 ? '150px' : '180px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="service-card-image"
                    loading="lazy"
                  />
                </div>
                <div style={{ padding: windowWidth <= 768 ? '15px' : '30px' }}>
                  <h3 style={{ 
                    fontSize: windowWidth <= 768 ? '1.2rem' : '1.5rem', 
                    marginBottom: '15px', 
                    color: '#333',
                    marginTop: '0'
                  }}>
                    {service.title}
                  </h3>
                  <p style={{ 
                    fontSize: windowWidth <= 768 ? '0.9rem' : '1rem', 
                    lineHeight: '1.6', 
                    color: '#666'
                  }}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonials Section */}
        <div style={{ 
          marginTop: '80px',
          marginBottom: '100px',
          padding: '60px 20px',
          backgroundColor: '#ffffff',
          borderRadius: '16px'
        }}>
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: windowWidth <= 768 ? '2rem' : '2.5rem', 
            marginBottom: '40px', 
            color: '#333333'
          }}>
            What Our Clients Say
          </h2>
          <TestimonialSlider testimonials={testimonials} autoRotate={true} duration={5} />
        </div>

        {/* FAQ Section */}
        <div 
          id="faq"
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            transitionDelay: '0.4s',
            marginBottom: '100px',
            padding: '40px 20px',
            backgroundColor: '#ffffff',
            borderRadius: '16px'
          }}
        >
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: windowWidth <= 768 ? '2rem' : '2.5rem', 
            marginBottom: '40px', 
            color: '#333333'
          }}>
            Frequently Asked Questions
          </h2>
          
          <div style={{ 
            maxWidth: '800px', 
            margin: '0 auto'
          }}>
            {faqs.map((faq, index) => (
              <div 
                key={faq.id} 
                style={{ 
                  marginBottom: '20px', 
                  border: '1px solid #e0e0e0', 
                  borderRadius: '8px',
                  overflow: 'hidden',
                  backgroundColor: '#fff',
                  transition: 'all 0.5s ease'
                }}
                role="region"
                aria-expanded={openFaqId === faq.id}
                aria-labelledby={`faq-question-${faq.id}`}
              >
                <div 
                  style={{ 
                    padding: '20px', 
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                  onClick={() => toggleFaq(faq.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleFaq(faq.id);
                    }
                  }}
                  tabIndex="0"
                  id={`faq-question-${faq.id}`}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <h3 style={{ 
                    fontSize: windowWidth <= 768 ? '1rem' : '1.2rem', 
                    color: '#333', 
                    margin: 0,
                    flex: 1,
                    textAlign: 'left'
                  }}>
                    {faq.question}
                  </h3>
                  <span style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold',
                    color: '#2141b1',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(33, 65, 177, 0.1)',
                    transition: 'transform 0.3s ease'
                  }}>
                    {openFaqId === faq.id ? '−' : '+'}
                  </span>
                </div>
                <div 
                  id={`faq-answer-${faq.id}`}
                  style={{ 
                    maxHeight: openFaqId === faq.id ? '1000px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.5s ease, opacity 0.3s ease',
                    opacity: openFaqId === faq.id ? 1 : 0
                  }}
                >
                  <div style={{ 
                    padding: '0 20px 20px'
                  }}>
                    <p style={{ 
                      fontSize: '1rem', 
                      lineHeight: '1.6', 
                      color: '#666'
                    }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div 
          id="contact"
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            transitionDelay: '0.6s',
            padding: '40px 20px',
            backgroundColor: '#ffffff',
            borderRadius: '16px'
          }}
        >
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '2.5rem', 
            marginBottom: '40px', 
            color: '#333333'
          }}>
            Contact Us
          </h2>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '40px'
          }}>
            <div style={{ 
              flex: 1, 
              minWidth: windowWidth <= 768 ? '100%' : '300px'
            }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '20px', 
                color: '#333'
              }}>
                Get in Touch
              </h3>
              <div style={{ 
                marginBottom: '20px'
              }}>
                <h4 style={{ 
                  fontSize: '1.2rem', 
                  color: '#333', 
                  marginBottom: '10px'
                }}>
                  {contactInfo.address.title}
                </h4>
                <p style={{ 
                  fontSize: '1rem', 
                  lineHeight: '1.6', 
                  color: '#666',
                  whiteSpace: 'pre-line'
                }}>
                  {contactInfo.address.content}
                </p>
              </div>
              <div style={{ 
                marginBottom: '20px'
              }}>
                <h4 style={{ 
                  fontSize: '1.2rem', 
                  color: '#333', 
                  marginBottom: '10px'
                }}>
                  {contactInfo.phone.title}
                </h4>
                <p style={{ 
                  fontSize: '1rem', 
                  lineHeight: '1.6', 
                  color: '#666'
                }}>
                  {contactInfo.phone.content}
                </p>
              </div>
              <div style={{ 
                marginBottom: '20px'
              }}>
                <h4 style={{ 
                  fontSize: '1.2rem', 
                  color: '#333', 
                  marginBottom: '10px'
                }}>
                  {contactInfo.email.title}
                </h4>
                <p style={{ 
                  fontSize: '1rem', 
                  lineHeight: '1.6', 
                  color: '#666'
                }}>
                  {contactInfo.email.content}
                </p>
              </div>
            </div>
            <div style={{ 
              flex: 1, 
              minWidth: windowWidth <= 768 ? '100%' : '300px'
            }}>
              <form onSubmit={handleFormSubmit} style={{ maxWidth: windowWidth <= 768 ? '100%' : '500px' }} noValidate>
                <div style={{ 
                  marginBottom: '20px'
                }}>
                  <label htmlFor="name" style={{ 
                    display: 'block', 
                    marginBottom: '5px', 
                    color: '#333'
                  }}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    style={{
                      width: '100%',
                      padding: windowWidth <= 768 ? '10px' : '12px',
                      border: '1px solid #e0e0e0',
                      borderRadius: '4px',
                      fontSize: windowWidth <= 768 ? '0.9rem' : '1rem'
                    }}
                    aria-describedby="name-error"
                  />
                  <div id="name-error" style={{ minHeight: '20px' }}></div>
                </div>
                <div style={{ 
                  marginBottom: '20px'
                }}>
                  <label htmlFor="email" style={{ 
                    display: 'block', 
                    marginBottom: '5px', 
                    color: '#333'
                  }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    style={{
                      width: '100%',
                      padding: windowWidth <= 768 ? '10px' : '12px',
                      border: '1px solid #e0e0e0',
                      borderRadius: '4px',
                      fontSize: windowWidth <= 768 ? '0.9rem' : '1rem'
                    }}
                    aria-describedby="email-error"
                  />
                  <div id="email-error" style={{ minHeight: '20px' }}></div>
                </div>
                <div style={{ 
                  marginBottom: '20px'
                }}>
                  <label htmlFor="message" style={{ 
                    display: 'block', 
                    marginBottom: '5px', 
                    color: '#333'
                  }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    rows="5"
                    style={{
                      width: '100%',
                      padding: windowWidth <= 768 ? '10px' : '12px',
                      border: '1px solid #e0e0e0',
                      borderRadius: '4px',
                      fontSize: windowWidth <= 768 ? '0.9rem' : '1rem',
                      resize: 'vertical'
                    }}
                    aria-describedby="message-error"
                  ></textarea>
                  <div id="message-error" style={{ minHeight: '20px' }}></div>
                </div>
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#2141b1',
                    color: '#d9e0f8',
                    padding: windowWidth <= 768 ? '10px 20px' : '12px 30px',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: windowWidth <= 768 ? '0.9rem' : '1rem',
                    cursor: 'pointer',
                    width: windowWidth <= 768 ? '100%' : 'auto'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#2d53d8'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#2141b1'}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Zoomed Card Modal */}
      {zoomedCard && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            opacity: isModalVisible ? 1 : 0,
            transition: 'opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
          onClick={closeZoomedCard}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div 
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              maxWidth: modalDimensions.maxWidth,
              maxHeight: modalDimensions.maxHeight,
              overflow: 'auto',
              position: 'relative',
              padding: modalDimensions.padding,
              width: modalDimensions.width,
              transform: isModalVisible ? 'scale(1)' : 'scale(0.95)',
              opacity: isModalVisible ? 1 : 0,
              transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              transitionDelay: isModalVisible ? '0.15s' : '0s'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeZoomedCard}
              onKeyDown={(e) => {
                if (e.key === 'Escape') {
                  closeZoomedCard();
                }
              }}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: '#2141b1',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                cursor: 'pointer',
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#2d53d8';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#2141b1';
                e.target.style.transform = 'scale(1)';
              }}
              aria-label="Close service details"
            >
              ×
            </button>
            <div style={{ 
              height: windowWidth <= 768 ? '200px' : '300px', // Responsive image height
              overflow: 'hidden',
              borderRadius: '8px',
              marginBottom: '20px'
            }}>
              <img 
                src={zoomedCard.image} 
                alt={zoomedCard.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                loading="lazy"
              />
            </div>
            <div style={{
              position: 'absolute',
              top: '30px',
              right: windowWidth <= 768 ? '45px' : '60px', // Responsive positioning
              backgroundColor: '#2141b1',
              color: '#d9e0f8',
              padding: windowWidth <= 768 ? '3px 10px' : '5px 15px', // Responsive padding
              borderRadius: '20px',
              fontSize: windowWidth <= 768 ? '0.7rem' : '0.8rem', // Responsive font size
              fontWeight: '600'
            }}>
              {zoomedCard.label}
            </div>
            <h2 id="modal-title" style={{ 
              fontSize: windowWidth <= 768 ? '1.5rem' : '2rem', // Responsive font size
              marginBottom: '15px', 
              color: '#333',
              marginTop: '0'
            }}>
              {zoomedCard.title}
            </h2>
            <p style={{ 
              fontSize: windowWidth <= 768 ? '1rem' : '1.1rem', // Responsive font size
              lineHeight: '1.6', 
              color: '#666',
              marginBottom: '20px'
            }}>
              {zoomedCard.longDescription}
            </p>
            <h3 style={{ 
              fontSize: windowWidth <= 768 ? '1.1rem' : '1.3rem', // Responsive font size
              marginBottom: '15px', 
              color: '#333'
            }}>
              Key Features
            </h3>
            <ul style={{ 
              listStyleType: 'none', 
              padding: 0,
              paddingLeft: '20px'
            }}>
              {zoomedCard.features.map((feature, index) => (
                <li 
                  key={index} 
                  style={{ 
                    marginBottom: '10px', 
                    position: 'relative',
                    paddingLeft: '25px',
                    fontSize: windowWidth <= 768 ? '0.9rem' : '1rem' // Responsive font size
                  }}
                >
                  <span style={{
                    position: 'absolute',
                    left: '0',
                    color: '#2141b1',
                    fontWeight: 'bold',
                    fontSize: '18px'
                  }}>
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default UnifiedContentSection;