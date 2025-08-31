import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  color: string;
}

const ColorBox: React.FC<Props> = ({ color }) => {
  return (
    <motion.div 
      className="w-36 h-36 rounded-2xl border-2 border-white shadow-card relative overflow-hidden"
      style={{ backgroundColor: color }}
      whileHover={{ 
        scale: 1.05, 
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' 
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-white via-transparent to-transparent opacity-20"></div>
    </motion.div>
  );
};

export default ColorBox;