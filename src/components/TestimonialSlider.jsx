import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialSlider = ({ testimonials = [], autoRotate = true, duration = 5 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autorotate, setAutorotate] = useState(autoRotate);
  const intervalRef = useRef(null);

  // Function to go to next testimonial
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setAutorotate(false);
  };

  // Function to go to previous testimonial
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      (prevIndex - 1 + testimonials.length) % testimonials.length
    );
    setAutorotate(false);
  };

  // Function to set specific testimonial
  const goToTestimonial = (index) => {
    setActiveIndex(index);
    setAutorotate(false);
  };

  // Auto-rotation effect
  useEffect(() => {
    if (autorotate && testimonials.length > 0) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, duration * 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autorotate, testimonials.length, duration]);

  // Reset autorotate when manually changed
  useEffect(() => {
    if (!autorotate && autoRotate) {
      const timer = setTimeout(() => {
        setAutorotate(true);
      }, duration * 1000);
      return () => clearTimeout(timer);
    }
  }, [autorotate, autoRotate, duration]);

  if (!testimonials.length) return null;

  const activeTestimonial = testimonials[activeIndex];

  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }} role="region" aria-label="Testimonial slider">
      {/* Testimonial image */}`
      <div style={{ position: 'relative', height: '128px' }}>
        <div 
          style={{ 
            position: 'absolute', 
            left: '50%', 
            top: '0', 
            width: '480px', 
            height: '480px', 
            transform: 'translateX(-50%)',
            pointerEvents: 'none'
          }}
        >
          <div 
            style={{ height: '128px' }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, rotate: -60 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 60 }}
                transition={{ duration: 0.7, ease: [0.68, -0.3, 0.32, 1] }}
                style={{ 
                  position: 'absolute', 
                  inset: '0', 
                  zIndex: '-10', 
                  display: 'flex', 
                  flexDirection: 'column',
                  height: '100%'
                }}
              >
                <img
                  src={activeTestimonial.img}
                  width="60"
                  height="60"
                  alt={activeTestimonial.name}
                  style={{ 
                    position: 'relative', 
                    left: '50%', 
                    top: '44px', 
                    transform: 'translateX(-50%)',
                    borderRadius: '50%'
                  }}
                  loading="lazy"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Text */}
      <div style={{ marginBottom: '32px', transition: 'all 300ms ease-in-out 150ms' }}>
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ 
                duration: 0.5, 
                ease: "easeInOut",
                delay: 0.2
              }}
              style={{ width: '100%' }}
            >
              <div 
                style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold', 
                  color: '#333333',
                  position: 'relative'
                }}
              >
                "{activeTestimonial.quote}"
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div 
        style={{ 
          marginTop: '16px', 
          display: 'flex', 
          width: '100%', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          gap: '16px',
          paddingTop: '48px'
        }}
      >
        <button
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
          style={{
            display: 'flex',
            width: '28px',
            height: '28px',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            backgroundColor: '#f3f4f6',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ 
              width: '20px', 
              height: '20px', 
              color: '#2141b1',
              transition: 'transform 300ms'
            }}
            aria-hidden="true"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
        </button>

        {/* Name and Org */}
        <div 
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}
        >
          <span 
            style={{ fontSize: '16px', fontStyle: 'italic', color: '#333333' }}
          >
            {activeTestimonial.name}
          </span>
          <span 
            style={{ fontSize: '14px', fontStyle: 'italic', color: '#555555' }}
          >
            {activeTestimonial.role}
          </span>
        </div>

        <button
          onClick={nextTestimonial}
          aria-label="Next testimonial"
          style={{
            display: 'flex',
            width: '28px',
            height: '28px',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            backgroundColor: '#f3f4f6',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ 
              width: '20px', 
              height: '20px', 
              color: '#2141b1',
              transition: 'transform 300ms'
            }}
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots indicator */}
      <div 
        style={{ display: 'flex', justifyContent: 'center', marginTop: '24px', gap: '8px' }}
      >
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            aria-label={`Go to testimonial ${index + 1}`}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              transition: 'background-color 200ms',
              backgroundColor: index === activeIndex ? '#333333' : '#d4d4d8',
              border: 'none',
              cursor: 'pointer'
            }}
            aria-current={index === activeIndex ? 'true' : 'false'}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;