import React, { useEffect, useState } from 'react';
import { motion, animate } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface IdentifyResultsScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const IdentifyResultsScreen: React.FC<IdentifyResultsScreenProps> = ({ score, totalQuestions, onRestart }) => {
  const { t, language } = useLanguage();
  const percentage = Math.round((score / totalQuestions) * 100);
  const [displayScore, setDisplayScore] = useState(0);
  const [displayTotal, setDisplayTotal] = useState(0);
  const [displayPercentage, setDisplayPercentage] = useState(0);
  
  useEffect(() => {
    // Animate total first
    animate(0, totalQuestions, {
      duration: 0.5,
      onUpdate: (value) => setDisplayTotal(Math.floor(value))
    });
    
    // Then animate score with delay
    setTimeout(() => {
      animate(0, score, {
        duration: 1.5,
        onUpdate: (value) => setDisplayScore(Math.floor(value))
      });
      
      animate(0, percentage, {
        duration: 1.5,
        onUpdate: (value) => setDisplayPercentage(Math.floor(value))
      });
    }, 600);
  }, [score, totalQuestions, percentage]);
  
  return (
    <motion.div 
      className="flex flex-col items-center gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 
        className="text-2xl font-bold text-text-color"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {language === 'es' ? 'Resultados del Modo Identificar' : 'Identify Mode Results'}
      </motion.h2>
      
      <motion.div 
        className="w-32 h-32 rounded-full bg-button-bg flex justify-center items-center shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
      >
        <div className="text-center text-white">
          <div className="text-2xl font-bold">{displayPercentage}%</div>
          <div className="text-sm">{displayScore}/{displayTotal}</div>
        </div>
      </motion.div>
      
      <motion.p 
        className="text-lg text-center text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {language === 'es' ? 
          `¡Has identificado correctamente ${displayScore} de ${displayTotal} colores!` :
          `You correctly identified ${displayScore} out of ${displayTotal} colors!`
        }
      </motion.p>
      
      <motion.button 
        onClick={onRestart}
        className="px-6 py-3 bg-button-bg text-white rounded-xl shadow-button hover:bg-button-hover-bg hover:shadow-button-hover active:bg-button-active-bg transition-all duration-300 font-semibold mt-4 transform hover:scale-105 active:scale-95"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        {t.playAgainButton}
      </motion.button>
    </motion.div>
  );
};

export default IdentifyResultsScreen;