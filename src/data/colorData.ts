
export interface ColorTest {
  id: number;
  colorA: string;
  colorB: string;
  isSame: boolean;
  testType: 'control' | 'red-green' | 'blue-yellow';
  description: string;
}

export const colorTests: ColorTest[] = [
  // --- Red-Green Tests (Protanopia/Deuteranopia) ---
  {
    id: 1,
    colorA: '#FF0000', // Red
    colorB: '#00FF00', // Green
    isSame: false,
    testType: 'red-green',
    description: 'Rojo vs. Verde',
  },
  {
    id: 2,
    colorA: '#964B00', // Brown
    colorB: '#006400', // Dark Green
    isSame: false,
    testType: 'red-green',
    description: 'Marrón vs. Verde Oscuro',
  },
  {
    id: 3,
    colorA: '#FFA500', // Orange
    colorB: '#90EE90', // Light Green
    isSame: false,
    testType: 'red-green',
    description: 'Naranja vs. Verde Claro',
  },

  // --- Blue-Yellow Tests (Tritanopia) ---
  {
    id: 4,
    colorA: '#0000FF', // Blue
    colorB: '#00CED1', // Turquoise
    isSame: false,
    testType: 'blue-yellow',
    description: 'Azul vs. Turquesa',
  },
  {
    id: 5,
    colorA: '#FFFF00', // Yellow
    colorB: '#FFB6C1', // Light Pink
    isSame: false,
    testType: 'blue-yellow',
    description: 'Amarillo vs. Rosa Claro',
  },
  {
    id: 6,
    colorA: '#00008B', // Dark Blue
    colorB: '#800080', // Purple
    isSame: false,
    testType: 'blue-yellow',
    description: 'Azul Oscuro vs. Púrpura',
  },

  // --- Control Tests (Should be easy to answer) ---
  {
    id: 7,
    colorA: '#3498db', // Blue
    colorB: '#3498db', // Blue
    isSame: true,
    testType: 'control',
    description: 'Control: Colores idénticos',
  },
  {
    id: 8,
    colorA: '#e74c3c', // Red
    colorB: '#f1c40f', // Yellow
    isSame: false,
    testType: 'control',
    description: 'Control: Colores muy diferentes',
  },
  {
    id: 9,
    colorA: '#2ecc71', // Green
    colorB: '#2ecc71', // Green
    isSame: true,
    testType: 'control',
    description: 'Control: Colores idénticos',
  },
    {
    id: 10,
    colorA: '#9b59b6', // Purple
    colorB: '#9b59b6', // Purple
    isSame: true,
    testType: 'control',
    description: 'Control: Colores idénticos',
  },
];
