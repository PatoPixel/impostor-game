import React, { useState } from 'react';
import CategorySelectionScreen from './CategorySelectionScreen';

const GameConfigScreen = ({ onConfigure, onBack }) => {
  const [numPlayers, setNumPlayers] = useState(3);
  const [impostorMode, setImpostorMode] = useState('sin-palabra');
  const [word, setWord] = useState('');
  const [useQR, setUseQR] = useState(false);
  const [showCategorySelection, setShowCategorySelection] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const predefinedWords = [
    'Café', 'Pizza', 'Gato', 'Coche', 'Playa', 'Música', 'Libro', 'Sol', 
    'Mar', 'Montaña', 'Fiesta', 'Amor', 'Familia', 'Trabajo', 'Viaje'
  ];

  const handleCategorySelect = (categoryData) => {
    setSelectedCategory(categoryData);
    setShowCategorySelection(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let finalWord = word.trim();
    
    // Si no hay palabra personalizada y hay categoría seleccionada, usar categoría
    if (!finalWord && selectedCategory) {
      if (selectedCategory.type === 'custom') {
        // Usar una palabra aleatoria de las personalizadas
        const words = selectedCategory.words;
        finalWord = words[Math.floor(Math.random() * words.length)];
      } else {
        // Usar una palabra aleatoria de la categoría
        const { getRandomWords } = require('../data/categories');
        const words = getRandomWords(selectedCategory.categoryKey, 1);
        finalWord = words[0] || predefinedWords[Math.floor(Math.random() * predefinedWords.length)];
      }
    }
    
    // Si aún no hay palabra, usar una predefinida
    if (!finalWord) {
      finalWord = predefinedWords[Math.floor(Math.random() * predefinedWords.length)];
    }
    
    onConfigure({
      numPlayers,
      impostorMode,
      word: finalWord,
      useQR,
      category: selectedCategory
    });
  };

  // Mostrar pantalla de selección de categoría si está activa
  if (showCategorySelection) {
    return (
      <CategorySelectionScreen
        onSelectCategory={handleCategorySelect}
        onBack={() => setShowCategorySelection(false)}
      />
    );
  }

  return (
    <div className="screen-transition flex flex-col items-center justify-center min-h-screen px-4">
      <div className="card max-w-lg mx-auto w-full">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-white mb-2">⚙️ Configuración</h2>
          <p className="text-dark-300">Personaliza tu partida</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Número de jugadores */}
          <div>
            <label className="block text-white font-semibold mb-2">
              👥 Número de jugadores
            </label>
            <div className="flex items-center space-x-4">
              <button
                type="button"
                onClick={() => setNumPlayers(Math.max(3, numPlayers - 1))}
                className="btn-secondary px-3 py-2 text-lg"
                disabled={numPlayers <= 3}
              >
                -
              </button>
              <span className="text-2xl font-bold text-white min-w-[3rem] text-center">
                {numPlayers}
              </span>
              <button
                type="button"
                onClick={() => setNumPlayers(Math.min(10, numPlayers + 1))}
                className="btn-secondary px-3 py-2 text-lg"
                disabled={numPlayers >= 10}
              >
                +
              </button>
            </div>
            <p className="text-dark-400 text-sm mt-1">
              Mínimo 3, máximo 10 jugadores
            </p>
          </div>

          {/* Modo impostor */}
          <div>
            <label className="block text-white font-semibold mb-3">
              🎭 Modo impostor
            </label>
            <div className="space-y-3">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="impostorMode"
                  value="sin-palabra"
                  checked={impostorMode === 'sin-palabra'}
                  onChange={(e) => setImpostorMode(e.target.value)}
                  className="text-primary-500 focus:ring-primary-500"
                />
                <div>
                  <div className="text-white font-medium">🔹 Sin palabra</div>
                  <div className="text-dark-400 text-sm">El impostor no ve nada</div>
                </div>
              </label>
              
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="impostorMode"
                  value="palabra-diferente"
                  checked={impostorMode === 'palabra-diferente'}
                  onChange={(e) => setImpostorMode(e.target.value)}
                  className="text-primary-500 focus:ring-primary-500"
                />
                <div>
                  <div className="text-white font-medium">🔹 Palabra diferente</div>
                  <div className="text-dark-400 text-sm">El impostor ve otra palabra</div>
                </div>
              </label>
            </div>
          </div>

          {/* Palabra */}
          <div>
            <label className="block text-white font-semibold mb-2">
              📝 Palabra (opcional)
            </label>
            <input
              type="text"
              value={word}
              onChange={(e) => setWord(e.target.value)}
              placeholder="Escribe una palabra o déjalo vacío para aleatoria"
              className="input-field w-full"
            />
            <p className="text-dark-400 text-sm mt-1">
              Si no escribes nada, se elegirá una palabra aleatoria
            </p>
          </div>

          {/* Categoría */}
          <div>
            <label className="block text-white font-semibold mb-2">
              🎯 Categoría de palabras
            </label>
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => setShowCategorySelection(true)}
                className="btn-secondary w-full text-left"
              >
                {selectedCategory ? (
                  <div>
                    <div className="font-medium">✅ {selectedCategory.name}</div>
                    <div className="text-sm text-dark-400">
                      {selectedCategory.type === 'custom' 
                        ? `${selectedCategory.words.length} palabras personalizadas`
                        : 'Categoría seleccionada'
                      }
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="font-medium">📚 Seleccionar categoría</div>
                    <div className="text-sm text-dark-400">
                      Elige entre películas, famosos, comida, etc.
                    </div>
                  </div>
                )}
              </button>
              
              {selectedCategory && (
                <button
                  type="button"
                  onClick={() => setSelectedCategory(null)}
                  className="btn-secondary text-sm w-full"
                >
                  🗑️ Quitar categoría
                </button>
              )}
            </div>
            <p className="text-dark-400 text-sm mt-1">
              Opcional: selecciona una categoría para palabras temáticas
            </p>
          </div>

          {/* Modo QR */}
          <div>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={useQR}
                onChange={(e) => setUseQR(e.target.checked)}
                className="text-primary-500 focus:ring-primary-500"
              />
              <div>
                <div className="text-white font-medium">📱 Modo QR individual</div>
                <div className="text-dark-400 text-sm">
                  Cada jugador verá su palabra en un QR único
                </div>
              </div>
            </label>
          </div>

          {/* Botones */}
          <div className="flex space-x-4 pt-4">
            <button
              type="button"
              onClick={onBack}
              className="btn-secondary flex-1"
            >
              ← Volver
            </button>
            <button
              type="submit"
              className="btn-primary flex-1"
            >
              Continuar →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GameConfigScreen;
