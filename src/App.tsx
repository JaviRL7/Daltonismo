import { useState } from 'react';
import './index.css';
import { motion } from 'framer-motion';
import { colorTests } from './data/colorData';
import { identifyColorQuestions } from './data/identifyColorData';
import GameScreen from './screens/GameScreen';
import IdentifyColorScreen from './screens/IdentifyColorScreen';
import IdentifyResultsScreen from './screens/IdentifyResultsScreen';
import type { UserAnswer } from './screens/ResultsScreen';
import ResultsScreen from './screens/ResultsScreen';
import StartScreen from './screens/StartScreen';
import { FaGithub, FaLinkedin, FaUser, FaGlobe } from 'react-icons/fa';
import { MdEmail, MdOutlineWork } from 'react-icons/md';
import { useLanguage } from './contexts/LanguageContext';
import AnimatedBackground from './components/AnimatedBackground';
import AnimatedButton from './components/AnimatedButton';

// Define the possible states of the game
type GameState = 'start' | 'playing' | 'results' | 'identify_results';
type GameMode = 'comparar' | 'identificar';

function App() {
  const { language, setLanguage, t } = useLanguage();
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
    <div className="min-h-screen flex flex-col bg-background-color text-text-color relative">
      <AnimatedBackground />
      <header className="text-center py-4 relative z-10">
        <div className="absolute top-4 right-8">
          <motion.button
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            className="flex items-center gap-2 px-4 py-3 bg-button-bg text-white rounded-xl shadow-button hover:bg-button-hover-bg hover:shadow-button-hover active:bg-button-active-bg transition-all duration-300 text-sm font-semibold transform hover:scale-105 active:scale-95"
            title={t.language}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGlobe />
            {language === 'es' ? t.english : t.spanish}
          </motion.button>
        </div>
        <motion.h1 
          className="text-6xl md:text-7xl font-bold main-title mb-2 text-text-color" 
          style={{ fontFamily: '"Press Start 2P", cursive' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {t.gameTitle}
        </motion.h1>
        <motion.h2 
          className="text-6xl md:text-7xl main-title text-text-color" 
          style={{ fontFamily: '"Press Start 2P", cursive' }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {t.gameSubtitle}
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 mt-2 font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t.author}
        </motion.p>
      </header>
      <main className="flex-grow flex items-center justify-center relative z-10">
        <motion.div 
          className="bg-card-background p-8 rounded-3xl shadow-card max-w-lg w-full backdrop-blur-sm bg-opacity-95 border border-white border-opacity-20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {renderScreen()}
          {gameState === 'start' && (
            <div className="mt-8 flex justify-center gap-4">
              <AnimatedButton 
                onClick={() => setMode(mode === 'comparar' ? 'identificar' : 'comparar')}
                size="md"
                className="w-fit"
              >
                {t.changeModeButton} {mode === 'comparar' ? t.compareMode : t.identifyMode}
              </AnimatedButton>
            </div>
          )}
        </motion.div>
      </main>
      <footer className="bg-header-footer-bg text-white py-8 relative z-10">
        <div className="flex flex-col items-center gap-4">
          <div className="w-40 h-40 rounded-xl shadow-lg overflow-hidden">
            <img src="/Perfil1.jpeg" alt="Javier Rodríguez López" className="w-full h-full object-cover opacity-95" />
          </div>
          <div className="flex flex-col items-center gap-2 text-xl">
            <div className="flex items-center gap-2">
              <FaUser />
              <span className="font-bold">Javier Rodríguez López - El Daltónico</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-button-bg hover:bg-opacity-20 transition-all duration-300">
              <MdEmail />
              <a href="mailto:Jrlsanlucar11@gmail.com" className="font-semibold">Jrlsanlucar11@gmail.com</a>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-button-bg hover:bg-opacity-20 transition-all duration-300">
              <FaLinkedin />
              <a href="https://linkedin.com/in/javier-rodriguez-lopez-4795a8180" target="_blank" rel="noopener noreferrer" className="font-semibold">
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-button-bg hover:bg-opacity-20 transition-all duration-300">
              <FaGithub />
              <a href="https://github.com/JaviRL7" target="_blank" rel="noopener noreferrer" className="font-semibold">
                GitHub
              </a>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-button-bg hover:bg-opacity-20 transition-all duration-300">
              <MdOutlineWork />
              <a href="https://profound-inspiration-production.up.railway.app/" target="_blank" rel="noopener noreferrer" className="font-semibold">
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