export interface IdentifyColorQuestion {
  color: string;
  answer: string;
  options: string[];
}

export const identifyColorQuestions: IdentifyColorQuestion[] = [
  {
    color: '#FF4500', // Orangered
    answer: 'Naranja',
    options: ['Rojo', 'Verde', 'Naranja', 'Azul'],
  },
  {
    color: '#9400D3', // Darkviolet
    answer: 'Violeta',
    options: ['Azul', 'Violeta', 'Rojo', 'Marrón'],
  },
  {
    color: '#008080', // Teal
    answer: 'Verde azulado',
    options: ['Verde azulado', 'Gris', 'Azul', 'Verde'],
  },
  {
    color: '#FFD700', // Gold
    answer: 'Amarillo',
    options: ['Amarillo', 'Naranja', 'Marrón', 'Verde'],
  },
  {
    color: '#D2691E', // Chocolate
    answer: 'Marrón',
    options: ['Naranja', 'Rojo', 'Marrón', 'Gris'],
  },
  {
    color: '#DC143C', // Crimson
    answer: 'Rojo',
    options: ['Rojo', 'Rosa', 'Naranja', 'Marrón'],
  },
  {
    color: '#00FFFF', // Aqua
    answer: 'Cian',
    options: ['Verde', 'Azul', 'Blanco', 'Cian'],
  },
  {
    color: '#FF00FF', // Magenta
    answer: 'Magenta',
    options: ['Rosa', 'Rojo', 'Violeta', 'Magenta'],
  },
  {
    color: '#ADFF2F', // Greenyellow
    answer: 'Verde amarillento',
    options: ['Amarillo', 'Verde', 'Verde amarillento', 'Lima'],
  },
  {
    color: '#4682B4', // Steelblue
    answer: 'Azul acero',
    options: ['Azul', 'Gris', 'Verde', 'Azul acero'],
  },
];
