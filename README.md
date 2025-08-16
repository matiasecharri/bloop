# Animation Library

A modern, scalable animation library built with Next.js 15, React 19, and GSAP. This project provides a comprehensive platform for creating, testing, and managing animations with a focus on performance and developer experience.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Animation Engine**: Powered by GSAP for high-performance animations
- **Modular Architecture**: Feature-based structure with Atomic Design principles
- **Type Safety**: Full TypeScript implementation with strict mode
- **Responsive Design**: Mobile-first approach with CSS Modules
- **Developer Experience**: ESLint, path aliases, and optimized build process

## 🏗️ Architecture

### Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── features/          # Feature-based components
│   │   ├── home/         # Home page feature
│   │   └── animation-dashboard/  # Main animation dashboard
│   │       ├── context/  # State management
│   │       ├── sidebar/  # Control panel
│   │       └── visualizer/ # Animation preview
│   ├── fonts/            # Local font files
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── shared/               # Reusable code
│   ├── components/       # Atomic Design components
│   │   ├── atoms/       # Basic components
│   │   ├── molecules/   # Compound components
│   │   └── organisms/   # Complex components
│   ├── context/         # Global context providers
│   ├── hooks/           # Custom React hooks
│   ├── types/           # TypeScript type definitions
│   ├── utilities/       # Helper functions
│   └── routes/          # Route definitions
├── config/              # Configuration files
│   └── metadata.ts      # SEO metadata
└── assets/              # Static assets
    ├── images/          # Image files
    └── svg/             # SVG components
```

### Design Patterns

- **Feature-Based Architecture**: Each feature is self-contained with its own components, context, and utilities
- **Atomic Design**: Components organized as atoms, molecules, and organisms
- **Context API**: State management using React Context for feature-specific state
- **CSS Modules**: Scoped styling to prevent conflicts
- **Type Safety**: Comprehensive TypeScript implementation

## 🛠️ Tech Stack

### Core Technologies

- **Next.js 15**: React framework with App Router
- **React 19**: Latest React version with concurrent features
- **TypeScript 5**: Type-safe JavaScript
- **GSAP 3.13**: Professional animation library
- **@gsap/react**: React integration for GSAP

### Development Tools

- **ESLint**: Code linting with Next.js and accessibility rules
- **CSS Modules**: Scoped CSS styling
- **Path Aliases**: Clean import paths with `@/*`

### Styling

- **CSS Modules**: Component-scoped styles
- **CSS Variables**: Design token system
- **Local Fonts**: Optimized font loading with `display: swap`

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd animations-library
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export-animations` - Generate animationsStrings.json from all animation files

## 🎨 Features Overview

### Animation Dashboard

The main feature of the application, providing:

- **Sidebar Controls**: Tabbed interface for animation settings
- **Visualizer**: Real-time animation preview
- **Context Management**: Centralized state for animation controls

### Animation Controls

- **Text Settings**: Font family, size, and content
- **Animation Settings**: Duration, delays, fade effects, and looping
- **Color Picker**: Custom color selection (in development)
- **Background Picker**: Background customization (in development)

### Component Architecture

- **Header**: Reusable header component with title support
- **Sidebar**: Tabbed control panel with icon support
- **Visualizer**: Animation preview area
- **SVG Icons**: Custom icon components for UI elements

## 🔧 Configuration

### TypeScript

The project uses strict TypeScript configuration with:

- Path aliases for clean imports
- Strict type checking
- Modern ES2017+ features

### ESLint

Configured with:

- Next.js recommended rules
- TypeScript support
- Accessibility guidelines (jsx-a11y)

### CSS Variables

Global design tokens defined in `globals.css`:

```css
:root {
  --color-dark: #181818;
  --color-light: #fffce1;
  --max-width: 1500px;
  --nav-height: 95px;
}
```

## 📱 Responsive Design

The application is built with a mobile-first approach:

- Responsive breakpoints
- Touch-friendly interactions
- Optimized for various screen sizes

## 🔮 Future Enhancements

### Planned Features

- [ ] Complete animation picker implementation
- [ ] Color picker functionality
- [ ] Background customization
- [ ] Animation presets library
- [ ] Export animations as code
- [ ] Performance monitoring
- [ ] Unit and integration tests
- [ ] Storybook documentation

### Technical Improvements

- [ ] Error boundaries implementation
- [ ] Loading states and skeletons
- [ ] Performance optimization
- [ ] PWA capabilities
- [ ] Internationalization (i18n)

### Development Guidelines

- Follow the existing code structure and patterns
- Use TypeScript for all new code
- Implement proper error handling
- Add appropriate TypeScript types
- Follow the Atomic Design principles
- Use CSS Modules for styling
