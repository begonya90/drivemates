import React, { useState, useEffect, useRef } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
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

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'How do you ensure the safety of luxury items during transport?',
      answer: 'We use specialized packaging materials, climate-controlled vehicles, and our drivers receive special training for handling luxury items. All shipments are fully insured and tracked in real-time.'
    },
    {
      question: 'What is your delivery time frame?',
      answer: 'Delivery times depend on distance and service level. Local deliveries typically take 1-2 days, while international shipments can take 5-10 business days. Express options are available for urgent deliveries.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we provide international shipping services to over 50 countries with full customs clearance support and door-to-door delivery.'
    },
    {
      question: 'How can I track my shipment?',
      answer: 'Once your shipment is in transit, you will receive a tracking number and access to our online tracking portal where you can monitor your shipment in real-time.'
    },
    {
      question: 'What are your insurance policies?',
      answer: 'All shipments are covered by our comprehensive insurance policy up to $100,000. Additional coverage can be purchased for high-value items.'
    }
  ];

  return (
    <section 
      id="faq" 
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
          Frequently Asked Questions
        </h2>
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s'
        }}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              style={{ 
                marginBottom: '20px', 
                border: '1px solid #e0e0e0', 
                borderRadius: '8px',
                overflow: 'hidden',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.8s ease-out ${0.6 + index * 0.1}s, transform 0.8s ease-out ${0.6 + index * 0.1}s`
              }}
            >
              <div 
                onClick={() => toggleFAQ(index)}
                style={{ 
                  padding: '20px', 
                  backgroundColor: '#fff',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <h3 style={{ 
                  fontSize: '1.2rem', 
                  color: '#333', 
                  margin: 0,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
                  transition: `opacity 0.5s ease-out ${0.8 + index * 0.1}s, transform 0.5s ease-out ${0.8 + index * 0.1}s`
                }}>
                  {faq.question}
                </h3>
                <span style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(10px)',
                  transition: `opacity 0.5s ease-out ${0.9 + index * 0.1}s, transform 0.5s ease-out ${0.9 + index * 0.1}s`
                }}>
                  {openIndex === index ? '-' : '+'}
                </span>
              </div>
              {openIndex === index && (
                <div style={{ 
                  padding: '0 20px 20px', 
                  backgroundColor: '#fff',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
                }}>
                  <p style={{ 
                    fontSize: '1rem', 
                    lineHeight: '1.6', 
                    color: '#666',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
                    transition: 'opacity 0.5s ease-out 0.2s, transform 0.5s ease-out 0.2s'
                  }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;