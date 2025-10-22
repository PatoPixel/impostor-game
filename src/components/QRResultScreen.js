import React from 'react';

const QRResultScreen = ({ playerData, onClose }) => {
  const { isImpostor, word } = playerData;

  const getImpostorMessage = () => {
    if (word === null) {
      return {
        title: 'Eres el impostor 👀',
        message: 'No tienes palabra. ¡Intenta no ser descubierto!',
        color: 'text-red-400',
        bgColor: 'bg-red-900/20',
        borderColor: 'border-red-500/30'
      };
    } else {
      return {
        title: 'Eres el impostor 👀',
        message: `Tu palabra es: ${word.toUpperCase()}`,
        color: 'text-red-400',
        bgColor: 'bg-red-900/20',
        borderColor: 'border-red-500/30'
      };
    }
  };

  const getNormalMessage = () => {
    return {
      title: 'Tu palabra es:',
      message: word.toUpperCase(),
      color: 'text-green-400',
      bgColor: 'bg-green-900/20',
      borderColor: 'border-green-500/30'
    };
  };

  const message = isImpostor ? getImpostorMessage() : getNormalMessage();

  return (
    <div className="screen-transition flex flex-col items-center justify-center min-h-screen">
      <div className="card max-w-lg mx-auto w-full text-center">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            {message.title}
          </h2>
          
          <div className={`${message.bgColor} ${message.borderColor} border rounded-2xl p-8 mb-6`}>
            <div className={`text-5xl font-bold ${message.color} mb-4 animate-bounce-gentle`}>
              {message.message}
            </div>
          </div>
          
          {isImpostor && (
            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4 mb-6">
              <p className="text-red-300 text-sm">
                💡 Consejo: Intenta participar en la conversación sin ser obvio
              </p>
            </div>
          )}
          
          <div className="bg-dark-700/50 rounded-xl p-4">
            <p className="text-dark-300 text-sm">
              🎯 Ahora puedes cerrar esta pantalla y empezar a jugar
            </p>
          </div>
        </div>
        
        <button
          onClick={onClose}
          className="btn-primary w-full text-lg py-4"
        >
          ✅ Entendido
        </button>
      </div>
    </div>
  );
};

export default QRResultScreen;
