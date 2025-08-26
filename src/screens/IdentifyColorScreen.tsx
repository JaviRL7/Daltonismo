import React, { useState } from 'react';
import type { IdentifyColorQuestion } from '../data/identifyColorData';

interface IdentifyColorScreenProps {
  questions: IdentifyColorQuestion[];
  onGameEnd: (score: number) => void;
}

const IdentifyColorScreen: React.FC<IdentifyColorScreenProps> = ({ questions, onGameEnd }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedOption: string) => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onGameEnd(score + (selectedOption === questions[currentQuestionIndex].answer ? 1 : 0));
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold">Identifica el Color</h2>
      <div
        className="w-48 h-48 rounded-lg shadow-md"
        style={{ backgroundColor: currentQuestion.color }}
      ></div>
      <div className="flex justify-center gap-4 mt-4 flex-wrap">
        {currentQuestion.options.map((option) => (
          <button 
            key={option} 
            onClick={() => handleAnswer(option)}
            className="w-fit px-4 py-2 bg-button-bg text-white rounded-lg shadow-md hover:bg-button-hover-bg transition-all"
          >
            {option}
          </button>
        ))}
      </div>
      <p className="text-lg">Puntuación: {score}</p>
    </div>
  );
};

export default IdentifyColorScreen;