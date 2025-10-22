import React from 'react';

const HomeScreen = ({ onStart }) => {
  return (
    <div className="screen-transition flex flex-col items-center justify-center min-h-screen text-center px-4">
      <div className="card max-w-md mx-auto w-full">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 animate-bounce-gentle">
            🎭 Juego del Impostor
          </h1>
        </div>
        
        <div className="mb-8">
          <div className="text-dark-400 mb-4">
            <p className="text-sm mb-2">🎯 <strong>Objetivo:</strong></p>
            <p className="text-sm">
              Descubre quién es el impostor entre tus amigos
            </p>
          </div>
          
          <div className="bg-dark-700/50 rounded-xl p-4 mb-6">
            <h3 className="text-white font-semibold mb-2">¿Cómo jugar?</h3>
            <ul className="text-dark-300 text-sm space-y-1 text-left">
              <li>• Todos reciben la misma palabra</li>
              <li>• Uno es el impostor (no la ve)</li>
              <li>• Describan sin decir la palabra</li>
              <li>• ¡Descubrid al impostor!</li>
            </ul>
          </div>
        </div>
        
        <button 
          onClick={onStart}
          className="btn-primary w-full text-lg py-4 animate-slide-up"
        >
          🚀 Empezar partida
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
