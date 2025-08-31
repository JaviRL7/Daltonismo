import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 80 + 20,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  const colors = [
    'rgba(255, 107, 107, 0.1)', // Light red
    'rgba(78, 205, 196, 0.1)',  // Light teal
    'rgba(255, 195, 113, 0.1)', // Light orange
    'rgba(162, 155, 254, 0.1)', // Light purple
    'rgba(255, 158, 128, 0.1)', // Light peach
    'rgba(99, 205, 218, 0.1)',  // Light cyan
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full blur-sm"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: colors[particle.id % colors.length],
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,182,193,0.1) 0%, rgba(255,182,193,0.05) 50%, transparent 100%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(173,216,230,0.1) 0%, rgba(173,216,230,0.05) 50%, transparent 100%)',
        }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-3/4 left-1/2 w-64 h-64 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(221,160,221,0.1) 0%, rgba(221,160,221,0.05) 50%, transparent 100%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;