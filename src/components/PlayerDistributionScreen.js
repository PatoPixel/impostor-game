import React, { useState } from 'react';

const PlayerDistributionScreen = ({ 
  players, 
  currentPlayerIndex, 
  gameConfig, 
  onNext, 
  onBack 
}) => {
  const [showWord, setShowWord] = useState(false);
  const currentPlayer = players[currentPlayerIndex];
  const isLastPlayer = currentPlayerIndex === players.length - 1;

  // Debug: mostrar información del estado
  console.log('PlayerDistributionScreen - players:', players);
  console.log('PlayerDistributionScreen - currentPlayerIndex:', currentPlayerIndex);
  console.log('PlayerDistributionScreen - currentPlayer:', currentPlayer);

  // Validación de seguridad
  if (!currentPlayer || !players.length) {
    return (
      <div className="screen-transition flex flex-col items-center justify-center min-h-screen px-4">
        <div className="card max-w-lg mx-auto w-full text-center">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              ⚠️ Error
            </h2>
            <p className="text-dark-300 text-lg">
              No se encontraron jugadores. Por favor, vuelve a la configuración.
            </p>
            <p className="text-dark-400 text-sm mt-2">
              Debug: players.length = {players.length}, currentPlayerIndex = {currentPlayerIndex}
            </p>
          </div>
          <button
            onClick={onBack}
            className="btn-primary text-lg py-4 px-8"
          >
            ← Volver a configuración
          </button>
        </div>
      </div>
    );
  }

  const handleShowWord = () => {
    setShowWord(true);
  };

  const handleNext = () => {
    setShowWord(false);
    onNext();
  };

  const getImpostorMessage = () => {
    if (gameConfig.impostorMode === 'sin-palabra') {
      return {
        title: 'Eres el impostor 👀',
        message: 'No tienes palabra. ¡Intenta no ser descubierto!',
        color: 'text-red-400'
      };
    } else {
      const differentWords = [
        'Perro', 'Casa', 'Árbol', 'Cielo', 'Agua', 'Fuego', 'Tierra', 'Aire'
      ];
      const randomWord = differentWords[Math.floor(Math.random() * differentWords.length)];
      return {
        title: 'Eres el impostor 👀',
        message: `Tu palabra es: ${randomWord}`,
        color: 'text-red-400'
      };
    }
  };

  const getNormalMessage = () => {
    return {
      title: 'Tu palabra es:',
      message: gameConfig.word.toUpperCase(),
      color: 'text-green-400'
    };
  };

  const message = currentPlayer.isImpostor ? getImpostorMessage() : getNormalMessage();

  return (
    <div className="screen-transition flex flex-col items-center justify-center min-h-screen px-4">
      <div className="card max-w-lg mx-auto w-full text-center">
        {!showWord ? (
          <>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Jugador {currentPlayerIndex + 1}
              </h2>
              <p className="text-dark-300 text-lg">
                Toca para ver tu palabra
              </p>
            </div>
            
            <button
              onClick={handleShowWord}
              className="btn-primary text-xl py-6 px-8 mb-6 animate-bounce-gentle"
            >
              👆 Ver mi palabra
            </button>
            
            <div className="text-dark-400 text-sm">
              <p>Progreso: {currentPlayerIndex + 1} de {players.length}</p>
            </div>
          </>
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                {message.title}
              </h2>
              <div className={`text-4xl font-bold ${message.color} mb-4 animate-slide-up`}>
                {message.message}
              </div>
              {currentPlayer.isImpostor && (
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4 mb-6">
                  <p className="text-red-300 text-sm">
                    💡 Consejo: Intenta participar en la conversación sin ser obvio
                  </p>
                </div>
              )}
            </div>
            
            <button
              onClick={handleNext}
              className="btn-primary text-lg py-4 px-8 mb-4"
            >
              {isLastPlayer ? 'Finalizar' : 'Pasar al siguiente jugador'} →
            </button>
            
            <div className="text-dark-400 text-sm">
              <p>Progreso: {currentPlayerIndex + 1} de {players.length}</p>
            </div>
          </>
        )}
        
        <div className="mt-8 pt-6 border-t border-dark-600">
          <button
            onClick={onBack}
            className="btn-secondary text-sm"
          >
            ← Volver a configuración
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerDistributionScreen;
