import React from 'react';

const NeonBorderButton = ({ 
  children, 
  onClick, 
  color1 = "#0496ff", 
  color2 = "#ff0a54", 
  animationType = "half", 
  duration = 6,
  className = "",
  ...props 
}) => {
  const getWidth = (type) => {
    switch (type) {
      case "none": return 12;
      case "half": return 60;
      case "full": return 100;
      default: return 50;
    }
  };

  const animWidth = getWidth(animationType);
  const durationInSeconds = `${duration}s`;

  return (
    <button
      onClick={onClick}
      className={`neon-border-button ${className}`}
      style={{
        position: 'relative',
        display: 'inline-block',
        padding: '12px 24px',
        backgroundColor: 'transparent',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        color: 'white',
        fontSize: '1rem',
        fontWeight: '600',
        cursor: 'pointer',
        overflow: 'hidden',
        borderRadius: '8px',
        '--neon-border-duration': durationInSeconds,
        ...props.style
      }}
    >
      {/* First neon border effect */}
      <div
        className="neon-border-one"
        style={{
          position: 'absolute',
          top: '-2px',
          left: '-2px',
          right: '-2px',
          bottom: '-2px',
          borderRadius: '8px',
          zIndex: '-1',
          pointerEvents: 'none',
          overflow: 'hidden'
        }}
      >
        <div
          className="neon-border-one-before"
          style={{
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            width: `${animWidth}%`,
            height: '10%',
            background: `linear-gradient(135deg, ${color1}, ${color1}, transparent, transparent)`,
            animation: animationType !== "none" ? `neon-border-animation ${durationInSeconds} linear infinite` : 'none',
            filter: `blur(1px) drop-shadow(0 0 8px ${color1})`
          }}
        ></div>
      </div>
      
      {/* Second neon border effect */}
      <div
        className="neon-border-two"
        style={{
          position: 'absolute',
          top: '-2px',
          left: '-2px',
          right: '-2px',
          bottom: '-2px',
          borderRadius: '8px',
          zIndex: '-1',
          pointerEvents: 'none',
          overflow: 'hidden'
        }}
      >
        <div
          className="neon-border-two-before"
          style={{
            content: '""',
            position: 'absolute',
            bottom: '0',
            right: '0',
            width: `${animWidth}%`,
            height: '10%',
            background: `linear-gradient(135deg, transparent, transparent, ${color2}, ${color2})`,
            animation: animationType !== "none" ? `neon-border-animation-reverse ${durationInSeconds} linear infinite` : 'none',
            filter: `blur(1px) drop-shadow(0 0 8px ${color2})`
          }}
        ></div>
      </div>
      
      <span style={{ position: 'relative', zIndex: '1' }}>{children}</span>
      
      <style jsx>{`
        @keyframes neon-border-animation {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        
        @keyframes neon-border-animation-reverse {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-200%); }
        }
      `}</style>
    </button>
  );
};

export default NeonBorderButton;