import { useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';

const CircularText = ({ 
  text, 
  spinDuration = 20, 
  onHover = 'speedUp', 
  className = '',
  radius = 80,
  fontSize = '12px'
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation = useMotionValue(0);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      transition: {
        rotate: {
          from: start,
          to: start + 360,
          ease: 'linear',
          duration: spinDuration,
          type: 'tween',
          repeat: Infinity
        }
      }
    });
  }, [spinDuration, controls, rotation]);

  const handleHoverStart = () => {
    const start = rotation.get();
    let duration = spinDuration;

    switch (onHover) {
      case 'slowDown':
        duration = spinDuration * 2;
        break;
      case 'speedUp':
        duration = spinDuration / 4;
        break;
      case 'pause':
        controls.stop();
        return;
      case 'goBonkers':
        duration = spinDuration / 20;
        break;
      default:
        duration = spinDuration;
    }

    controls.start({
      rotate: start + 360,
      transition: {
        rotate: {
          from: start,
          to: start + 360,
          ease: 'linear',
          duration,
          type: 'tween',
          repeat: Infinity
        }
      }
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      transition: {
        rotate: {
          from: start,
          to: start + 360,
          ease: 'linear',
          duration: spinDuration,
          type: 'tween',
          repeat: Infinity
        }
      }
    });
  };

  return (
    <div className={`relative ${className}`} style={{ width: radius * 2, height: radius * 2 }}>
      <motion.div
        className="w-full h-full relative"
        style={{ rotate: rotation }}
        animate={controls}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        {letters.map((letter, i) => {
          const angle = (i / letters.length) * Math.PI * 2;
          const x = Math.cos(angle - Math.PI / 2) * radius;
          const y = Math.sin(angle - Math.PI / 2) * radius;
          
          return (
            <span
              key={i}
              className="absolute inline-block"
              style={{
                fontSize,
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${angle}rad)`,
                transformOrigin: 'center center'
              }}
            >
              {letter}
            </span>
          );
        })}
      </motion.div>
    </div>
  );
};

export default CircularText;