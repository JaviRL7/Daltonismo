import { useState } from 'react';
import { motion } from 'framer-motion';
import type { ColorTest } from '../data/colorData';
import ColorBox from '../components/ColorBox';
import type { UserAnswer } from './ResultsScreen';
import { useLanguage } from '../contexts/LanguageContext';

interface Props {
  tests: ColorTest[];
  onGameEnd: (answers: UserAnswer[]) => void;
}

const GameScreen: React.FC<Props> = ({ tests, onGameEnd }) => {
  const { t } = useLanguage();
  const [currentTestIndex, setCurrentTestIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

  const handleAnswer = (choice: 'same' | 'different') => {
    const currentTest = tests[currentTestIndex];
    const isCorrect = (choice === 'same') === currentTest.isSame;

    const newAnswer: UserAnswer = {
      testId: currentTest.id,
      userChoice: choice,
      isCorrect: isCorrect,
    };

    const updatedAnswers = [...userAnswers, newAnswer];
    setUserAnswers(updatedAnswers);

    if (currentTestIndex < tests.length - 1) {
      setCurrentTestIndex(currentTestIndex + 1);
    } else {
      onGameEnd(updatedAnswers);
    }
  };

  const currentTest = tests[currentTestIndex];

  return (
    <motion.div 
      className="flex flex-col items-center gap-6"
      key={currentTestIndex}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center gap-4">
        <div className="flex gap-1">
          {Array.from({ length: tests.length }, (_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all ${
                i <= currentTestIndex ? 'bg-accent-primary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        <motion.h3 
          className="text-lg font-semibold text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Test #{currentTestIndex + 1} / {tests.length}
        </motion.h3>
      </div>
      
      
      <motion.div 
        className="flex justify-center gap-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <ColorBox color={currentTest.colorA} />
        <ColorBox color={currentTest.colorB} />
      </motion.div>
      
      <motion.div 
        className="flex justify-center gap-4 mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <motion.button 
          onClick={() => handleAnswer('same')}
          className="px-6 py-3 bg-button-bg text-white rounded-xl shadow-button hover:bg-button-hover-bg hover:shadow-button-hover active:bg-button-active-bg transition-all duration-300 font-semibold min-w-[120px] transform hover:scale-105 active:scale-95"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t.sameButton}
        </motion.button>
        <motion.button 
          onClick={() => handleAnswer('different')}
          className="px-6 py-3 bg-button-bg text-white rounded-xl shadow-button hover:bg-button-hover-bg hover:shadow-button-hover active:bg-button-active-bg transition-all duration-300 font-semibold min-w-[120px] transform hover:scale-105 active:scale-95"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t.differentButton}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default GameScreen;
