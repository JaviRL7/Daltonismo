import { useState } from 'react';
import './index.css';
import { colorTests } from './data/colorData';
import { identifyColorQuestions } from './data/identifyColorData';
import GameScreen from './screens/GameScreen';
import IdentifyColorScreen from './screens/IdentifyColorScreen';
import IdentifyResultsScreen from './screens/IdentifyResultsScreen';
import type { UserAnswer } from './screens/ResultsScreen';
import ResultsScreen from './screens/ResultsScreen';
import StartScreen from './screens/StartScreen';
import { FaGithub, FaLinkedin, FaUser } from 'react-icons/fa';
import { MdEmail, MdOutlineWork } from 'react-icons/md';

// Define the possible states of the game
type GameState = 'start' | 'playing' | 'results' | 'identify_results';
type GameMode = 'comparar' | 'identificar';

function App() {
  const [gameState, setGameState] = useState<GameState>('start');
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [mode, setMode] = useState<GameMode>('comparar');
  const [identifyScore, setIdentifyScore] = useState(0);

  // Function to start the game
  const handleStartGame = () => {
    setGameState('playing');
    setUserAnswers([]); // Reset answers
    setIdentifyScore(0);
  };

  // Function to end the game and show results
  const handleGameEnd = (finalAnswers: UserAnswer[]) => {
    setUserAnswers(finalAnswers);
    setGameState('results');
  };

  const handleIdentifyGameEnd = (score: number) => {
    setIdentifyScore(score);
    setGameState('identify_results');
  };

  // Function to restart the game
  const handleRestart = () => {
    setGameState('start');
  };

  // Render the correct screen based on the game state
  const renderScreen = () => {
    switch (gameState) {
      case 'start':
        return <StartScreen onStartGame={handleStartGame} />;
      case 'playing':
        if (mode === 'comparar') {
          return <GameScreen tests={colorTests} onGameEnd={handleGameEnd} />;
        } else {
          return <IdentifyColorScreen questions={identifyColorQuestions} onGameEnd={handleIdentifyGameEnd} />;
        }
      case 'results':
        return <ResultsScreen userAnswers={userAnswers} tests={colorTests} onRestart={handleRestart} />;
      case 'identify_results':
        return <IdentifyResultsScreen score={identifyScore} totalQuestions={identifyColorQuestions.length} onRestart={handleRestart} />;
      default:
        return <StartScreen onStartGame={handleStartGame} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-color text-text-color">
      <header className="text-center py-4">
        <h1 className="text-5xl font-bold main-title" style={{ fontFamily: '"Press Start 2P", cursive' }}>Color Blindness</h1>
        <h2 className="text-3xl main-title" style={{ fontFamily: '"Press Start 2P", cursive' }}>Game</h2>
        <p className="text-sm">by Javier Rodríguez</p>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-card-background p-8 rounded-2xl shadow-lg max-w-lg w-full">
          {renderScreen()}
          {gameState === 'start' && (
            <div className="mt-8 flex justify-center gap-4">
              <button 
                onClick={() => setMode(mode === 'comparar' ? 'identificar' : 'comparar')}
                className="w-fit px-4 py-2 bg-button-bg text-white rounded-lg shadow-md hover:bg-button-hover-bg transition-all"
              >
                Cambiar modo de juego: {mode === 'comparar' ? 'Comparar' : 'Identificar'}
              </button>
            </div>
          )}
        </div>
      </main>
      <footer className="bg-header-footer-bg text-white py-8">
        <div className="flex flex-col items-center gap-4">
          <div className="w-40 h-40 rounded-xl shadow-lg overflow-hidden">
            <img src="/Perfil1.jpeg" alt="Javier Rodríguez López" className="w-full h-full object-cover opacity-95" />
          </div>
          <div className="flex flex-col items-center gap-2 text-lg">
            <div className="flex items-center gap-2">
              <FaUser />
              <span>Javier Rodríguez López</span>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail />
              <a href="mailto:Jrlsanlucar11@gmail.com">Jrlsanlucar11@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <FaLinkedin />
              <a href="https://linkedin.com/in/javier-rodriguez-lopez-4795a8180" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaGithub />
              <a href="https://github.com/JaviRL7" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineWork />
              <a href="https://my-portfolio-five-kohl-50.vercel.app/" target="_blank" rel="noopener noreferrer">
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;