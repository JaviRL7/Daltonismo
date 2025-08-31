export interface Translation {
  // Header
  gameTitle: string;
  gameSubtitle: string;
  author: string;
  
  // Start Screen
  startTitle: string;
  startDescription: string;
  startButton: string;
  
  // Game Mode
  changeModeButton: string;
  compareMode: string;
  identifyMode: string;
  
  // Game Screen
  sameButton: string;
  differentButton: string;
  
  // Results Screen
  resultsTitle: string;
  analysisLabel: string;
  playAgainButton: string;
  wikiLink: string;
  
  // Analysis messages
  strongColorBlindness: string;
  redGreenDeficiency: string;
  blueYellowDeficiency: string;
  perfectScore: string;
  unclearPattern: string;
  
  // Identify Screen
  identifyTitle: string;
  identifyScore: string;
  identifyDescription: string;
  
  // Language
  language: string;
  english: string;
  spanish: string;
}

export const translations: Record<'es' | 'en', Translation> = {
  es: {
    // Header
    gameTitle: "Color Blindness",
    gameSubtitle: "Game",
    author: "por Javier Rodríguez",
    
    // Start Screen
    startTitle: "Prueba de Daltonismo",
    startDescription: "Un juego donde convierto mi daltonismo en una experiencia para que veas los colores como yo los veo.",
    startButton: "Empezar Juego",
    
    // Game Mode
    changeModeButton: "Cambiar modo de juego:",
    compareMode: "Comparar",
    identifyMode: "Identificar",
    
    // Game Screen
    sameButton: "Iguales",
    differentButton: "Diferentes",
    
    // Results Screen
    resultsTitle: "Resultados",
    analysisLabel: "Análisis:",
    playAgainButton: "Jugar de Nuevo",
    wikiLink: "Más información sobre el daltonismo en Wikipedia",
    
    // Analysis messages
    strongColorBlindness: "Podrías tener daltonismo. Te recomendamos consultar a un especialista.",
    redGreenDeficiency: "Has tenido varias confusiones en los pares rojo-verde. Esto podría sugerir una deficiencia del tipo Protanopia o Deuteranopia.",
    blueYellowDeficiency: "Has tenido varias confusiones en los pares azul-amarillo. Esto podría sugerir una deficiencia del tipo Tritanopia.",
    perfectScore: "¡Felicidades! No parece que seas daltónico.",
    unclearPattern: "Tus resultados no sugieren un patrón claro de daltonismo, pero has tenido algunos fallos.",
    
    // Identify Screen
    identifyTitle: "Identifica el Color",
    identifyScore: "Puntuación:",
    identifyDescription: "Selecciona el color que ves en la imagen.",
    
    // Language
    language: "Idioma",
    english: "Inglés",
    spanish: "Español"
  },
  en: {
    // Header
    gameTitle: "Color Blindness",
    gameSubtitle: "Game",
    author: "by Javier Rodríguez",
    
    // Start Screen
    startTitle: "Color Blindness Test",
    startDescription: "A game where I turn my color blindness into an experience so you can see colors the way I see them.",
    startButton: "Start Game",
    
    // Game Mode
    changeModeButton: "Change game mode:",
    compareMode: "Compare",
    identifyMode: "Identify",
    
    // Game Screen
    sameButton: "Same",
    differentButton: "Different",
    
    // Results Screen
    resultsTitle: "Results",
    analysisLabel: "Analysis:",
    playAgainButton: "Play Again",
    wikiLink: "More information about color blindness on Wikipedia",
    
    // Analysis messages
    strongColorBlindness: "You might have color blindness. We recommend consulting a specialist.",
    redGreenDeficiency: "You had several confusions in red-green pairs. This could suggest a Protanopia or Deuteranopia type deficiency.",
    blueYellowDeficiency: "You had several confusions in blue-yellow pairs. This could suggest a Tritanopia type deficiency.",
    perfectScore: "Congratulations! You don't appear to be color blind.",
    unclearPattern: "Your results don't suggest a clear pattern of color blindness, but you had some mistakes.",
    
    // Identify Screen
    identifyTitle: "Identify the Color",
    identifyScore: "Score:",
    identifyDescription: "Select the color you see in the image.",
    
    // Language
    language: "Language",
    english: "English",
    spanish: "Spanish"
  }
};