# 🎨 Color Blindness Game / Juego de Daltonismo

**Un juego interactivo donde convierto mi daltonismo en una experiencia para que veas los colores como yo los veo.**

*An interactive game where I turn my color blindness into an experience so you can see colors the way I see them.*

![Color Blindness Game](https://img.shields.io/badge/React-19.x-blue.svg) ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-blue.svg) ![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.x-purple.svg)

## 🌟 Características

### 🎮 **Dos Modos de Juego**
- **Modo Comparar**: Compara pares de colores y decide si son iguales o diferentes
- **Modo Identificar**: Identifica el color mostrado seleccionando la respuesta correcta

### 🌍 **Multiidioma**
- **Español** e **Inglés** completamente soportados
- Cambio dinámico de idioma en tiempo real

### ✨ **Animaciones Fluidas**
- Animaciones suaves con **Framer Motion**
- Transiciones elegantes entre pantallas
- Efectos hover interactivos
- Animaciones de entrada progresivas

### 📊 **Análisis Inteligente**
- Detección de patrones de daltonismo
- Análisis específico para diferentes tipos de deficiencias
- Visualización del espectro de colores con indicadores
- Estadísticas detalladas de rendimiento

### 🎨 **Diseño Moderno**
- Interfaz limpia y accesible
- Efectos de cristal esmerilado (*glassmorphism*)
- Animaciones de fondo dinámicas
- Responsive design para todos los dispositivos

## 🚀 **Instalación y Uso**

### Prerrequisitos
- Node.js 18.x o superior
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/JaviRL7/Daltonismo.git

# Navegar al directorio
cd Daltonismo

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build
```

### Scripts Disponibles
```bash
npm run dev      # Servidor de desarrollo
npm run build    # Construcción para producción
npm run preview  # Vista previa de la build
npm run lint     # Análisis de código
```

## 🛠️ **Tecnologías Utilizadas**

### Frontend
- **React 19** - Librería de componentes
- **TypeScript** - Tipado estático
- **Vite** - Build tool y servidor de desarrollo
- **Tailwind CSS** - Framework de estilos utilitarios

### Animaciones y UX
- **Framer Motion** - Librería de animaciones
- **React Confetti** - Efectos de celebración
- **React Icons** - Íconos vectoriales

### Herramientas de Desarrollo
- **ESLint** - Linting de código
- **PostCSS** - Procesamiento de CSS
- **Autoprefixer** - Prefijos automáticos de CSS

## 📁 **Estructura del Proyecto**

```
src/
├── components/          # Componentes reutilizables
│   ├── AnimatedBackground.tsx
│   ├── AnimatedButton.tsx
│   └── ColorBox.tsx
├── contexts/           # Contextos de React
│   └── LanguageContext.tsx
├── data/              # Datos y configuración
│   ├── colorData.ts
│   ├── identifyColorData.ts
│   └── translations.ts
├── screens/           # Pantallas principales
│   ├── GameScreen.tsx
│   ├── IdentifyColorScreen.tsx
│   ├── IdentifyResultsScreen.tsx
│   ├── ResultsScreen.tsx
│   └── StartScreen.tsx
├── App.tsx           # Componente principal
├── main.tsx         # Punto de entrada
└── index.css       # Estilos globales
```

## 🎯 **Funcionalidades Principales**

### Sistema de Testing
- **Tests de Comparación**: Pares de colores con diferentes niveles de dificultad
- **Tests de Identificación**: Selección de colores específicos
- **Análisis de Resultados**: Detección de patrones de daltonismo

### Análisis de Daltonismo
- **Protanopia/Deuteranopia**: Detección de deficiencias rojo-verde
- **Tritanopia**: Detección de deficiencias azul-amarillo
- **Análisis Estadístico**: Evaluación del rendimiento general

### Experiencia de Usuario
- **Feedback Visual**: Animaciones de éxito y error
- **Progreso Visual**: Indicadores de progreso durante los tests
- **Celebración**: Efectos especiales para puntuaciones perfectas

## 🌐 **Despliegue**

### Opciones Recomendadas

1. **Vercel** (Recomendado)
   ```bash
   # Instalar Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel
   ```

2. **Netlify**
   - Conectar repositorio de GitHub
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Railway**
   ```bash
   # Instalar Railway CLI
   npm install -g @railway/cli
   
   # Deploy
   railway login
   railway link
   railway up
   ```

4. **GitHub Pages**
   ```bash
   # Instalar gh-pages
   npm install --save-dev gh-pages
   
   # Deploy
   npm run build
   npx gh-pages -d dist
   ```

## 👤 **Autor**

**Javier Rodríguez López - El Daltónico**
- 📧 Email: [Jrlsanlucar11@gmail.com](mailto:Jrlsanlucar11@gmail.com)
- 💼 LinkedIn: [javier-rodriguez-lopez](https://linkedin.com/in/javier-rodriguez-lopez-4795a8180)
- 🐙 GitHub: [@JaviRL7](https://github.com/JaviRL7)
- 🌐 Portfolio: [Mi Portfolio](https://profound-inspiration-production.up.railway.app/)

## 📖 **Historia Personal**

Como desarrollador que vive con daltonismo, decidí crear esta aplicación para ayudar a otros a comprender cómo percibimos los colores las personas con esta condición. El proyecto combina mi experiencia personal con la tecnología para crear una herramienta educativa e interactiva.

## 🤝 **Contribuciones**

Las contribuciones son bienvenidas! Si quieres mejorar el proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 **Licencia**

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🔗 **Recursos Adicionales**

- [Wikipedia - Daltonismo](https://es.wikipedia.org/wiki/Daltonismo)
- [Color Blindness - Wikipedia](https://en.wikipedia.org/wiki/Color_blindness)
- [Documentación de React](https://react.dev)
- [Documentación de Framer Motion](https://www.framer.com/motion/)
- [Documentación de Tailwind CSS](https://tailwindcss.com)

---

**¡Gracias por explorar mi proyecto! Espero que esta experiencia te ayude a entender mejor el mundo del daltonismo.** 🎨✨
