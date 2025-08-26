import React from 'react';

interface Props {
  onStartGame: () => void;
}

const StartScreen: React.FC<Props> = ({ onStartGame }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">Prueba de Daltonismo</h1>
      <p className="text-lg text-center">Compara los colores y decide si son iguales o diferentes.</p>
      <button 
        onClick={onStartGame}
        className="w-fit px-4 py-2 bg-button-bg text-white rounded-lg shadow-md hover:bg-button-hover-bg transition-all"
      >
        Empezar Juego
      </button>
    </div>
  );
};

export default StartScreen;