# Trillo

A modern hotel booking application UI built with advanced CSS Flexbox techniques. This project demonstrates mastery of Flexbox layouts, CSS animations, and responsive design patterns for creating beautiful, functional booking interfaces.

## Overview

Trillo is a fictional all-in-one booking app interface that showcases modern CSS architecture and Flexbox capabilities. The project features a complete hotel booking UI with navigation, search functionality, hotel details, user reviews, and call-to-action components. Built as a single-page application using pure CSS and HTML, it demonstrates how powerful modern CSS has become for creating complex layouts without JavaScript.

## Features

- **Advanced Flexbox Layouts** - Complex nested flex containers for perfect alignment
- **CSS Custom Properties** - Dynamic theming with CSS variables
- **SVG Icon System** - Scalable vector icons using sprite sheets
- **Responsive Design** - Mobile-first approach with breakpoints
- **CSS Animations** - Smooth transitions and hover effects
- **BEM Methodology** - Scalable and maintainable CSS architecture
- **Component-Based Structure** - Reusable UI components
- **No JavaScript Required** - Pure CSS implementation

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn package manager
- Modern web browser

### Installation

```bash
# Clone the repository
git clone https://github.com/N73311/trillo.git
cd trillo

# Install dependencies
npm install
```

### Development

```bash
# Start development server with live reload
npm start

# This runs:
# - Live server for hot reloading
# - Sass compiler in watch mode
```

### Production Build

```bash
# Build optimized CSS
npm run build:css

# This runs:
# 1. Compile Sass to CSS
# 2. Concatenate CSS files
# 3. Add vendor prefixes
# 4. Compress final output
```

## Project Structure

```
trillo/
├── sass/
│   └── main.scss           # Main Sass entry point
├── css/
│   └── style.css          # Compiled CSS output
├── img/
│   ├── sprite.svg         # SVG icon sprite
│   ├── hotel-*.jpg        # Hotel images
│   ├── user-*.jpg         # User avatars
│   └── logo.png           # Application logo
├── index.html             # Main HTML file
└── package.json           # Build configuration
```

## Technical Implementation

### Flexbox Architecture

The entire layout is built using Flexbox:

```scss
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  display: flex;
  flex: 1;
}

.sidebar {
  flex: 0 0 18%;
  display: flex;
  flex-direction: column;
}
```

### CSS Variables

```scss
:root {
  --color-primary: #eb2f64;
  --color-primary-light: #FF3366;
  --color-primary-dark: #BA265D;
  
  --color-grey-light-1: #faf9f9;
  --color-grey-light-2: #f4f2f2;
  --color-grey-dark: #333;
}
```

### SVG Sprite System

```html
<svg class="icon">
  <use xlink:href="img/sprite.svg#icon-magnifying-glass"></use>
</svg>
```

## Build Process

### Sass Compilation
- Modular Sass architecture with partials
- Variables for colors and measurements
- Mixins for media queries and animations
- Nesting for component organization

### CSS Optimization
1. **Autoprefixer** - Adds vendor prefixes for browser compatibility
2. **Concatenation** - Combines multiple CSS files
3. **Compression** - Minifies final CSS output

## Key Components

### Header
- Logo positioning
- Search bar with animations
- User navigation menu

### Sidebar
- Navigation links with hover effects
- Legal text at bottom
- Flexible spacing

### Hotel View
- Image gallery
- Hotel details and features
- User reviews section
- Call-to-action booking area

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Development Notes

### NPM Scripts

```json
{
  "watch:sass": "Compile Sass in watch mode",
  "devserver": "Start live-server",
  "start": "Run dev server and Sass compiler",
  "build:css": "Production CSS build pipeline"
}
```

### Color Scheme

- **Primary**: #eb2f64 (Pink/Red)
- **Primary Light**: #FF3366
- **Primary Dark**: #BA265D
- **Greys**: Multiple shades for UI hierarchy

## Performance Optimizations

- Optimized images for web
- SVG sprites for icons
- Minified CSS output
- Efficient selectors
- No JavaScript overhead

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Future Enhancements

- CSS Grid integration for more complex layouts
- Dark mode theme
- Additional booking components
- Form validation with CSS
- Print stylesheet

## License

This project is licensed under the ISC License - see the package.json file for details.

## Acknowledgments

- Jonas Schmedtmann for the original course design
- Advanced CSS and Sass course inspiration
- Flexbox specification contributors
