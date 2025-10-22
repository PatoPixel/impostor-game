import React from 'react';

const FinalScreen = ({ onRestart, gameConfig }) => {
  return (
    <div className="screen-transition flex flex-col items-center justify-center min-h-screen text-center px-4">
      <div className="card max-w-lg mx-auto w-full">
        <div className="mb-8">
          <div className="text-6xl mb-6 animate-bounce-gentle">🎉</div>
          <h2 className="text-3xl font-bold text-white mb-4">
            ¡Listo para jugar!
          </h2>
          <p className="text-dark-300 text-lg mb-6">
            Todos han visto su palabra. ¡Que empiece la partida!
          </p>
        </div>
        
        <div className="bg-dark-700/50 rounded-xl p-6 mb-8">
          <h3 className="text-white font-semibold mb-4">🎯 Instrucciones del juego:</h3>
          <div className="text-dark-300 text-sm space-y-2 text-left">
            <div className="flex items-start space-x-2">
              <span className="text-primary-400">1.</span>
              <span>Los jugadores deben describir su palabra sin decirla directamente</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-primary-400">2.</span>
              <span>El impostor debe participar sin ser obvio</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-primary-400">3.</span>
              <span>Al final, voten quién creen que es el impostor</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-primary-400">4.</span>
              <span>¡Diviértanse y buena suerte!</span>
            </div>
          </div>
          
          {gameConfig?.category && (
            <div className="mt-4 pt-4 border-t border-dark-600">
              <div className="text-white font-medium mb-2">📚 Categoría seleccionada:</div>
              <div className="text-primary-400 font-semibold">
                {gameConfig.category.name}
              </div>
              {gameConfig.category.type === 'custom' && (
                <div className="text-dark-400 text-sm mt-1">
                  {gameConfig.category.words.length} palabras personalizadas
                </div>
              )}
            </div>
          )}
        </div>
        
        <div className="space-y-4">
          <button
            onClick={onRestart}
            className="btn-primary w-full text-lg py-4"
          >
            🔄 Nueva partida
          </button>
          
          <div className="text-dark-400 text-sm">
            <p>💡 Tip: Mantén el teléfono en el centro para que todos puedan ver</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalScreen;
