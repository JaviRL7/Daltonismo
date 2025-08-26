import { useState } from 'react';
import type { ColorTest } from '../data/colorData';
import ColorBox from '../components/ColorBox';
import type { UserAnswer } from './ResultsScreen';

interface Props {
  tests: ColorTest[];
  onGameEnd: (answers: UserAnswer[]) => void;
}

const GameScreen: React.FC<Props> = ({ tests, onGameEnd }) => {
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
    <div className="flex flex-col items-center gap-4">
      <h3 className="text-lg">Prueba #{currentTestIndex + 1} de {tests.length}</h3>
      <p className="text-xl text-center">Compara los colores y decide si son iguales o diferentes.</p>
      <div className="flex justify-center gap-4">
        <ColorBox color={currentTest.colorA} />
        <ColorBox color={currentTest.colorB} />
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <button 
          onClick={() => handleAnswer('same')}
          className="w-fit px-4 py-2 bg-button-bg text-white rounded-lg shadow-md hover:bg-button-hover-bg transition-all"
        >
          Iguales
        </button>
        <button 
          onClick={() => handleAnswer('different')}
          className="w-fit px-4 py-2 bg-button-bg text-white rounded-lg shadow-md hover:bg-button-hover-bg transition-all"
        >
          Diferentes
        </button>
      </div>
    </div>
  );
};

export default GameScreen;
