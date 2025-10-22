import React, { useState } from 'react';
import { categories } from '../data/categories';

const CategorySelectionScreen = ({ onSelectCategory, onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [customWords, setCustomWords] = useState('');
  const [useCustomWords, setUseCustomWords] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (useCustomWords && customWords.trim()) {
      // Dividir las palabras por comas y limpiar espacios
      const words = customWords.split(',').map(word => word.trim()).filter(word => word.length > 0);
      onSelectCategory({
        type: 'custom',
        words: words,
        name: 'Palabras personalizadas'
      });
    } else if (selectedCategory) {
      onSelectCategory({
        type: 'category',
        categoryKey: selectedCategory,
        name: categories[selectedCategory].name
      });
    }
  };

  const handleCategoryChange = (categoryKey) => {
    setSelectedCategory(categoryKey);
    setUseCustomWords(false);
  };

  const handleCustomWordsToggle = () => {
    setUseCustomWords(!useCustomWords);
    if (!useCustomWords) {
      setSelectedCategory('');
    }
  };

  return (
    <div className="screen-transition flex flex-col items-center justify-center min-h-screen px-4">
      <div className="card max-w-2xl mx-auto w-full">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            🎯 Selecciona categoría
          </h2>
          <p className="text-dark-300 text-lg">
            Elige el tipo de palabras para tu partida
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Opción de palabras personalizadas */}
          <div className="bg-dark-700/50 rounded-xl p-6">
            <label className="flex items-center space-x-3 cursor-pointer mb-4">
              <input
                type="checkbox"
                checked={useCustomWords}
                onChange={handleCustomWordsToggle}
                className="text-primary-500 focus:ring-primary-500"
              />
              <div>
                <div className="text-white font-medium">✏️ Palabras personalizadas</div>
                <div className="text-dark-400 text-sm">
                  Escribe tus propias palabras separadas por comas
                </div>
              </div>
            </label>
            
            {useCustomWords && (
              <div className="mt-4">
                <label className="block text-white font-semibold mb-2">
                  📝 Tus palabras
                </label>
                <textarea
                  value={customWords}
                  onChange={(e) => setCustomWords(e.target.value)}
                  placeholder="Café, Pizza, Gato, Coche, Playa..."
                  className="input-field w-full h-24 resize-none"
                />
                <p className="text-dark-400 text-sm mt-1">
                  Separa las palabras con comas. Se elegirá una aleatoriamente.
                </p>
              </div>
            )}
          </div>

          {/* Categorías predefinidas */}
          {!useCustomWords && (
            <div>
              <h3 className="text-white font-semibold mb-4">📚 Categorías disponibles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(categories).map(([key, category]) => (
                  <label key={key} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value={key}
                      checked={selectedCategory === key}
                      onChange={() => handleCategoryChange(key)}
                      className="text-primary-500 focus:ring-primary-500"
                    />
                    <div className="flex-1">
                      <div className="text-white font-medium">{category.name}</div>
                      <div className="text-dark-400 text-sm">{category.description}</div>
                      <div className="text-dark-500 text-xs">
                        {category.words ? `${category.words.length} palabras` : 'Todas las categorías'}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

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
              disabled={!selectedCategory && !useCustomWords}
              className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continuar →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategorySelectionScreen;
