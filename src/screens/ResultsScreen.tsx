import React, { useEffect, useState } from 'react';
import { motion, useAnimation, animate } from 'framer-motion';
import Confetti from 'react-confetti';
import type { ColorTest } from '../data/colorData';
import { useLanguage } from '../contexts/LanguageContext';

// A simple type for user answers
export interface UserAnswer {
  testId: number;
  userChoice: 'same' | 'different';
  isCorrect: boolean;
}

interface Props {
  userAnswers: UserAnswer[];
  tests: ColorTest[];
  onRestart: () => void;
}

const ResultsScreen: React.FC<Props> = ({ userAnswers, tests, onRestart }) => {
  const { t, language } = useLanguage();
  const score = userAnswers.filter(answer => answer.isCorrect).length;
  const total = tests.length;
  const [showConfetti, setShowConfetti] = useState(false);
  const [displayScore, setDisplayScore] = useState(0);
  const [displayTotal, setDisplayTotal] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const animation = async () => {
      // Animate total first
      animate(0, total, {
        duration: 0.5,
        onUpdate: (value) => setDisplayTotal(Math.floor(value))
      });
      
      // Then animate score with delay
      setTimeout(() => {
        animate(0, score, {
          duration: 1.5,
          onUpdate: (value) => setDisplayScore(Math.floor(value))
        });
      }, 600);
      
      await controls.start({
        scale: [1, 1.2, 1],
        transition: { duration: 0.5, delay: 2.2 },
      });
      
      if (score === total) {
        setShowConfetti(true);
      }
    };
    animation();
  }, [score, total, controls]);

  const getAnalysis = () => {
    const redGreenErrors = userAnswers.filter(
      answer => !answer.isCorrect && tests.find(t => t.id === answer.testId)?.testType === 'red-green'
    ).length;

    const blueYellowErrors = userAnswers.filter(
      answer => !answer.isCorrect && tests.find(t => t.id === answer.testId)?.testType === 'blue-yellow'
    ).length;

    if (score / total < 0.5) {
        return {
            message: t.strongColorBlindness,
            highlight: "all"
        }
    }

    if (redGreenErrors > 1) {
      return {
        message: t.redGreenDeficiency,
        highlight: 'red-green'
      };
    }
    if (blueYellowErrors > 1) {
      return {
        message: t.blueYellowDeficiency,
        highlight: 'blue-yellow'
      };
    }
    if (score === total) {
      return {
        message: t.perfectScore,
        highlight: 'none'
      };
    }
    return {
        message: t.unclearPattern,
        highlight: 'none'
    };
  };

  const analysis = getAnalysis();

  const colors = [
    { name: 'red', color: '#ff0000', displayName: language === 'es' ? 'Rojo' : 'Red' },
    { name: 'green', color: '#00ff00', displayName: language === 'es' ? 'Verde' : 'Green' },
    { name: 'blue', color: '#0000ff', displayName: language === 'es' ? 'Azul' : 'Blue' },
    { name: 'yellow', color: '#ffff00', displayName: language === 'es' ? 'Amarillo' : 'Yellow' },
    { name: 'orange', color: '#ffa500', displayName: language === 'es' ? 'Naranja' : 'Orange' },
    { name: 'purple', color: '#800080', displayName: language === 'es' ? 'Violeta' : 'Purple' },
  ];

  return (
    <div className="flex flex-col items-center gap-6">
      {showConfetti && <Confetti />}
      <h2 className="text-2xl font-bold">{t.resultsTitle}</h2>
      <motion.div 
        className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex justify-center items-center border-4 border-blue-400 shadow-lg"
        animate={controls}
      >
        <motion.p
          className="text-4xl font-bold text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {displayScore}/{displayTotal}
        </motion.p>
      </motion.div>
      <p className="text-lg text-center"><strong>{t.analysisLabel}</strong> {analysis.message}</p>

      <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-100">
        <h3 className="text-center text-sm font-semibold mb-4 text-gray-600">
          {language === 'es' ? 'Espectro de Colores' : 'Color Spectrum'}
        </h3>
        <div className="flex justify-center gap-3">
          {colors.map(c => (
            <div key={c.name} className="flex flex-col items-center gap-2">
              <motion.div 
                className="w-12 h-12 rounded-lg shadow-md border-2 border-white relative overflow-hidden"
                style={{ backgroundColor: c.color }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {((analysis.highlight === 'red-green' && (c.name === 'red' || c.name === 'green')) || 
                  (analysis.highlight === 'blue-yellow' && (c.name === 'blue' || c.name === 'yellow')) || 
                  analysis.highlight === 'all') && (
                  <motion.div 
                    className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <div className="text-white text-xs">⚠</div>
                  </motion.div>
                )}
              </motion.div>
              <span className="text-xs font-medium text-gray-600">{c.displayName}</span>
              {((analysis.highlight === 'red-green' && (c.name === 'red' || c.name === 'green')) || 
                (analysis.highlight === 'blue-yellow' && (c.name === 'blue' || c.name === 'yellow')) || 
                analysis.highlight === 'all') && (
                <motion.div 
                  className="text-red-500 font-bold"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                >
                  ↑
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      <a 
        href={language === 'es' ? "https://es.wikipedia.org/wiki/Daltonismo" : "https://en.wikipedia.org/wiki/Color_blindness"} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mt-4 text-blue-600 hover:underline transition-colors"
      >
        {t.wikiLink}
      </a>

      <motion.button 
        onClick={onRestart}
        className="w-fit px-6 py-3 bg-button-bg text-white rounded-xl shadow-button hover:bg-button-hover-bg hover:shadow-button-hover active:bg-button-active-bg transition-all duration-300 mt-4 font-semibold transform hover:scale-105 active:scale-95"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {t.playAgainButton}
      </motion.button>
    </div>
  );
};

export default ResultsScreen;