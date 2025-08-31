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
      <h2 className="text-3xl font-bold">Identifica el Color</h2>
      <div
        className="w-48 h-48 rounded-lg shadow-md"
        style={{ backgroundColor: currentQuestion.color }}
      ></div>
      <div className="flex justify-center gap-4 mt-4 flex-wrap">
        {currentQuestion.options.map((option) => (
          <button 
            key={option} 
            onClick={() => handleAnswer(option)}
            className="w-fit px-4 py-2 bg-button-bg text-white rounded-lg shadow-button hover:bg-button-hover-bg hover:shadow-button-hover active:bg-button-active-bg transition-all duration-300 font-semibold transform hover:scale-105 active:scale-95"
          >
            {option}
          </button>
        ))}
      </div>
      <p className="text-xl font-bold text-gray-700">Puntuación: {score}</p>
    </div>
  );
};

export default IdentifyColorScreen;