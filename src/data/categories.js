export const categories = {
  'todas': {
    name: 'Todas las palabras',
    description: 'Mezcla de todas las categorías',
    words: []
  },
  'peliculas': {
    name: 'Películas',
    description: 'Títulos de películas famosas',
    words: [
      'Titanic', 'Avatar', 'Star Wars', 'Harry Potter', 'El Rey León',
      'Frozen', 'Toy Story', 'Shrek', 'Cars', 'Los Increíbles',
      'Spider-Man', 'Batman', 'Superman', 'Iron Man', 'Thor',
      'Jurassic Park', 'Terminator', 'Matrix', 'Pulp Fiction', 'Forrest Gump'
    ]
  },
  'famosos': {
    name: 'Famosos',
    description: 'Personas famosas y celebridades',
    words: [
      'Cristiano Ronaldo', 'Lionel Messi', 'LeBron James', 'Serena Williams',
      'Taylor Swift', 'Ed Sheeran', 'Beyoncé', 'Ariana Grande',
      'Leonardo DiCaprio', 'Brad Pitt', 'Angelina Jolie', 'Jennifer Lawrence',
      'Elon Musk', 'Bill Gates', 'Steve Jobs', 'Oprah Winfrey',
      'Albert Einstein', 'Marie Curie', 'Nelson Mandela', 'Martin Luther King'
    ]
  },
  'comida': {
    name: 'Comida',
    description: 'Platos y alimentos deliciosos',
    words: [
      'Pizza', 'Hamburguesa', 'Sushi', 'Pasta', 'Tacos',
      'Paella', 'Ceviche', 'Ramen', 'Curry', 'Kebab',
      'Chocolate', 'Helado', 'Tarta', 'Donuts', 'Cupcakes',
      'Café', 'Té', 'Cerveza', 'Vino', 'Cóctel'
    ]
  },
  'animales': {
    name: 'Animales',
    description: 'Criaturas del reino animal',
    words: [
      'León', 'Tigre', 'Elefante', 'Jirafa', 'Cebra',
      'Mono', 'Panda', 'Koala', 'Delfín', 'Ballena',
      'Águila', 'Colibrí', 'Pingüino', 'Tucán', 'Flamenco',
      'Gato', 'Perro', 'Hamster', 'Conejo', 'Pez'
    ]
  },
  'lugares': {
    name: 'Lugares',
    description: 'Ciudades, países y destinos',
    words: [
      'París', 'Londres', 'Nueva York', 'Tokio', 'Roma',
      'Barcelona', 'Madrid', 'Sevilla', 'Valencia', 'Bilbao',
      'Egipto', 'Japón', 'Italia', 'Francia', 'España',
      'Disneyland', 'Torre Eiffel', 'Coliseo', 'Sagrada Familia', 'Alhambra'
    ]
  },
  'deportes': {
    name: 'Deportes',
    description: 'Deportes y actividades físicas',
    words: [
      'Fútbol', 'Baloncesto', 'Tenis', 'Golf', 'Natación',
      'Ciclismo', 'Running', 'Boxeo', 'Karate', 'Yoga',
      'Esquí', 'Snowboard', 'Surf', 'Escalada', 'Pilates',
      'Crossfit', 'Fitness', 'Danza', 'Ballet', 'Hip Hop'
    ]
  },
  'tecnologia': {
    name: 'Tecnología',
    description: 'Gadgets y avances tecnológicos',
    words: [
      'iPhone', 'Android', 'WhatsApp', 'Instagram', 'TikTok',
      'YouTube', 'Netflix', 'Spotify', 'Google', 'Facebook',
      'Ordenador', 'Tablet', 'Smartwatch', 'Auriculares', 'Cámara',
      'Drone', 'Robot', 'Inteligencia Artificial', 'Realidad Virtual', 'Blockchain'
    ]
  },
  'profesiones': {
    name: 'Profesiones',
    description: 'Trabajos y oficios',
    words: [
      'Médico', 'Enfermero', 'Profesor', 'Abogado', 'Ingeniero',
      'Chef', 'Piloto', 'Bombero', 'Policía', 'Veterinario',
      'Arquitecto', 'Diseñador', 'Programador', 'Periodista', 'Actor',
      'Músico', 'Pintor', 'Escritor', 'Fotógrafo', 'Psicólogo'
    ]
  }
};

// Función para obtener todas las palabras de todas las categorías
export const getAllWords = () => {
  const allWords = [];
  Object.values(categories).forEach(category => {
    if (category.words && category.words.length > 0) {
      allWords.push(...category.words);
    }
  });
  return allWords;
};

// Función para obtener palabras aleatorias de una categoría
export const getRandomWords = (categoryKey, count = 5) => {
  if (categoryKey === 'todas') {
    const allWords = getAllWords();
    return getRandomFromArray(allWords, count);
  }
  
  const category = categories[categoryKey];
  if (!category || !category.words) {
    return [];
  }
  
  return getRandomFromArray(category.words, count);
};

// Función auxiliar para obtener elementos aleatorios de un array
const getRandomFromArray = (array, count) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
