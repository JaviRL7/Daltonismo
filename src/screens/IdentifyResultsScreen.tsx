import React from 'react';

interface IdentifyResultsScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const IdentifyResultsScreen: React.FC<IdentifyResultsScreenProps> = ({ score, totalQuestions, onRestart }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold">Resultados del Modo Identificar</h2>
      <p className="text-lg">Tu puntuación es: {score} de {totalQuestions}</p>
      <button 
        onClick={onRestart}
        className="w-fit px-4 py-2 bg-button-bg text-white rounded-lg shadow-md hover:bg-button-hover-bg transition-all mt-4"
      >
        Jugar de Nuevo
      </button>
    </div>
  );
};

export default IdentifyResultsScreen;