import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';

const QRModeScreen = ({ gameConfig, onStartDistribution, onBack, onFinish }) => {
  const [players, setPlayers] = useState([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [qrCodes, setQrCodes] = useState({});
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    // Generar jugadores y seleccionar impostor aleatorio
    const newPlayers = Array.from({ length: gameConfig.numPlayers }, (_, index) => ({
      id: index + 1,
      isImpostor: false
    }));
    
    // Seleccionar impostor aleatorio
    const impostorIndex = Math.floor(Math.random() * gameConfig.numPlayers);
    newPlayers[impostorIndex].isImpostor = true;
    setPlayers(newPlayers);

    // generateQRCodes moved inside the effect so it's stable for linting
    const generateQRCodes = async (playersList) => {
      const codes = {};
      
      for (let i = 0; i < playersList.length; i++) {
        const player = playersList[i];
        const playerData = {
          playerId: player.id,
          isImpostor: player.isImpostor,
          word: player.isImpostor
            ? (gameConfig.impostorMode === 'sin-palabra'
                ? null
                : getRandomDifferentWord())
            : gameConfig.word
        };
        
        try {
          const qrData = await QRCode.toDataURL(JSON.stringify(playerData));
          codes[player.id] = qrData;
        } catch (error) {
          console.error('Error generating QR:', error);
        }
      }
      
      setQrCodes(codes);
    };

    generateQRCodes(newPlayers);
  }, [gameConfig]);

  const getRandomDifferentWord = () => {
    const differentWords = [
      'Perro', 'Casa', 'Árbol', 'Cielo', 'Agua', 'Fuego', 'Tierra', 'Aire'
    ];
    return differentWords[Math.floor(Math.random() * differentWords.length)];
  };

  const handleShowQR = () => {
    setShowQR(true);
  };

  const handleNextPlayer = () => {
    if (currentPlayerIndex < players.length - 1) {
      setCurrentPlayerIndex(currentPlayerIndex + 1);
      setShowQR(false);
    } else {
      // En modo QR, ir directamente a la pantalla final
      if (onFinish) {
        onFinish();
      } else {
        // Fallback: recargar para volver al inicio
        window.location.reload();
      }
    }
  };

  const currentPlayer = players[currentPlayerIndex];
  const currentQR = qrCodes[currentPlayer?.id];

  if (!currentPlayer) {
    return (
      <div className="screen-transition flex flex-col items-center justify-center min-h-screen">
        <div className="card max-w-lg mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-dark-300">Generando códigos QR...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="screen-transition flex flex-col items-center justify-center min-h-screen px-4">
      <div className="card max-w-lg mx-auto w-full text-center">
        {!showQR ? (
          <>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Jugador {currentPlayerIndex + 1}
              </h2>
              <p className="text-dark-300 text-lg mb-4">
                Escanea tu código QR para ver tu palabra
              </p>
              <div className="bg-dark-700/50 rounded-xl p-4 mb-6">
                <p className="text-dark-300 text-sm">
                  📱 Cada jugador debe escanear su QR individual
                </p>
              </div>
            </div>
            
            <button
              onClick={handleShowQR}
              className="btn-primary text-xl py-6 px-8 mb-6 animate-bounce-gentle"
            >
              📱 Mostrar mi QR
            </button>
            
            <div className="text-dark-400 text-sm">
              <p>Progreso: {currentPlayerIndex + 1} de {players.length}</p>
            </div>
          </>
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Jugador {currentPlayerIndex + 1}
              </h2>
              <p className="text-dark-300 mb-6">
                Escanea este código QR con tu teléfono
              </p>
              
              {currentQR && (
                <div className="bg-white p-4 rounded-xl mb-6 inline-block">
                  <img 
                    src={currentQR} 
                    alt="QR Code" 
                    className="w-48 h-48 mx-auto"
                  />
                </div>
              )}
              
              <div className="bg-dark-700/50 rounded-xl p-4 mb-6">
                <p className="text-dark-300 text-sm">
                  💡 Abre la cámara de tu teléfono y apunta al código QR
                </p>
              </div>
            </div>
            
            <button
              onClick={handleNextPlayer}
              className="btn-primary text-lg py-4 px-8 mb-4"
            >
              {currentPlayerIndex === players.length - 1 ? 'Finalizar' : 'Siguiente jugador'} →
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

export default QRModeScreen;
