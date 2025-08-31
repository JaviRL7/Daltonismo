import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedButton from '../components/AnimatedButton';

interface Props {
  onStartGame: () => void;
}

const StartScreen: React.FC<Props> = ({ onStartGame }) => {
  const { t } = useLanguage();
  
  return (
    <motion.div 
      className="flex flex-col items-center gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h1 
        className="text-3xl font-bold text-text-color"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t.startTitle}
      </motion.h1>
      <motion.p 
        className="text-xl font-bold text-center text-gray-700 max-w-2xl leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {t.startDescription}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <AnimatedButton onClick={onStartGame} size="lg">
          {t.startButton}
        </AnimatedButton>
      </motion.div>
    </motion.div>
  );
};

export default StartScreen;