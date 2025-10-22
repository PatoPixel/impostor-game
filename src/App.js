import React, { useState } from 'react';
import HomeScreen from './components/HomeScreen';
import GameConfigScreen from './components/GameConfigScreen';
import PlayerDistributionScreen from './components/PlayerDistributionScreen';
import FinalScreen from './components/FinalScreen';
import QRModeScreen from './components/QRModeScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [gameConfig, setGameConfig] = useState({
    numPlayers: 3,
    impostorMode: 'sin-palabra',
    word: '',
    useQR: false
  });
  const [players, setPlayers] = useState([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  const resetGame = () => {
    setCurrentScreen('home');
    setGameConfig({
      numPlayers: 3,
      impostorMode: 'sin-palabra',
      word: '',
      useQR: false
    });
    setPlayers([]);
    setCurrentPlayerIndex(0);
  };

  const startGame = () => {
    setCurrentScreen('config');
  };

  const configureGame = (config) => {
    setGameConfig(config);
    if (config.useQR) {
      setCurrentScreen('qr-mode');
    } else {
      setCurrentScreen('distribution');
    }
  };

  const startDistribution = () => {
    // Generar jugadores y seleccionar impostor aleatorio
    const newPlayers = Array.from({ length: gameConfig.numPlayers }, (_, index) => ({
      id: index + 1,
      isImpostor: false
    }));
    
    // Seleccionar impostor aleatorio
    const impostorIndex = Math.floor(Math.random() * gameConfig.numPlayers);
    newPlayers[impostorIndex].isImpostor = true;
    
    setPlayers(newPlayers);
    setCurrentPlayerIndex(0);
    setCurrentScreen('distribution');
  };

  const nextPlayer = () => {
    if (currentPlayerIndex < players.length - 1) {
      setCurrentPlayerIndex(currentPlayerIndex + 1);
    } else {
      setCurrentScreen('final');
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen onStart={startGame} />;
      case 'config':
        return <GameConfigScreen onConfigure={configureGame} onBack={resetGame} />;
      case 'qr-mode':
        return <QRModeScreen 
          gameConfig={gameConfig} 
          onStartDistribution={startDistribution}
          onBack={() => setCurrentScreen('config')}
        />;
      case 'distribution':
        return <PlayerDistributionScreen 
          players={players}
          currentPlayerIndex={currentPlayerIndex}
          gameConfig={gameConfig}
          onNext={nextPlayer}
          onBack={() => setCurrentScreen('config')}
        />;
      case 'final':
        return <FinalScreen onRestart={resetGame} />;
      default:
        return <HomeScreen onStart={startGame} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700">
      <div className="container mx-auto px-4 py-8">
        {renderScreen()}
      </div>
    </div>
  );
}

export default App;
