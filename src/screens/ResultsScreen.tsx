import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Confetti from 'react-confetti';
import type { ColorTest } from '../data/colorData';

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
  const score = userAnswers.filter(answer => answer.isCorrect).length;
  const total = tests.length;
  const [showConfetti, setShowConfetti] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const animation = async () => {
      await controls.start({
        scale: [1, 1.2, 1],
        transition: { duration: 0.5 },
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
            message: "Podrías tener daltonismo. Te recomendamos consultar a un especialista.",
            highlight: "all"
        }
    }

    if (redGreenErrors > 1) {
      return {
        message: 'Has tenido varias confusiones en los pares rojo-verde. Esto podría sugerir una deficiencia del tipo Protanopia o Deuteranopia.',
        highlight: 'red-green'
      };
    }
    if (blueYellowErrors > 1) {
      return {
        message: 'Has tenido varias confusiones en los pares azul-amarillo. Esto podría sugerir una deficiencia del tipo Tritanopia.',
        highlight: 'blue-yellow'
      };
    }
    if (score === total) {
      return {
        message: '¡Felicidades! No parece que seas daltónico.',
        highlight: 'none'
      };
    }
    return {
        message: 'Tus resultados no sugieren un patrón claro de daltonismo, pero has tenido algunos fallos.',
        highlight: 'none'
    };
  };

  const analysis = getAnalysis();

  const colors = [
    { name: 'red', color: '#ff0000' },
    { name: 'green', color: '#00ff00' },
    { name: 'blue', color: '#0000ff' },
    { name: 'yellow', color: '#ffff00' },
    { name: 'orange', color: '#ffa500' },
  ];

  return (
    <div className="flex flex-col items-center gap-4">
      {showConfetti && <Confetti />}
      <h2 className="text-2xl font-bold">Resultados</h2>
      <motion.div 
        className="w-40 h-40 rounded-full bg-gray-200 flex justify-center items-center border-4 border-blue-400"
        animate={controls}
      >
        <motion.p
          className="text-4xl font-bold text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {score}/{total}
        </motion.p>
      </motion.div>
      <p className="text-lg text-center"><strong>Análisis:</strong> {analysis.message}</p>

      <div className="flex justify-center gap-2 mt-4">
        {colors.map(c => (
          <div key={c.name} className="flex flex-col items-center gap-1">
            <div 
              className="w-10 h-5 rounded-md"
              style={{ backgroundColor: c.color }}
            ></div>
            {((analysis.highlight === 'red-green' && (c.name === 'red' || c.name === 'green')) || (analysis.highlight === 'blue-yellow' && (c.name === 'blue' || c.name === 'yellow')) || analysis.highlight === 'all') && (
              <div className="animate-bounce">▲</div>
            )}
          </div>
        ))}
      </div>

      <a href="https://es.wikipedia.org/wiki/Daltonismo" target="_blank" rel="noopener noreferrer" className="mt-4 text-blue-600 hover:underline">
        Más información sobre el daltonismo en Wikipedia
      </a>

      <button 
        onClick={onRestart}
        className="w-fit px-4 py-2 bg-button-bg text-white rounded-lg shadow-md hover:bg-button-hover-bg transition-all mt-4"
      >
        Jugar de Nuevo
      </button>
    </div>
  );
};

export default ResultsScreen;